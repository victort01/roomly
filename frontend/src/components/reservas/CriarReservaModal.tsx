import { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem,
  CircularProgress,
  Box,
} from "@mui/material";

import { createReservaSchema } from "../../schemas/reservaSchema";
import { validateField } from "../../schemas/validation";

import { getAllHospedes } from "../../services/hospedeService";
import { getAllQuartos } from "../../services/quartoService";
import { getAllFuncionarios } from "../../services/funcionarioService";

import type { Hospede } from "../../types/hospede";
import type { Quarto } from "../../types/quarto";
import type { Funcionario } from "../../types/funcionario";

import { StatusReserva } from "../../types/enums";

interface CriarReservaModalProps {
  open: boolean;
  onClose: () => void;
  onSave: (dados: {
    checkIn: Date;
    checkOut: Date;
    total?: number;
    status: StatusReserva;
    funcionarioId: number;
    hospedeId: number;
    quartoId: number;
  }) => Promise<void>;
}

export const CriarReservaModal = ({ open, onClose, onSave }: CriarReservaModalProps) => {
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

  useEffect(() => {
    if (open) {
      resetForm();
      loadData();
    }
  }, [open]);

  const resetForm = () => {
    setFormData({
      checkIn: "",
      checkOut: "",
      total: "",
      status: StatusReserva.PENDENTE,
      funcionarioId: 0,
      hospedeId: 0,
      quartoId: 0,
    });

    setErrors({});
    setTouched({});
  };

  const loadData = async () => {
    setLoadingData(true);
    try {
      const [funcs, hospes, quarts] = await Promise.all([
        getAllFuncionarios(),
        getAllHospedes(),
        getAllQuartos(),
      ]);

      setFuncionarios(funcs);
      setHospedes(hospes);
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
      const error = validateField(createReservaSchema, field, value);
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
    const error = validateField(createReservaSchema, field, value);
    setErrors((prev) => ({ ...prev, [field]: error }));
  };

  const handleSubmit = async () => {
    const newErrors: Record<string, string> = {};
    const newTouched: Record<string, boolean> = {};

    for (const key of Object.keys(formData)) {
      newTouched[key] = true;
      const error = validateField(createReservaSchema, key, formData[key as keyof typeof formData]);
      if (error) newErrors[key] = error;
    }

    setTouched(newTouched);
    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    setLoading(true);

    try {
      await onSave({
        checkIn: new Date(formData.checkIn),
        checkOut: new Date(formData.checkOut),
        total: formData.total ? Number(formData.total) : undefined,
        status: formData.status as StatusReserva,
        funcionarioId: formData.funcionarioId,
        hospedeId: formData.hospedeId,
        quartoId: formData.quartoId,
      });

      onClose();
    } catch (error) {
      console.error("Erro ao criar reserva:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Nova Reserva</DialogTitle>

      <DialogContent>
        {loadingData ? (
          <Box sx={{ display: "flex", justifyContent: "center", py: 4 }}>
            <CircularProgress />
          </Box>
        ) : (
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}>
            {/* HOSPEDE */}
            <TextField
              select
              label="Hóspede"
              value={formData.hospedeId}
              onChange={(e) => handleInputChange("hospedeId", Number(e.target.value))}
              onBlur={() => handleBlur("hospedeId")}
              error={!!errors.hospedeId && touched.hospedeId}
              helperText={touched.hospedeId && errors.hospedeId}
            >
              <MenuItem value={0}>Selecione um hóspede</MenuItem>
              {hospedes.map((h) => (
                <MenuItem key={h.id} value={h.id}>
                  {h.nome} - {h.documento}
                </MenuItem>
              ))}
            </TextField>

            {/* QUARTO */}
            <TextField
              select
              label="Quarto"
              value={formData.quartoId}
              onChange={(e) => handleInputChange("quartoId", Number(e.target.value))}
              onBlur={() => handleBlur("quartoId")}
              error={!!errors.quartoId && touched.quartoId}
              helperText={touched.quartoId && errors.quartoId}
            >
              <MenuItem value={0}>Selecione um quarto</MenuItem>
              {quartos.map((q) => (
                <MenuItem key={q.id} value={q.id}>
                  Quarto {q.numero}
                </MenuItem>
              ))}
            </TextField>

            {/* FUNCIONARIO */}
            <TextField
              select
              label="Funcionário"
              value={formData.funcionarioId}
              onChange={(e) => handleInputChange("funcionarioId", Number(e.target.value))}
              onBlur={() => handleBlur("funcionarioId")}
              error={!!errors.funcionarioId && touched.funcionarioId}
              helperText={touched.funcionarioId && errors.funcionarioId}
            >
              <MenuItem value={0}>Selecione um funcionário</MenuItem>
              {funcionarios.map((f) => (
                <MenuItem key={f.id} value={f.id}>
                  {f.nome}
                </MenuItem>
              ))}
            </TextField>

            {/* CHECK-IN */}
            <TextField
              type="datetime-local"
              label="Check-in"
              value={formData.checkIn}
              onChange={(e) => handleInputChange("checkIn", e.target.value)}
              onBlur={() => handleBlur("checkIn")}
              error={!!errors.checkIn && touched.checkIn}
              helperText={touched.checkIn && errors.checkIn}
              fullWidth
              slotProps={{ inputLabel: { shrink: true } }}
            />

            {/* CHECK-OUT */}
            <TextField
              type="datetime-local"
              label="Check-out"
              value={formData.checkOut}
              onChange={(e) => handleInputChange("checkOut", e.target.value)}
              onBlur={() => handleBlur("checkOut")}
              error={!!errors.checkOut && touched.checkOut}
              helperText={touched.checkOut && errors.checkOut}
              fullWidth
              slotProps={{ inputLabel: { shrink: true } }}
            />

            {/* TOTAL */}

            <TextField
              label="Total (opcional)"
              type="number"
              value={formData.total}
              onChange={(e) =>
                handleInputChange2("total", e.target.value)
              }
              onBlur={() => handleBlur("total")}
              error={!!errors.total && touched.total}
              helperText={touched.total && errors.total}
              fullWidth
            />

            {/* STATUS */}
            <TextField
              select
              label="Status da Reserva"
              value={formData.status}
              onChange={(e) => handleInputChange("status", e.target.value)}
              onBlur={() => handleBlur("status")}
              error={!!errors.status && touched.status}
              helperText={touched.status && errors.status}
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

      <DialogActions>
        <Button onClick={onClose} disabled={loading}>
          Cancelar
        </Button>
        <Button onClick={handleSubmit} variant="contained" disabled={loading || loadingData}>
          {loading ? <CircularProgress size={22} /> : "Salvar"}
        </Button>
      </DialogActions>
    </Dialog>
  );
};
