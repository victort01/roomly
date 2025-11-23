import { useState, useEffect, useCallback } from "react";
import type { Hospede } from "../../types/hospede";
import { updateHospede } from "../../services/hospedeService";
import { validateUpdateHospede } from "../../schemas/validation";
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

interface EditarHospedesModalProps {
  open: boolean;
  hospede: Hospede | null;
  onClose: () => void;
  onSave: (hospede: Hospede) => void;
}

export const EditarHospedesModal = ({
  open,
  hospede,
  onClose,
  onSave,
}: EditarHospedesModalProps) => {
  const INITIAL_FORM_DATA: Hospede = {
    id: 0,
    nome: "",
    documento: "",
    telefone: "",
    email: "",
    createdAt: "",
    updateAt: "",
  };
  const [formData, setFormData] = useState<Hospede>(INITIAL_FORM_DATA);
  const [salvando, setSalvando] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (hospede && open) {
      setFormData(hospede);
      setErrors({});
    }
  }, [hospede, open]);

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  }, []);

  const handleSave = useCallback(async () => {
    const validation = validateUpdateHospede(formData);
    if (!validation.success) {
      setErrors(validation.errors);
      return;
    }
    setSalvando(true);
    try {
      await updateHospede(validation.data.id, validation.data);
      setErrors({});
      onClose();
    } catch (error) {
      console.error("Erro ao atualizar hóspede:", error);
      setErrors({ submit: "Erro ao atualizar hóspede. Tente novamente mais tarde." });
    } finally {
      setSalvando(false);
    }
  }, [formData, onClose]);

  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogTitle sx={{ fontWeigt: 600, fontSize: "1.25rem" }}>Editar Hóspede</DialogTitle>

      <DialogContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 1 }}>
          <TextField
            label="Nome"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
            placeholder="Nome completo do hóspede"
            error={!!errors.nome}
            helperText={errors.nome}
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email do hóspede"
            error={!!errors.email}
            helperText={errors.email}
          />

          <TextField
            label="Telefone"
            name="telefone"
            value={formData.telefone}
            onChange={handleInputChange}
            placeholder="Telefone do hóspede"
            error={!!errors.telefone}
            helperText={errors.telefone}
          />
          <TextField
            label="Documento"
            name="documento"
            value={formData.documento}
            onChange={handleInputChange}
            placeholder="CPF ou RG do hóspede"
            error={!!errors.documento}
            helperText={errors.documento}
          />
        </Box>
      </DialogContent>

      <DialogActions sx={{ px: 3, pb: 2 }}>
        <Button onClick={onClose} color="inherit">
          Cancelar
        </Button>
        <Button onClick={handleSave} variant="contained" color="primary" disabled={salvando}>
          {salvando ? (
            <>
              <CircularProgress size={20} sx={{ mr: 1 }} />
              "Salvando..."
            </>
          ) : (
            "Salvar"
          )}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default EditarHospedesModal;
