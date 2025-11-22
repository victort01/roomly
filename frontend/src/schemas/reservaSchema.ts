import { z } from "zod";

export const createReservaSchema = z.object({
  hospedeId: z
    .number({ message: "Hóspede é obrigatório" })
    .int()
    .positive("Selecione um hóspede válido"),

  quartoId: z
    .number({ message: "Quarto é obrigatório" })
    .int()
    .positive("Selecione um quarto válido"),

  funcionarioId: z
    .number({ message: "Funcionário é obrigatório" })
    .int()
    .positive("Selecione um funcionário válido"),

  checkIn: z
    .string()
    .min(1, "Data de check-in é obrigatória")
    .regex(
      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2})?(\.\d{3}Z)?$/,
      "Data de check-in deve estar no formato ISO (ex: 2025-12-01T14:00:00Z)"
    ),

  checkOut: z
    .string()
    .min(1, "Data de check-out é obrigatória")
    .regex(
      /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}(:\d{2})?(\.\d{3}Z)?$/,
      "Data de check-out deve estar no formato ISO (ex: 2025-12-05T12:00:00Z)"
    ),

  total: z
    .number({ message: "Total deve ser numérico" })
    .positive("O valor deve ser maior que zero")
    .optional(),

  status: z.enum(["PENDENTE", "CONFIRMADA", "CHECKED_IN", "CHECKED_OUT", "CANCELADA"]).optional(),
});

export const updateReservaSchema = createReservaSchema.extend({
  id: z.number().int().positive(),
});

export type CreateReservaInput = z.infer<typeof createReservaSchema>;
export type UpdateReservaInput = z.infer<typeof updateReservaSchema>;
