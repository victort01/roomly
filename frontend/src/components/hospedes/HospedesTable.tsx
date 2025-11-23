import React from "react";
import type { Hospede } from "../../types/hospede";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Tooltip,
  Box,
  CircularProgress,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface HospedeTableProps {
  hospedes: Hospede[];
  deletingId: number | null;
  onEdit: (hospede: Hospede) => void;
  onDelete: (id: number) => void;
  loading?: boolean;
}

const HospedeTable: React.FC<HospedeTableProps> = ({
  hospedes,
  deletingId,
  onDelete,
  onEdit,
  loading = false,
}) => {
  const colunas: string[] = ["Nome", "Email", "Telefone", "Documento", "Ações"];

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          py: 8,
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  return (
    <TableContainer sx={{ mt: 4, borderRadius: 2 }}>
      <Table>
        <TableHead>
          <TableRow
            sx={{
              bgcolor: "grey.900", // fundo escuro
            }}
          >
            {colunas.map((coluna) => (
              <TableCell
                key={coluna}
                align="center"
                sx={{ fontWeight: "bold", color: "common.white" }}
              >
                {coluna}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {hospedes.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={colunas.length}
                align="center"
                sx={{ py: 6, color: "text.secondary" }}
              >
                Nenhum hóspede encontrado.
              </TableCell>
            </TableRow>
          ) : (
            hospedes.map((hospede) => (
              <TableRow key={hospede.id} hover sx={{ "&:hover": { bgcolor: "blue.50" } }}>
                <TableCell align="center">{hospede.nome}</TableCell>
                <TableCell align="center">{hospede.email}</TableCell>
                <TableCell align="center">{hospede.telefone}</TableCell>
                <TableCell align="center">{hospede.documento}</TableCell>
                <TableCell align="center">
                  <Box sx={{ display: "flex", justifyContent: "center", gap: 1 }}>
                    <Tooltip title="Editar">
                      <IconButton color="primary" size="small" onClick={() => onEdit(hospede)}>
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Remover">
                      <IconButton
                        color="error"
                        size="small"
                        onClick={() => onDelete(hospede.id)}
                        disabled={deletingId === hospede.id}
                        aria-label={`remover-${hospede.nome}`}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </Box>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default HospedeTable;
