import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Tooltip,
  CircularProgress,
  Box,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

import type { Reserva } from "../../types/reserva";

interface ReservasTableProps {
  reservas: Reserva[];
  deletingId: number | null;
  onDelete: (id: number) => void;
  onEdit: (reserva: Reserva) => void;
  loading: boolean;
}

export const ReservasTable = ({
  reservas,
  deletingId,
  onDelete,
  onEdit,
  loading,
}: ReservasTableProps) => {
  const formatarData = (data: string) => {
    const d = new Date(data);
    return d.toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const colunas = [
    "Check-in",
    "Check-out",
    "Hóspede",
    "Documento",
    "Quarto",
    "Status",
    "Total (R$)",
    "Ações",
  ];

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
    <TableContainer className="mt-4 rounded-lg">
      <Table>
        <TableHead>
          <TableRow className="bg-gray-800">
            {colunas.map((coluna) => (
              <TableCell key={coluna} align="center" className="font-bold text-white">
                {coluna}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {reservas.length === 0 ? (
            <TableRow>
              <TableCell colSpan={8} align="center" className="py-6 text-gray-500">
                Nenhuma reserva encontrada.
              </TableCell>
            </TableRow>
          ) : (
            reservas.map((reserva) => (
              <TableRow key={reserva.id} hover className="hover:bg-blue-50">
                <TableCell align="center">{formatarData(reserva.checkIn)}</TableCell>

                <TableCell align="center">{formatarData(reserva.checkOut)}</TableCell>

                <TableCell align="center">{reserva.hospede?.nome || "-"}</TableCell>

                <TableCell align="center">
                  {reserva.hospede?.documento || reserva.hospede?.telefone || "-"}
                </TableCell>

                <TableCell align="center">{reserva.quarto?.numero || "-"}</TableCell>

                <TableCell align="center">{reserva.status}</TableCell>

                <TableCell align="center">
                  {reserva.total ? reserva.total.toFixed(2) : "-"}
                </TableCell>

                <TableCell align="center">
                  <div className="flex justify-center gap-2">
                    <Tooltip title="Editar">
                      <IconButton color="primary" size="small" onClick={() => onEdit(reserva)}>
                        <EditIcon />
                      </IconButton>
                    </Tooltip>

                    <Tooltip title="Remover">
                      <IconButton
                        color="error"
                        size="small"
                        onClick={() => onDelete(reserva.id)}
                        disabled={deletingId === reserva.id}
                        aria-label={`remover-${reserva.id}`}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </div>
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
