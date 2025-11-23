import type { Reserva } from "../types/reserva";

export interface Hospede {
  id: number;
  nome: string;
  email?: string | null;
  telefone?: string | null;
  documento: string;
  createdAt: string;
  updateAt: string;

  reservas?: Reserva[];
}
