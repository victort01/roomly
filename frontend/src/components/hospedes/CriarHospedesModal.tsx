import { useState, useCallback } from "react";
import type { Hospede } from "../../types/hospede";
import { createHospede } from "../../services/hospedeService";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";
import { validateCreateHospede } from "../../schemas/validation";

interface CriarHospedesModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: (novoHospede: Hospede) => void;
}

export const CriarHospedesModal = ({ open, onClose, onSuccess }: CriarHospedesModalProps) => {
  const INITIAL_FORM_DATA = {
    nome: "",
    email: "",
    telefone: "",
    documento: "",
  };

  const [formData, setFormData] = useState(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [salvando, setSalvando] = useState(false);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData((prev: any) => ({
        ...prev,
        [name]: value,
      }));
      if (errors[name]) {
        setErrors((prev) => ({ ...prev, [name]: "" }));
      }
    },
    [errors]
  );

  const handleSave = useCallback(async () => {
    const validation = validateCreateHospede(formData);
    if (!validation.success) {
      setErrors(validation.errors);
      return;
    }

    setSalvando(true);
    try {
      const novoHospede = await createHospede(validation.data);
      onSuccess(novoHospede);
      setFormData(INITIAL_FORM_DATA);
      setErrors({});
      onClose();
    } catch (error) {
      console.error("Erro ao criar hóspede:", error);
    } finally {
      setSalvando(false);
    }
  }, [formData, onClose, onSuccess]);

  const handleClose = useCallback(() => {
    setFormData(INITIAL_FORM_DATA);
    setErrors({});
    onClose();
  }, [onClose]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle sx={{ fontWeight: 600, fontSize: "1.25rem" }}>Criar Novo Hóspede</DialogTitle>
      <DialogContent>
        <Box sx={{ display: "flex", flexDirections: "column", gap: 2, mt: 2 }}>
          <TextField
            fullWidth
            label="Nome"
            value={formData.nome}
            name="nome"
            onChange={handleInputChange}
            placeholder="Digite o nome completo"
            error={!!errors.nome}
            helperText={errors.nome}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            type="type"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Digite o email"
            error={!!errors.email}
            helperText={errors.email}
          />
          <TextField
            fullWidth
            label="Telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleInputChange}
            placeholder="Digite o telefone"
            error={!!errors.telefone}
            helperText={errors.telefone}
          />
          <TextField
            fullWidth
            label="Documento"
            name="documento"
            value={formData.documento}
            onChange={handleInputChange}
            placeholder="Digite o documento"
            error={!!errors.documento}
            helperText={errors.documento}
          />
        </Box>
      </DialogContent>
      <DialogActions sx={{ px: 3, py: 2 }}>
        <Button onClick={handleClose} disabled={salvando}>
          Cancelar
        </Button>
        <Button variant="contained" onClick={handleSave} color="primary" disabled={salvando}>
          {salvando ? (
            <>
              <CircularProgress size={20} sx={{ mr: 1 }} />
              Salvando...
            </>
          ) : (
            "Salvar"
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
