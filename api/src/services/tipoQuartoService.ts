import { prisma } from "../database/prisma";
import { TipoQuarto } from "../generated/prisma";

type TipoQuartoCreateData = Omit<TipoQuarto,"id">;
type TipoQuartoUpdateData = Partial<TipoQuartoCreateData>;

export const create = async (data: TipoQuartoCreateData): Promise<TipoQuarto> => {
    return prisma.tipoQuarto.create({
        data: {...data}
    })
};

export const getAll = async (): Promise<TipoQuarto[]> => {
    return prisma.tipoQuarto.findMany();
};

export const getBydId = async (id:number): Promise<TipoQuarto | null> => {
    return prisma.tipoQuarto.findUnique({where: { id }});
};

export const update = async (id: number, data:TipoQuartoUpdateData): Promise<TipoQuarto> => {
    return prisma.tipoQuarto.update({ where: { id }, data});
};

export const remove = async (id: number): Promise<TipoQuarto> => {
    return prisma.tipoQuarto.delete({ where: { id }});
};

