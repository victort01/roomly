import axios from "axios";
import type { TipoQuarto } from "../types/tipoQuarto";
import { API_ENDPOINTS } from "../config/api";

export const getAllTipoQuarto = async (): Promise<TipoQuarto[]> => {
  const response = await axios.get(API_ENDPOINTS.TIPOQUARTO);
  return response.data;
};
