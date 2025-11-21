import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import { components } from "./swagger/components";

const getServerUrl = () => {
  if (process.env.NODE_ENV === "production") {
    return process.env.API_URL || "https://roomly-api.onrender.com";
  }
  return "http://localhost:3333";
};

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "API Roomly",
      version: "1.0.0",
      description:
        "API para gerenciar funcionários, hóspedes, quartos, reservas e tipos de quarto",
    },
    servers: [
      {
        url: getServerUrl(),
      },
    ],
    components: components,
  },
  apis: ["./src/routes/*.ts"],
};

const specs = swaggerJsdoc(options);

export const setupSwagger = (app: Express) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
};
