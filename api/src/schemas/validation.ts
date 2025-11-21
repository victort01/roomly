import { z } from "zod";

//
// =========================
// FUNCIONÁRIO
// =========================
//

export const createFuncionarioSchema = z.object({
  nome: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  email: z
    .string()
    .email({ message: "Email deve ter um formato válido" })
    .max(255, "Email deve ter no máximo 255 caracteres"),
  senha: z
    .string()
    .min(6, "Senha deve ter pelo menos 6 caracteres")
    .max(100, "Senha deve ter no máximo 100 caracteres"),
  telefone: z
    .string()
    .min(10, "Telefone deve ter pelo menos 10 caracteres")
    .max(15, "Telefone deve ter no máximo 15 caracteres")
    .optional(),
  role: z.enum(["ADMIN", "GERENTE", "RECEPCIONISTA"], {
    message: "Role inválida",
  }),
});

export const loginFuncionarioSchema = z.object({
  email: z.string().email({ message: "Email deve ser válido" }),
  senha: z.string().min(6, "Senha deve ter pelo menos 6 caracteres"),
});

export const updateFuncionarioSchema = createFuncionarioSchema.partial();

//
// =========================
// HÓSPEDE
// =========================
//

export const createHospedeSchema = z.object({
  nome: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),

  email: z
    .string()
    .email({ message: "Email inválido" })
    .max(255, "Email deve ter no máximo 255 caracteres")
    .optional(),

  telefone: z
    .string()
    .min(10, "Telefone deve ter pelo menos 10 caracteres")
    .max(15, "Telefone deve ter no máximo 15 caracteres")
    .optional(),

  documento: z
    .string()
    .min(5, "Documento deve ter pelo menos 5 caracteres")
    .max(20, "Documento deve ter no máximo 20 caracteres"),
});

export const updateHospedeSchema = createHospedeSchema.partial();

//
// =========================
// TIPO DE QUARTO
// =========================
//

export const createTipoQuartoSchema = z.object({
  nome: z
    .string()
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(100, "Nome deve ter no máximo 100 caracteres"),
  descricao: z
    .string()
    .max(255, "Descrição deve ter no máximo 255 caracteres")
    .optional(),
  capacidade: z
    .number()
    .int("Capacidade deve ser um inteiro")
    .positive("Capacidade deve ser positiva"),
  precoBase: z.number().positive("Preço base deve ser positivo"),
});

export const updateTipoQuartoSchema = createTipoQuartoSchema.partial();

//
// =========================
// QUARTO
// =========================
//

export const createQuartoSchema = z.object({
  numero: z
    .string()
    .min(1, "Número deve ter pelo menos 1 caractere")
    .max(10, "Número deve ter no máximo 10 caracteres"),
  tipoId: z
    .number()
    .int("ID deve ser inteiro")
    .positive("ID deve ser positivo"),
  status: z.enum(["DISPONIVEL", "OCUPADO", "MANUTENCAO", "LIMPEZA"], {
    message: "Status inválido",
  }),
});

export const updateQuartoSchema = createQuartoSchema.partial();

//
// =========================
// RESERVA
// =========================
//

export const createReservaSchema = z.object({
  hospedeId: z.number().int().positive("ID do hóspede deve ser positivo"),

  quartoId: z.number().int().positive("ID do quarto deve ser positivo"),

  funcionarioId: z
    .number()
    .int()
    .positive("ID do funcionário deve ser positivo"),

  checkIn: z
    .string()
    .refine((d) => !isNaN(new Date(d).getTime()), "Data inválida"),

  checkOut: z
    .string()
    .refine((d) => !isNaN(new Date(d).getTime()), "Data inválida"),

  total: z.number().positive("Total deve ser positivo").optional(),

  status: z.enum(
    ["PENDENTE", "CONFIRMADA", "CHECKED_IN", "CHECKED_OUT", "CANCELADA"],
    { message: "Status inválido" }
  ),
});

export const updateReservaSchema = createReservaSchema.partial();

//
// =========================
// ID PARAM COMUM
// =========================
//

export const idParamSchema = z.object({
  id: z
    .string()
    .regex(/^\d+$/, "ID deve ser um número válido")
    .transform(Number)
    .refine((n) => n > 0, "ID deve ser positivo"),
});

//
// =========================
// TYPES INFERIDOS
// =========================
//

export type CreateFuncionarioData = z.infer<typeof createFuncionarioSchema>;
export type UpdateFuncionarioData = z.infer<typeof updateFuncionarioSchema>;

export type CreateHospedeData = z.infer<typeof createHospedeSchema>;
export type UpdateHospedeData = z.infer<typeof updateHospedeSchema>;

export type CreateTipoQuartoData = z.infer<typeof createTipoQuartoSchema>;
export type UpdateTipoQuartoData = z.infer<typeof updateTipoQuartoSchema>;

export type CreateQuartoData = z.infer<typeof createQuartoSchema>;
export type UpdateQuartoData = z.infer<typeof updateQuartoSchema>;

export type CreateReservaData = z.infer<typeof createReservaSchema>;
export type UpdateReservaData = z.infer<typeof updateReservaSchema>;

export type IdParam = z.infer<typeof idParamSchema>;
