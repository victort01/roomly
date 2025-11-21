import { prisma } from '../database/prisma';
import { Quarto } from '../generated/prisma';

type QuartoCreateData = Omit<Quarto, 'id'>;
type QuartoUpdateData = Partial<QuartoCreateData>;

export const create = async ( data: QuartoCreateData): Promise<Quarto> => {
    return prisma.quarto.create({data});
};

export const getAll = async (): Promise<Quarto[]> => {
    return prisma.quarto.findMany();
};

export const getById = async (id: number): Promise<Quarto | null> => {
    return prisma.quarto.findUnique({ where: {id}});
};

export const update = async (id: number, data: QuartoUpdateData): Promise<Quarto> => {
    return prisma.quarto.update({ where: {id}, data});
};

export const remove = async (id: number): Promise<Quarto> => {
    return prisma.quarto.delete({ where: {id}});
}
