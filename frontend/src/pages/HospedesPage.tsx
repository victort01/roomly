import { useEffect, useState, useCallback, useMemo } from "react";
import type { Hospede } from "../types/hospede";
import { deleteHospede } from "../services/hospedeService";
import {
  Box,
  Paper,
  Typography,
  IconButton,
  Button,
  Snackbar,
  Alert,
  TextField,
  InputAdornment,
  Chip,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import HospedesTable from "../components/hospedes/HospedesTable";
import { EditarHospedesModal } from "../components/hospedes/EditarHospedesModal";
import { CriarHospedesModal } from "../components/hospedes/CriarHospedesModal";
import { useDebounce } from "../hooks/useDebounce";
import { getAllHospedes } from "../services/hospedeService";

type SnackbarState = {
  open: boolean;
  message: string;
  severity: "success" | "error" | "info" | "warning";
};

export const HospedesPage = () => {
  const navigate = useNavigate();
  const [hospedes, setPacientes] = useState<Hospede[]>([]);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: "",
    severity: "info",
  });
  const [hospedeEditando, setHospedeEditando] = useState<Hospede | null>(null);
  const [abrirModalCriar, setAbrirModalCriar] = useState<boolean>(false);

  useEffect(() => {
    const carregarHospedes = async () => {
      try {
        const data = await getAllHospedes();
        setPacientes(data);
      } catch (error) {
        console.error("Erro ao buscar hóspedes:", error);
        setSnackbar({
          open: true,
          message: "Erro ao buscar hóspedes.",
          severity: "error",
        });
      }
    };

    carregarHospedes();
  }, []);

  const handleDelete = useCallback(async (id: number) => {
    setDeletingId(id);

    try {
      await deleteHospede(id);
      setPacientes((prev) => prev.filter((p) => p.id !== id));
      setSnackbar({
        open: true,
        message: "Hóspede removido com sucesso.",
        severity: "success",
      });
    } catch (error) {
      console.error("Erro ao deletar hóspede:", error);
      setSnackbar({
        open: true,
        message: "Erro ao deletar hóspede.",
        severity: "error",
      });
    } finally {
      setDeletingId(null);
    }
  }, []);

  const handleOpenEditModal = useCallback((hospede: Hospede) => {
    setHospedeEditando(hospede);
  }, []);

  const handleCloseEditModal = useCallback(() => {
    setHospedeEditando(null);
  }, []);

  const handleSaveHospede = useCallback((hospedeAtualizado: Hospede) => {
    setPacientes((prev) =>
      prev.map((p) => (p.id === hospedeAtualizado.id ? hospedeAtualizado : p))
    );
    setSnackbar({
      open: true,
      message: "Paciente atualizado com sucesso.",
      severity: "success",
    });
  }, []);

  const handleSucessoCriarPaciente = useCallback((novoHospede: Hospede) => {
    setPacientes((prev) => [...prev, novoHospede]);
    setSnackbar({
      open: true,
      message: "Hóspede cadastrado com sucesso.",
      severity: "success",
    });
  }, []);

  const debouncedSearchTerm = useDebounce(searchTerm, 300);

  const hospedesFiltrados = useMemo(() => {
    if (!debouncedSearchTerm.trim()) return hospedes;

    const termoBusca = debouncedSearchTerm.toLowerCase().trim();

    return hospedes.filter((hospede) => {
      return (
        hospede.nome.toLowerCase().includes(termoBusca) ||
        hospede.documento.includes(termoBusca) ||
        (hospede.telefone?.includes(termoBusca) ?? false)
      );
    });
  }, [hospedes, debouncedSearchTerm]);

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      minHeight="100vh"
      bgcolor="background.default"
      p={3}
    >
      <Paper
        elevation={3}
        sx={(theme) => ({
          width: "100%",
          maxWidth: 1000,
          p: 3,
          position: "relative",
          bgcolor: theme.palette.mode === "dark" ? "#242424" : "background.paper",
          color: theme.palette.text.primary,
          borderRadius: 2,
        })}
      >
        <IconButton
          aria-label="voltar"
          onClick={() => navigate("/home")}
          size="small"
          sx={{ position: "absolute", left: 16, top: 16 }}
        >
          <ArrowBackIcon fontSize="small" />
        </IconButton>

        <Typography variant="h5" fontWeight={600} mb={3} textAlign="center">
          Lista de Hóspedes
        </Typography>

        <Box mb={3}>
          <TextField
            fullWidth
            placeholder="Buscar por nome, email, CPF ou telefone..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            slotProps={{
              input: {
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              },
            }}
            size="small"
          />
          {debouncedSearchTerm && (
            <Box mt={1} display="flex" alignItems="center" gap={1}>
              <Typography variant="body2" color="text.secondary">
                Resultados encontrados:
              </Typography>
              <Chip
                label={hospedesFiltrados.length}
                size="small"
                color="primary"
                variant="outlined"
              />
              {hospedesFiltrados.length !== hospedes.length && (
                <Typography variant="body2" color="text.secondary">
                  de {hospedes.length} total
                </Typography>
              )}
            </Box>
          )}
        </Box>

        <HospedesTable
          hospedes={hospedesFiltrados}
          deletingId={deletingId}
          onDelete={handleDelete}
          onEdit={handleOpenEditModal}
        />

        <Box mt={3} display="flex" justifyContent="flex-end">
          <Button
            variant="contained"
            color="primary"
            className="uppercase font-bold"
            onClick={() => setAbrirModalCriar(true)}
          >
            Novo Paciente
          </Button>
        </Box>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={4000}
          onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
          anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
          <Alert
            onClose={() => setSnackbar((s) => ({ ...s, open: false }))}
            severity={snackbar.severity}
            sx={{ width: "100%" }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Paper>

      <EditarHospedesModal
        open={hospedeEditando !== null}
        hospede={hospedeEditando}
        onClose={handleCloseEditModal}
        onSave={handleSaveHospede}
      />

      <CriarHospedesModal
        open={abrirModalCriar}
        onClose={() => setAbrirModalCriar(false)}
        onSuccess={handleSucessoCriarPaciente}
      />
    </Box>
  );
};

export default HospedesPage;
