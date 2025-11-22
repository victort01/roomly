import { z } from "zod";

export const createHospedeSchema = z.object({
  nome: z
    .string()
    .min(3, "Nome deve ter pelo menos 3 caracteres")
    .max(255, "Nome não pode ter mais de 255 caracteres"),

  documento: z.string().min(5, "Documento inválido"),

  email: z.string().email("Email inválido").optional().or(z.literal("")),

  telefone: z
    .string()
    .regex(/^\d{10,11}$/, "Telefone deve conter 10 ou 11 dígitos")
    .optional()
    .or(z.literal("")),
});

export const updateHospedeSchema = createHospedeSchema.extend({
  id: z.number(),
});

export type CreateHospedeInput = z.infer<typeof createHospedeSchema>;
export type UpdateHospedeInput = z.infer<typeof updateHospedeSchema>;
