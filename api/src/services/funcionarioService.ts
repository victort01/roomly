import { prisma } from "../database/prisma";
import { Funcionario } from "../generated/prisma";
import bcrypt from "bcryptjs";

type FuncionarioCreateData = Omit<Funcionario, "id" | "createdAt" | "updatedAt"> //filtra os dados recebidos para nao alterar dados importantes
type FuncionarioUpdateData = Partial<FuncionarioCreateData>; // torna os dados opcionais para poder alterar qualquer, ainda filtrando (utilizando a funco criada acima)

export const create = async (
    data: FuncionarioCreateData
): Promise<Omit<Funcionario, "senha">> => {
    const hashSenha = await bcrypt.hash(data.senha, 10);
    const funcionario = await prisma.funcionario.create({
        data: {...data, senha: hashSenha },
    });
    const { senha, ...funcionarioSemSenha } = funcionario;
    return funcionarioSemSenha;
};

export const getAll = async (): Promise<Omit<Funcionario, "senha">[]> => {
    return prisma.funcionario.findMany({
        select: {
            id: true,
            nome: true,
            email: true,
            telefone: true,
            role: true,
            createdAt: true,
            updatedAt: true,
            reservas: true,
        },
    });
};

export const getById = async (
    id: number
): Promise<Omit<Funcionario, "senha"> | null> => {
    return prisma.funcionario.findUnique({ 
        where: { id },
        select: {
            id: true,
            nome: true,
            email: true,
            telefone: true,
            role: true,
            createdAt: true,
            updatedAt: true,
            reservas: true,
        },
    });
};

export const update = async (
  id: number,
  data: FuncionarioUpdateData
): Promise<Omit<Funcionario, "senha">> => {
  return prisma.funcionario.update({
    where: { id },
    data,
    select: {
      id: true,
      nome: true,
      email: true,
      telefone: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  });
};

export const remove = async (id: number): Promise<Funcionario> => {
    return prisma.funcionario.delete({ where: { id } });
};
