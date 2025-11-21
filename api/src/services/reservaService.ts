import { prisma } from "../database/prisma";
import { Reserva, StatusReserva } from "../generated/prisma";

type ReservaCreateData = Omit<
  Reserva,
  "id" | "createdAt" | "updatedAt" | "total" | "status"
>;
type ReservaUpdateData = Partial<
  Omit<
    Reserva,
    "id" | "createdAt" | "updatedAt" | "hospedeId" | "funcionarioId"
  >
>;

const reservaIncludes = {
  hospede: { select: { nome: true, documento: true } },
  quarto: { select: { numero: true, tipo: true } },
  funcionario: { select: { nome: true } },
};

const verificarConflito = async (
  quartoId: number,
  checkIn: Date,
  checkOut: Date,
  ignorarReservaId?: number // serve para o update ignorar a própria reserva
): Promise<boolean> => {
  const conflito = await prisma.reserva.findFirst({
    where: {
      quartoId,
      status: { not: StatusReserva.CANCELADA },
      id: ignorarReservaId ? { not: ignorarReservaId } : undefined, // para o update
      AND: [
        // reserva nova começa ANTES da existente terminar
        { checkIn: { lt: checkOut } },
        // e a nova reserva termina DEPOIS da existente começar
        { checkOut: { gt: checkIn } },
        // é possível trocar para lte + gte caso não seja possível checkout e checkin no mesmo dia
      ],
    },
  });

  return !!conflito; // true se achou conflito, false caso não
};

export const create = async (data: ReservaCreateData): Promise<Reserva> => {
  
  // 1. Validação básica de sanidade das datas
  if (data.checkIn >= data.checkOut) {
    throw new Error(
      "A data de Check-in deve ser anterior à data de Check-out."
    );
  }

  // 2. Validação de Conflito (Overbooking)
  const existeConflito = await verificarConflito(
    data.quartoId,
    data.checkIn,
    data.checkOut
  );

  if (existeConflito) {
    throw new Error("O quarto selecionado já está ocupado neste período.");
  }

  // 3. Criação
  return prisma.reserva.create({
    data,
  });
};

export const getAll = async () => {
  return prisma.reserva.findMany({
    include: reservaIncludes,
  });
};

export const getById = async (id: number) => {
  return prisma.reserva.findUnique({
    where: { id },
    include: reservaIncludes,
  });
};


export const update = async (
  id: number,
  data: ReservaUpdateData
): Promise<Reserva> => {
  // se o usuário estiver tentando alterar as datas ou o quarto, precisamos revalidar
  if (data.checkIn || data.checkOut || data.quartoId) {
    // buscamos a reserva original para pegar os dados que faltam
    // (caso o usuário mande só o checkIn novo, precisamos do checkOut antigo para validar)
    const reservaAtual = await prisma.reserva.findUnique({ where: { id } });
    if (!reservaAtual) throw new Error("Reserva não encontrada");

    const novoQuartoId = data.quartoId || reservaAtual.quartoId;
    const novoCheckIn = data.checkIn ?? reservaAtual.checkIn;
    const novoCheckOut = data.checkOut
      ? new Date(data.checkOut)
      : reservaAtual.checkOut;

    if (novoCheckIn >= novoCheckOut) {
      throw new Error("Datas inválidas: Check-in deve ser antes do Check-out.");
    }

    const existeConflito = await verificarConflito(
      novoQuartoId,
      novoCheckIn,
      novoCheckOut,
      id // Importante: Passamos o ID atual para ele não conflitar com ele mesmo
    );

    if (existeConflito) {
      throw new Error(
        "Não é possível alterar: O quarto está ocupado neste novo período."
      );
    }
  }

  return prisma.reserva.update({
    where: { id },
    data,
  });
};

export const remove = async (id: number): Promise<Reserva> => {
  return prisma.reserva.delete({ where: { id } });
};
