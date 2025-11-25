import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  Autocomplete,
  CircularProgress,
  Box,
} from "@mui/material";

import { updateReservaSchema } from "../../schemas/reservaSchema";
import { validateField } from "../../schemas/validation";

import { getAllHospedes } from "../../services/hospedeService";
import { getAllQuartos } from "../../services/quartoService";
import { getAllFuncionarios } from "../../services/funcionarioService";

import type { Reserva } from "../../types/reserva";
import type { Hospede } from "../../types/hospede";
import type { Quarto } from "../../types/quarto";
import type { Funcionario } from "../../types/funcionario";

import { StatusReserva } from "../../types/enums";

interface EditarReservaModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (id: number, dados: Partial<Reserva>) => Promise<void>;
  reserva: Reserva | null;
}

export const EditarReservaModal = ({ open, onClose, onSave, reserva }: EditarReservaModalProps) => {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    total: "",
    status: StatusReserva.PENDENTE,
    funcionarioId: 0,
    hospedeId: 0,
    quartoId: 0,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(false);
  const [loadingData, setLoadingData] = useState(false);

  const [hospedes, setHospedes] = useState<Hospede[]>([]);
  const [quartos, setQuartos] = useState<Quarto[]>([]);
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);

  // PREENCHE DADOS DA RESERVA QUANDO O MODAL ABRE
  useEffect(() => {
    if (open && reserva) {
      setFormData({
        checkIn: new Date(reserva.checkIn).toISOString().slice(0, 16),
        checkOut: new Date(reserva.checkOut).toISOString().slice(0, 16),
        total: reserva.total?.toString() ?? "",
        status: reserva.status,
        funcionarioId: reserva.funcionarioId,
        hospedeId: reserva.hospedeId,
        quartoId: reserva.quartoId,
      });

      setErrors({});
      setTouched({});
      loadData();
    }
  }, [open, reserva]);

  // CARREGA LISTA DE FUNC/HOS/QTO
  const loadData = async () => {
    setLoadingData(true);
    try {
      const [funcs, hosps, quarts] = await Promise.all([
        getAllFuncionarios(),
        getAllHospedes(),
        getAllQuartos(),
      ]);
      setFuncionarios(funcs);
      setHospedes(hosps);
      setQuartos(quarts);
    } catch (error) {
      console.error("Erro ao carregar dados:", error);
    } finally {
      setLoadingData(false);
    }
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    if (touched[field]) {
      const error = validateField(updateReservaSchema, field, value);
      setErrors((prev) => ({ ...prev, [field]: error }));
    }
  };

    const handleInputChange2 = (field: string, value: string) => {
      setFormData((prev) => ({
        ...prev,
        [field]: field === "total" && value !== "" ? Number(value) : value,
      }));
    };


  const handleBlur = (field: string) => {
    setTouched((prev) => ({ ...prev, [field]: true }));
    const value = formData[field as keyof typeof formData];
    const error = validateField(updateReservaSchema, field, value);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = async () => {
    if (!reserva) return;

    const newErrors: Record<string, string> = {};
    const newTouched: Record<string, boolean> = {};

    for (const key of Object.keys(formData)) {
      newTouched[key] = true;
      const error = validateField(updateReservaSchema, key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    }

    setTouched(newTouched);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);

    try {
      await onSave(reserva.id, {
        checkIn: new Date(formData.checkIn).toISOString(),
        checkOut: new Date(formData.checkOut).toISOString(),
        total: formData.total ? Number(formData.total) : undefined,
        status: formData.status as StatusReserva,
        funcionarioId: formData.funcionarioId,
        hospedeId: formData.hospedeId,
        quartoId: formData.quartoId,
      });

      onClose();
    } catch (error) {
      console.error("Erro ao atualizar reserva:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle sx={{ fontWeight: 700, pb: 1 }}>Editar Reserva</DialogTitle>

      <DialogContent sx={{ pt: 1 }}>
        {loadingData ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 3, mt: 2 }}>
            {/* HÓSPEDE + FUNCIONÁRIO lado a lado */}
            <Box sx={{ display: "flex", gap: 2 }}>
              {/* HÓSPEDE AUTOCOMPLETE */}
              <Autocomplete
                options={hospedes}
                getOptionLabel={(h) => `${h.nome} — ${h.documento}`}
                value={hospedes.find((h) => h.id === formData.hospedeId) || null}
                onChange={(_, value) => handleInputChange("hospedeId", value ? value.id : 0)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Hóspede"
                    error={!!errors.hospedeId && touched.hospedeId}
                    helperText={touched.hospedeId && errors.hospedeId}
                    fullWidth
                  />
                )}
                fullWidth
              />

              {/* FUNCIONÁRIO AUTOCOMPLETE */}
              <Autocomplete
                options={funcionarios}
                getOptionLabel={(f) => f.nome}
                value={funcionarios.find((f) => f.id === formData.funcionarioId) || null}
                onChange={(_, value) => handleInputChange("funcionarioId", value ? value.id : 0)}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Funcionário"
                    error={!!errors.funcionarioId && touched.funcionarioId}
                    helperText={touched.funcionarioId && errors.funcionarioId}
                    fullWidth
                  />
                )}
                fullWidth
              />
            </Box>

            {/* QUARTO */}
            <TextField
              select
              label="Quarto"
              value={formData.quartoId}
              onChange={(e) => handleInputChange("quartoId", Number(e.target.value))}
              onBlur={() => handleBlur("quartoId")}
              error={!!errors.quartoId && touched.quartoId}
              helperText={touched.quartoId && errors.quartoId}
              fullWidth
            >
              {quartos.map((q) => (
                <MenuItem key={q.id} value={q.id}>
                  Quarto {q.numero}
                </MenuItem>
              ))}
            </TextField>

            {/* CHECK-IN e CHECK-OUT lado a lado */}
            <Box sx={{ display: "flex", gap: 2 }}>
              <TextField
                type="datetime-local"
                label="Check-in"
                value={formData.checkIn}
                onChange={(e) => handleInputChange("checkIn", e.target.value)}
                onBlur={() => handleBlur("checkIn")}
                error={!!errors.checkIn && touched.checkIn}
                helperText={touched.checkIn && errors.checkIn}
                slotProps={{ inputLabel: { shrink: true } }}
                fullWidth
              />

              <TextField
                type="datetime-local"
                label="Check-out"
                value={formData.checkOut}
                onChange={(e) => handleInputChange("checkOut", e.target.value)}
                onBlur={() => handleBlur("checkOut")}
                error={!!errors.checkOut && touched.checkOut}
                helperText={touched.checkOut && errors.checkOut}
                slotProps={{ inputLabel: { shrink: true } }}
                fullWidth
              />
            </Box>

            {/* TOTAL */}
            <TextField
              label="Total (opcional)"
              type="number"
              value={formData.total}
              onChange={(e) => handleInputChange2("total", e.target.value)}
              onBlur={() => handleBlur("total")}
              error={!!errors.total && touched.total}
              helperText={touched.total && errors.total}
              fullWidth
            />

            {/* STATUS */}
            <TextField
              select
              label="Status"
              value={formData.status}
              onChange={(e) => handleInputChange("status", e.target.value)}
              onBlur={() => handleBlur("status")}
              error={!!errors.status && touched.status}
              helperText={touched.status && errors.status}
              fullWidth
            >
              {Object.values(StatusReserva).map((s) => (
                <MenuItem key={s} value={s}>
                  {s}
                </MenuItem>
              ))}
            </TextField>
          </Box>
        )}
      </DialogContent>

      <DialogActions sx={{ p: 2 }}>
        <Button onClick={onClose} disabled={loading}>
          Cancelar
        </Button>

        <Button
          variant="contained"
          onClick={handleSubmit}
          disabled={loading || loadingData}
          sx={{ minWidth: 100 }}
        >
          {loading ? <CircularProgress size={22} /> : "Salvar"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
