import { prisma } from "../database/prisma";
import { StatusQuarto, StatusReserva } from "../generated/prisma";
interface DashboardStats {
  totalHospedesToday: number;
  totalQuartosOcupados: number;
  totalQuartosLivres: number;
  totalQuartos: number;
  totalReservasPendentes: number;
}

interface RoomOccupation {
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

export const getDashboardStats = async (
  dataInicio?: string,
  dataFim?: string
): Promise<DashboardStats> => {
  const now = new Date();
  const startDate = dataInicio ? new Date(dataInicio) : new Date(now.setHours(0, 0, 0, 0));
  const endDate = dataFim ? new Date(dataFim) : new Date(now.setHours(23, 59, 59, 999));

  // Total de hóspedes com check-in hoje
  const totalHospedesToday = await prisma.reserva.count({
    where: {
      checkIn: {
        gte: startDate,
        lte: endDate,
      },
      status: {
        in: [StatusReserva.CONFIRMADA, StatusReserva.CHECKED_IN],
      },
    },
  });

  // Total de quartos
  const totalQuartos = await prisma.quarto.count();

  // Total de quartos ocupados no período
  const quartosComReservaAtiva = await prisma.reserva.findMany({
    where: {
      OR: [
        {
          // Reservas que começam no período
          checkIn: {
            gte: startDate,
            lte: endDate,
          },
        },
        {
          // Reservas que terminam no período
          checkOut: {
            gte: startDate,
            lte: endDate,
          },
        },
        {
          // Reservas que iniciam antes e terminam depois do período
          AND: [
            {
              checkIn: {
                lte: startDate,
              },
            },
            {
              checkOut: {
                gte: endDate,
              },
            },
          ],
        },
      ],
      status: {
        in: [StatusReserva.CONFIRMADA, StatusReserva.CHECKED_IN],
      },
    },
    select: {
      quartoId: true,
    },
  });

  // Contar quartos únicos ocupados
  const quartosOcupadosIds = new Set(quartosComReservaAtiva.map((r) => r.quartoId));
  const totalQuartosOcupados = quartosOcupadosIds.size;

  // Total de quartos livres
  const totalQuartosLivres = totalQuartos - totalQuartosOcupados;

  // Total de reservas pendentes
  const totalReservasPendentes = await prisma.reserva.count({
    where: {
      status: StatusReserva.PENDENTE,
    },
  });

  return {
    totalHospedesToday,
    totalQuartosOcupados,
    totalQuartosLivres,
    totalQuartos,
    totalReservasPendentes,
  };
};

export const getRoomOccupation = async (
  dataInicio?: string,
  dataFim?: string
): Promise<RoomOccupation[]> => {
  const startDate = dataInicio ? new Date(dataInicio) : new Date();
  const endDate = dataFim ? new Date(dataFim) : new Date();
  
  startDate.setHours(0, 0, 0, 0);
  endDate.setHours(23, 59, 59, 999);

  const quartos = await prisma.quarto.findMany({
    include: {
      tipo: true,
      reservas: {
        where: {
          OR: [
            {
              checkIn: {
                gte: startDate,
                lte: endDate,
              },
            },
            {
              checkOut: {
                gte: startDate,
                lte: endDate,
              },
            },
            {
              AND: [
                {
                  checkIn: {
                    lte: startDate,
                  },
                },
                {
                  checkOut: {
                    gte: endDate,
                  },
                },
              ],
            },
          ],
          status: {
            in: [StatusReserva.CONFIRMADA, StatusReserva.CHECKED_IN],
          },
        },
        include: {
          hospede: true,
        },
        orderBy: {
          checkIn: "desc",
        },
        take: 1,
      },
    },
    orderBy: {
      numero: "asc",
    },
  });

  return quartos.map((quarto) => ({
    id: quarto.id,
    numero: quarto.numero,
    tipoNome: quarto.tipo.nome,
    status: quarto.status,
    reservaAtual:
      quarto.reservas.length > 0
        ? {
            id: quarto.reservas[0].id,
            hospede: quarto.reservas[0].hospede.nome,
            checkIn: quarto.reservas[0].checkIn.toISOString(),
            checkOut: quarto.reservas[0].checkOut.toISOString(),
            status: quarto.reservas[0].status,
          }
        : null,
  }));
};
