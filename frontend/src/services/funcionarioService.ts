import axios from "axios";
import type { Funcionario } from "../types/funcionario";
import { API_ENDPOINTS } from "../config/api";

export const getAllFuncionarios = async (): Promise<Funcionario[]> => {
  const response = await axios.get(API_ENDPOINTS.FUNCIONARIOS);
  return response.data;
};

// numero
export const getTipoQuartoById = async (): Promise<Funcionario> => {
  const response = await axios.get(API_ENDPOINTS.FUNCIONARIOS);
  return response.data;
};
