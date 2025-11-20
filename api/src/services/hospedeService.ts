import { prisma } from "../database/prisma";
import { Hospede } from "../generated/prisma";

type HospedeCreateData = Omit<Hospede, "id" | "createdAt" | "updatedAt">;
type HospedeUpdateData = Partial<HospedeCreateData>;

export const create = async (data: HospedeCreateData): Promise<Hospede> => {
    return prisma.hospede.create({
        data: {...data},
    });
};

export const getAll = async (): Promise<Hospede[]> => {
    return prisma.hospede.findMany();
};

export const getByDocumento = async (documento: string): Promise<Hospede | null> => {
    return prisma.hospede.findUnique({
        where: { documento },
    });
};

export const update = async (id: number, data: HospedeUpdateData): Promise<Hospede> => {
    return prisma.hospede.update({
        where: { id },
        data: { ...data },
    });
};

export const remove = async (id: number): Promise<Hospede> => {
    return prisma.hospede.delete({
        where: { id },
    });
};