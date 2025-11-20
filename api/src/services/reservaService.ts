import { prisma } from "../database/prisma";
import { Reserva } from "../generated/prisma";

type ReservaCreateData = Omit<Reserva, "id" | "createdAt" | "updatedAt">;
type ReservaUpdateData = Partial<
    Omit<Reserva, "id" | "createdAt" | "updatedAt" | "hospedeId" | "quartoId" | "funcionarioId">
    >;

    export const create = async (data: ReservaCreateData): Promise<Reserva> => {
        const { hospedeId, quartoId, funcionarioId } = data;

        const hospede = await prisma.hospede.findUnique({
            where: { id: hospedeId},
        });

        const quarto = await prisma.quarto.findUnique({
            where: { id: quartoId},
        });

        const funcionario = await prisma.funcionario.findUnique({
            where: { id: funcionarioId},
        });
        return prisma.reserva.create({
            data: {
                ...data,
            },
        }); 
    };

    export const getAll = async () => {
            return prisma.reserva.findMany({
                include: {
                    hospede: { select: { nome: true, documento: true}},
                    quarto: { select: { numero: true, tipo: true}},
                    funcionario: {select: { nome: true }}
                },
            })
        };
        
    export const update = async (
        id: number,
        data: ReservaUpdateData
    ): Promise<Reserva> => {
        return prisma.reserva.update({
            where: { id },
            data: {
                ...data,
            },
        });
    };
        
    export const remove = async (id: number): Promise<Reserva> => {
        return prisma.reserva.delete({ where: {id} });
    }     