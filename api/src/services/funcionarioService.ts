import { prisma } from "../database/prisma";
import { Funcionario } from "../generated/prisma";
import bcrypt from "bcryptjs";

type FuncionarioCreateData = Omit<
  Funcionario,
  "id" | "createdAt" | "updatedAt"
>; //filtra os dados recebidos para nao alterar dados importantes
type FuncionarioUpdateData = Partial<FuncionarioCreateData>; // torna os dados opcionais para poder alterar qualquer, ainda filtrando (utilizando a funcao criada acima)

const funcionarioSemSenhaSelect = {
  id: true,
  nome: true,
  email: true,
  telefone: true,
  role: true,
  createdAt: true,
  updatedAt: true,
};

export const create = async (
  data: FuncionarioCreateData
): Promise<Omit<Funcionario, "senha">> => {
  const hashSenha = await bcrypt.hash(data.senha, 10);

  const funcionario = await prisma.funcionario.create({
    data: { ...data, senha: hashSenha },
    select: funcionarioSemSenhaSelect,
  });

  return funcionario as any;
};

export const getAll = async (): Promise<Omit<Funcionario, "senha">[]> => {
  return prisma.funcionario.findMany({
    select: {
      ...funcionarioSemSenhaSelect,
      reservas: true,
    },
  }) as any;
};

export const getById = async (
  id: number
): Promise<Omit<Funcionario, "senha"> | null> => {
  return prisma.funcionario.findUnique({
    where: { id },
    select: {
      ...funcionarioSemSenhaSelect,
      reservas: true,
    },
  }) as any;
};

export const update = async (
  id: number,
  data: FuncionarioUpdateData
): Promise<Omit<Funcionario, "senha">> => {
  if (data.senha) {
    data.senha = await bcrypt.hash(data.senha, 10);
  }
  return prisma.funcionario.update({
    where: { id },
    data,
    select: {
      ...funcionarioSemSenhaSelect,
    },
  }) as any;
};

export const remove = async (id: number): Promise<Funcionario> => {
  // impede de deletar funcionários que tenham reservas
  const relacionados = await prisma.reserva.count({
    where: { funcionarioId: id },
  });
  if (relacionados > 0) {
    const err: any = new Error(
      `Não é possível deletar: existem ${relacionados} reserva(s) associada(s) a este funcionário.`
    );
    err.code = "HAS_RELATED";
    throw err;
  }

  return prisma.funcionario.delete({ where: { id } });
};

export const getByLogin = async (
  email: string,
  senhaPlain: string
): Promise<Funcionario | null> => {
  const funcionario = await prisma.funcionario.findUnique({
    where: { email },
  });
  if (!funcionario) {
    return null;
  }

  const senhaValida = await bcrypt.compare(senhaPlain, funcionario.senha);

  if (!senhaValida) {
    return null;
  }

  return funcionario;
};
