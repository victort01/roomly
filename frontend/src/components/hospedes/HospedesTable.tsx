import React from "react";
import type { Hospede } from "../../types/hospede";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  IconButton,
  Tooltip,
  TableRow,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

interface HospedeTableProps {
  hospedes: Hospede[];
  deletingId: number | null;
  onEdit: (hospede: Hospede) => void;
  onDelete: (hospede: Hospede) => void;
}

const HospedeTable: React.FC<HospedeTableProps> = ({
  hospedes,
  deletingId,
  onDelete,
  onEdit,
}) => {

  const colunas: string[] = [
    "nome",
    "email",
    "telefone",
    "documento",
    "ações", 
  ];

  return (
    <TableContainer className="mb-4 rounded-lg shadow-md">
      <Table>
        <TableHead className="bg-gray-200">
          <TableRow>
            {colunas.map((coluna) => (
              <TableCell
                key={coluna}
                className="font-bold"
                align="center"
              >
                {coluna.charAt(0).toUpperCase() + coluna.slice(1)}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {hospedes.length === 0 ? (
            <TableRow>
              <TableCell colSpan={colunas.length} align="center">
                Nenhum hóspede encontrado.
              </TableCell>
            </TableRow>
          ) : (
            hospedes.map((hospede) => (
              <TableRow key={hospede.id} hover className="hover:bg-blue-50">
                <TableCell align="center">{hospede.nome}</TableCell>
                <TableCell align="center">{hospede.email}</TableCell>
                <TableCell align="center">{hospede.telefone}</TableCell>
                <TableCell align="center">{hospede.documento}</TableCell>
                <TableCell align="center">
                  <div className="flex justify-center gap-2">
                    <Tooltip title="Editar">
                      <IconButton
                        color="primary"
                        size="small"
                        onClick={() => onEdit(hospede)}
                      >
                        <EditIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Excluir">
                      <IconButton
                        color="error"
                        size="small"
                        onClick={() => onDelete(hospede)}
                        disabled={deletingId === hospede.id}
                        aria-label={`remover-${hospede.nome}`}
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

export default HospedeTable;