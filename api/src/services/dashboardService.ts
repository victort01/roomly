import { prisma } from "../database/prisma";
import { StatusQuarto, StatusReserva } from "../generated/prisma";
interface DashboardStats {
  totalHospedesToday: number;
  totalQuartosOcupados: number;
  totalReservasPendentes: number;
  receitaEstimada: number;
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

  // Total de quartos ocupados
  const totalQuartosOcupados = await prisma.quarto.count({
    where: {
      status: StatusQuarto.OCUPADO,
    },
  });

  // Total de reservas pendentes
  const totalReservasPendentes = await prisma.reserva.count({
    where: {
      status: StatusReserva.PENDENTE,
    },
  });

  // Receita estimada (soma do total das reservas confirmadas ou checked-in no período)
  const reservasComReceita = await prisma.reserva.aggregate({
    where: {
      checkIn: {
        gte: startDate,
        lte: endDate,
      },
      status: {
        in: [StatusReserva.CONFIRMADA, StatusReserva.CHECKED_IN, StatusReserva.CHECKED_OUT],
      },
      total: {
        not: null,
      },
    },
    _sum: {
      total: true,
    },
  });

  const receitaEstimada = reservasComReceita._sum.total || 0;

  return {
    totalHospedesToday,
    totalQuartosOcupados,
    totalReservasPendentes,
    receitaEstimada,
  };
};

export const getRoomOccupation = async (): Promise<RoomOccupation[]> => {
  const now = new Date();

  const quartos = await prisma.quarto.findMany({
    include: {
      tipo: true,
      reservas: {
        where: {
          checkIn: {
            lte: now,
          },
          checkOut: {
            gte: now,
          },
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
