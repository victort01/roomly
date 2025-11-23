import { useEffect, useState, useCallback, useMemo } from "react";
import {
  Button,
  Typography,
  Snackbar,
  Alert,
  Box,
  Paper,
  IconButton,
  TextField,
  InputAdornment,
  MenuItem,
  Chip,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";
import { ReservasTable } from "../components/reservas/ReservasTable";
import { CriarReservaModal } from "../components/reservas/CriarReservaModal";
import { EditarReservaModal } from "../components/reservas/EditarReservaModal";
import {
  getAllReservas,
  deleteReserva,
  updateReserva,
  createReserva,
} from "../services/reservaService";
import type { Reserva } from "../types/reserva";
import { useDebounce } from "../hooks/useDebounce";
import type { StatusReserva } from "../types/enums";

type SnackbarState = {
  open: boolean;
  message: string;
  severity: "success" | "error" | "info" | "warning";
};

export const ReservasPage = () => {
  const navigate = useNavigate();
  const [reservas, setReservas] = useState<Reserva[]>([]);
  const [loading, setLoading] = useState(true);
  const [modalCriarOpen, setModalCriarOpen] = useState(false);
  const [modalEditarOpen, setModalEditarOpen] = useState(false);
  const [reservaSelecionada, setReservaSelecionada] = useState<Reserva | null>(null);
  const [deletingId, setDeletingId] = useState<number | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filtroData, setFiltroData] = useState("");
  const [snackbar, setSnackbar] = useState<SnackbarState>({
    open: false,
    message: "",
    severity: "info",
  });

  const carregarReservas = useCallback(async () => {
    setLoading(true);
    try {
      const data = await getAllReservas();
      setReservas(data);
    } catch (error) {
      console.error("Erro ao carregar reservas:", error);
      setSnackbar({
        open: true,
        message: "Erro ao buscar reservas.",
        severity: "error",
      });
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    carregarReservas();
  }, [carregarReservas]);

  const handleDelete = useCallback(async (id: number) => {
    setDeletingId(id);

    try {
      await deleteReserva(id);
      setReservas((prev) => prev.filter((c) => c.id !== id));
      setSnackbar({
        open: true,
        message: "Reserva removida com sucesso.",
        severity: "success",
      });
    } catch (error) {
      console.error("Erro ao excluir reserva:", error);
      setSnackbar({
        open: true,
        message: "Erro ao deletar reserva.",
        severity: "error",
      });
    } finally {
      setDeletingId(null);
    }
  }, []);

  const handleOpenEditModal = useCallback((reserva: Reserva) => {
    setReservaSelecionada(reserva);
    setModalEditarOpen(true);
  }, []);

  const handleCloseEditModal = useCallback(() => {
    setReservaSelecionada(null);
    setModalEditarOpen(false);
  }, []);

  const handleSaveEdit = useCallback(
    async (id: number, dados: Partial<Reserva>) => {
      try {
        await updateReserva(id, dados);
        await carregarReservas();
        setSnackbar({
          open: true,
          message: "Reserva atualizada com sucesso.",
          severity: "success",
        });
      } catch (error) {
        console.error("Erro ao atualizar reserva:", error);
        setSnackbar({
          open: true,
          message: "Erro ao atualizar reserva.",
          severity: "error",
        });
        throw error;
      }
    },
    [carregarReservas]
  );

  const handleSucessoCriarReserva = useCallback(
    async (dados: {
      funcionarioId: number;
      hospedeId: number;
      quartoId: number;
      checkIn: Date;
      checkOut: Date;
      status: StatusReserva;
    }) => {
      try {
        // converte Date para string ISO
        const dadosParaEnviar = {
          ...dados,
          checkIn: dados.checkIn.toISOString(),
          checkOut: dados.checkOut.toISOString(),
        };

        await createReserva(dadosParaEnviar);
        await carregarReservas();
        setSnackbar({
          open: true,
          message: "Reserva cadastrada com sucesso.",
          severity: "success",
        });
      } catch (error) {
        console.error("Erro ao criar reserva:", error);
        setSnackbar({
          open: true,
          message: "Erro ao criar reserva.",
          severity: "error",
        });
        throw error;
      }
    },
    [carregarReservas]
  );

  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  const reservasFiltradas = useMemo(() => {
    let resultado = [...reservas];

    // --- Filtro de busca por texto ---
    if (debouncedSearchTerm.trim()) {
      const termoBusca = debouncedSearchTerm.toLowerCase().trim();

      resultado = resultado.filter((reserva) => {
        return (
          reserva.hospede?.nome.toLowerCase().includes(termoBusca) ||
          reserva.hospede?.documento.includes(termoBusca) ||
          reserva.quarto?.numero.toLowerCase().includes(termoBusca) ||
          reserva.status?.toLowerCase().includes(termoBusca)
        );
      });
    }

    // --- Filtro por período ---
    if (filtroData) {
      const hoje = new Date();
      hoje.setHours(0, 0, 0, 0);

      resultado = resultado.filter((reserva) => {
        const checkIn = new Date(reserva.checkIn);
        const checkOut = new Date(reserva.checkOut);

        // Normaliza horários para comparação
        checkIn.setHours(0, 0, 0, 0);
        checkOut.setHours(0, 0, 0, 0);

        switch (filtroData) {
          case "hoje": {
            // Reserva ativa ou começando hoje
            return checkIn.getTime() === hoje.getTime() || (hoje >= checkIn && hoje <= checkOut);
          }

          case "semana": {
            const fimSemana = new Date(hoje);
            fimSemana.setDate(fimSemana.getDate() + 7);
            return checkIn <= fimSemana && checkOut >= hoje;
          }

          case "mes": {
            return (
              checkIn.getMonth() === hoje.getMonth() && checkIn.getFullYear() === hoje.getFullYear()
            );
          }

          case "passadas": {
            return checkOut < hoje; // completamente finalizadas
          }

          case "futuras": {
            return checkIn > hoje; // ainda não começaram
          }

          default:
            return true;
        }
      });
    }

    return resultado;
  }, [reservas, debouncedSearchTerm, filtroData]);
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
          maxWidth: 1400,
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
          Gerenciar Reservas
        </Typography>

        <Box mt={3} display="flex" justifyContent="flex-end" margin={2}>
          <Button
            variant="contained"
            color="primary"
            className="uppercase font-bold"
            onClick={() => setModalCriarOpen(true)}
          >
            Cadastrar Nova Reserva
          </Button>
        </Box>

        <Box display="flex" gap={2} mb={3} flexDirection={{ xs: "column", md: "row" }}>
          <Box flex={1}>
            <TextField
              fullWidth
              placeholder="Buscar por hóspede, quarto..."
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
          </Box>
          <Box width={{ xs: "100%", md: 300 }}>
            <TextField
              select
              fullWidth
              label="Filtrar por período"
              value={filtroData}
              onChange={(e) => setFiltroData(e.target.value)}
              size="small"
            >
              <MenuItem value="">Todas</MenuItem>
              <MenuItem value="hoje">Hoje</MenuItem>
              <MenuItem value="semana">Próximos 7 dias</MenuItem>
              <MenuItem value="mes">Este mês</MenuItem>
              <MenuItem value="futuras">Futuras</MenuItem>
              <MenuItem value="passadas">Passadas</MenuItem>
            </TextField>
          </Box>
        </Box>

        {(debouncedSearchTerm || filtroData) && (
          <Box mb={2} display="flex" alignItems="center" gap={1}>
            <Typography variant="body2" color="text.secondary">
              Resultados encontrados:
            </Typography>
            <Chip
              label={reservasFiltradas.length}
              size="small"
              color="primary"
              variant="outlined"
            />
            {reservasFiltradas.length !== reservas.length && (
              <Typography variant="body2" color="text.secondary">
                de {reservas.length} total
              </Typography>
            )}
          </Box>
        )}

        <ReservasTable
          reservas={reservasFiltradas}
          deletingId={deletingId}
          onDelete={handleDelete}
          onEdit={handleOpenEditModal}
          loading={loading}
        />

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

      <CriarReservaModal
        open={modalCriarOpen}
        onClose={() => setModalCriarOpen(false)}
        onSave={handleSucessoCriarReserva}
      />

      <EditarReservaModal
        open={modalEditarOpen}
        onClose={handleCloseEditModal}
        onSave={handleSaveEdit}
        reserva={reservaSelecionada}
      />
    </Box>
  );
};
