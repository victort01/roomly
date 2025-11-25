import type { DashboardStats, RoomOccupation } from "../types/dashboard";
import { getAllReservas } from "./reservaService";
import { getAllQuartos } from "./quartoService";
import { getAllHospedes } from "./hospedeService";
import { StatusQuarto, StatusReserva } from "../types/enums";

export const getDashboardStats = async (
  dataInicio?: string,
  dataFim?: string
): Promise<DashboardStats> => {
  // Fetch all data from existing endpoints
  const [reservas, quartos] = await Promise.all([
    getAllReservas(),
    getAllQuartos(),
  ]);

  // Parse date filters
  const inicio = dataInicio ? new Date(dataInicio) : new Date();
  const fim = dataFim ? new Date(dataFim) : new Date();
  
  // Set time to start and end of day for comparison
  inicio.setHours(0, 0, 0, 0);
  fim.setHours(23, 59, 59, 999);

  // Calculate total hospedes today (reservas with checkIn in date range)
  const totalHospedesToday = reservas.filter((reserva) => {
    const checkIn = new Date(reserva.checkIn);
    return checkIn >= inicio && checkIn <= fim && reserva.status !== StatusReserva.CANCELADA;
  }).length;

  // Calculate total quartos ocupados (status = OCUPADO)
  const totalQuartosOcupados = quartos.filter(
    (quarto) => quarto.status === StatusQuarto.OCUPADO
  ).length;

  // Calculate total reservas pendentes (status = PENDENTE)
  const totalReservasPendentes = reservas.filter(
    (reserva) => reserva.status === StatusReserva.PENDENTE
  ).length;

  // Calculate receita estimada (sum of total from active reservas)
  const receitaEstimada = reservas
    .filter(
      (reserva) =>
        reserva.status !== StatusReserva.CANCELADA &&
        reserva.status !== StatusReserva.CHECKED_OUT
    )
    .reduce((sum, reserva) => sum + (reserva.total || 0), 0);

  return {
    totalHospedesToday,
    totalQuartosOcupados,
    totalReservasPendentes,
    receitaEstimada,
  };
};

export const getRoomOccupation = async (): Promise<RoomOccupation[]> => {
  // Fetch all data from existing endpoints
  const [quartos, reservas, hospedes] = await Promise.all([
    getAllQuartos(),
    getAllReservas(),
    getAllHospedes(),
  ]);

  // Create a map of hospedes for quick lookup
  const hospedesMap = new Map(hospedes.map((h) => [h.id, h]));

  // Get current date
  const now = new Date();

  // Map quartos to RoomOccupation format
  const roomOccupation: RoomOccupation[] = quartos.map((quarto) => {
    // Find active reservation for this room (checkIn <= now <= checkOut and not cancelled)
    const reservaAtual = reservas.find((reserva) => {
      if (reserva.quartoId !== quarto.id) return false;
      if (reserva.status === StatusReserva.CANCELADA) return false;

      const checkIn = new Date(reserva.checkIn);
      const checkOut = new Date(reserva.checkOut);

      return checkIn <= now && checkOut >= now;
    });

    return {
      id: quarto.id,
      numero: quarto.numero,
      tipoNome: quarto.tipo?.nome || "N/A",
      status: quarto.status,
      reservaAtual: reservaAtual
        ? {
            id: reservaAtual.id,
            hospede: hospedesMap.get(reservaAtual.hospedeId)?.nome || "Desconhecido",
            checkIn: reservaAtual.checkIn,
            checkOut: reservaAtual.checkOut,
            status: reservaAtual.status,
          }
        : null,
    };
  });

  return roomOccupation;
};
