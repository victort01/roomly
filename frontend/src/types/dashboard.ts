import { StatusQuarto, StatusReserva } from "./enums";

export interface DashboardStats {
  totalHospedesToday: number;
  totalQuartosOcupados: number;
  totalQuartosLivres: number;
  totalQuartos: number;
  totalReservasPendentes: number;
}

export interface RoomOccupation {
  id: number;
  numero: string;
  tipoNome: string;
  status: StatusQuarto;
  reservaAtual?: {
    id: number;
    hospede: string;
    checkIn: string;
    checkOut: string;
    status: StatusReserva;
  } | null;
}
