import { useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Box, Typography, Paper, Alert, CircularProgress } from "@mui/material";
import { Login as LoginIcon } from "@mui/icons-material";
import type { Funcionario } from "../types/funcionario";
import { validateLogin } from "../schemas/validation";
import { login } from "../services/loginService";

const REDIRECT_DELAY = 2000;

const LoginPage: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    senha: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [msgSucesso, setMsgSucesso] = useState("");
  const [msgErro, setMsgErro] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
    setMsgErro("");
  }, []);

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      const validation = validateLogin(formData);

      if (!validation.success) {
        setErrors(validation.errors);
        return;
      }

      setIsLoading(true);
      setMsgErro("");
      setMsgSucesso("");

      try {
        const funcionario: Funcionario = await login(formData.email, formData.senha);

        setMsgSucesso(`Bem-vindo(a), ${funcionario.nome}!`);

        setTimeout(() => {
          navigate("/home");
        }, REDIRECT_DELAY);
      } catch (error) {
        console.error("Erro no login:", error);
        setMsgErro("Erro ao realizar login. Verifique suas credenciais.");
      } finally {
        setIsLoading(false);
      }
    },
    [formData, navigate]
  );

  return (
    <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh" px={2}>
      <Paper elevation={4} sx={{ p: 4, width: 360, borderRadius: 3 }}>
        <Box textAlign="center" mb={2}>
          <LoginIcon sx={{ fontSize: 42, color: "primary.main", mb: 1 }} />
          <Typography variant="h5" fontWeight={700} mb={1}>
            Bem-vindo
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Faça login para acessar o sistema
          </Typography>
        </Box>

        {msgSucesso && (
          <Alert severity="success" sx={{ mb: 2 }}>
            {msgSucesso}
          </Alert>
        )}

        {msgErro && (
          <Alert severity="error" sx={{ mb: 2 }}>
            {msgErro}
          </Alert>
        )}

        <Box component="form" noValidate onSubmit={handleSubmit}>
          <TextField
            label="Email"
            name="email"
            type="email"
            fullWidth
            margin="normal"
            value={formData.email}
            onChange={handleInputChange}
            error={!!errors.email}
            helperText={errors.email}
            disabled={isLoading}
          />

          <TextField
            label="Senha"
            name="senha"
            type="password"
            fullWidth
            margin="normal"
            value={formData.senha}
            onChange={handleInputChange}
            error={!!errors.senha}
            helperText={errors.senha}
            disabled={isLoading}
          />

          <Button type="submit" variant="contained" fullWidth sx={{ mt: 3 }} disabled={isLoading}>
            {isLoading ? (
              <Box display="flex" alignItems="center" gap={1}>
                <CircularProgress size={20} color="inherit" />
                Carregando...
              </Box>
            ) : (
              "Entrar"
            )}
          </Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default LoginPage;
