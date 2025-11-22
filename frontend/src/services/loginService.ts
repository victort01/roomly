import axios from "axios";
import type { Funcionario } from "../types/funcionario";
import { API_ENDPOINTS } from "../config/api";

export const login = async (email: string, senha: string): Promise<Funcionario> => {
  const response = await axios.post<Funcionario>(API_ENDPOINTS.LOGIN, {
    email,
    senha,
  });
  return response.data;
};
