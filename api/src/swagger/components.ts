export const components = {
  schemas: {
    Funcionario: {
      type: "object",
      required: ["nome", "email", "senha", "role"],
      properties: {
        id: { type: "integer", example: 1 },
        nome: { type: "string", example: "João Silva" },
        email: { type: "string", example: "joao@exemplo.com" },
        senha: { type: "string", example: "senha123" },
        telefone: { type: "string", example: "11999999999" },
        role: { type: "string", example: "RECEPCIONISTA" },
        createdAt: { type: "string", format: "date-time" },
        updatedAt: { type: "string", format: "date-time" },
      },
    },
    Hospede: {
      type: "object",
      required: ["nome", "documento"],
      properties: {
        id: { type: "integer", example: 1 },
        nome: { type: "string", example: "Maria Souza" },
        email: { type: "string", example: "maria@exemplo.com" },
        telefone: { type: "string", example: "11988888888" },
        documento: { type: "string", example: "345.123.678-90" },
        createdAt: { type: "string", format: "date-time" },
        updatedAt: { type: "string", format: "date-time" },
      },
    },
    TipoQuarto: {
      type: "object",
      required: ["nome", "capacidade", "precoBase"],
      properties: {
        id: { type: "integer", example: 1 },
        nome: { type: "string", example: "Luxo" },
        descricao: { type: "string", example: "Varanda com vista" },
        capacidade: { type: "integer", example: 3 },
        precoBase: { type: "number", example: 350.0 },
      },
    },
    Quarto: {
      type: "object",
      required: ["numero", "tipoId"],
      properties: {
        id: { type: "integer", example: 1 },
        numero: { type: "string", example: "101" },
        tipoId: { type: "integer", example: 1 },
        status: { type: "string", example: "DISPONIVEL" },
      },
    },
    Reserva: {
      type: "object",
      required: [
        "hospedeId",
        "quartoId",
        "funcionarioId",
        "checkIn",
        "checkOut",
      ],
      properties: {
        id: { type: "integer", example: 1 },
        hospedeId: { type: "integer", example: 1 },
        quartoId: { type: "integer", example: 1 },
        funcionarioId: { type: "integer", example: 1 },
        checkIn: {
          type: "string",
          format: "date-time",
          example: "2025-11-21T14:00:00Z",
        },
        checkOut: {
          type: "string",
          format: "date-time",
          example: "2025-11-23T12:00:00Z",
        },
        status: { type: "string", example: "CONFIRMADA" },
        total: { type: "number", example: 350.0 },
      },
    },
  },
};
