import { z } from "zod";
import { loginSchema } from "./loginSchema";
import { createHospedeSchema, updateHospedeSchema } from "./hospedeSchema";
import { createReservaSchema, updateReservaSchema } from "./reservaSchema";

export const validateCreateHospede = (data: unknown) => {
  try {
    const validatedData = createHospedeSchema.parse(data);
    return { success: true as const, data: validatedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      for (const issue of error.issues) {
        const key = String(issue.path[0]);
        errors[key] = issue.message;
      }
      return { success: false as const, errors };
    }
    throw error;
  }
};

export const validateUpdateHospede = (data: unknown) => {
  try {
    const validatedData = updateHospedeSchema.parse(data);
    return { success: true as const, data: validatedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      for (const issue of error.issues) {
        const key = String(issue.path[0]);
        errors[key] = issue.message;
      }
      return { success: false as const, errors };
    }
    throw error;
  }
};

export const validateLogin = (data: unknown) => {
  try {
    const validatedData = loginSchema.parse(data);
    return { success: true as const, data: validatedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      for (const issue of error.issues) {
        const key = String(issue.path[0]);
        errors[key] = issue.message;
      }
      return { success: false as const, errors };
    }
    throw error;
  }
};

export const validateCreateReserva = (data: unknown) => {
  try {
    const validatedData = createReservaSchema.parse(data);
    return { success: true as const, data: validatedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      for (const issue of error.issues) {
        const key = String(issue.path[0]);
        errors[key] = issue.message;
      }
      return { success: false as const, errors };
    }
    throw error;
  }
};

export const validateUpdateReserva = (data: unknown) => {
  try {
    const validatedData = updateReservaSchema.parse(data);
    return { success: true as const, data: validatedData };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors: Record<string, string> = {};
      for (const issue of error.issues) {
        const key = String(issue.path[0]);
        errors[key] = issue.message;
      }
      return { success: false as const, errors };
    }
    throw error;
  }
};

export const validateField = (schema: z.ZodObject<any>, fieldName: string, value: any): string => {
  try {
    const fieldSchema = schema.shape[fieldName];
    if (fieldSchema) {
      fieldSchema.parse(value);
    }
    return "";
  } catch (error) {
    if (error instanceof z.ZodError) {
      return error.issues[0]?.message || "Valor inválido";
    }
    return "";
  }
};
