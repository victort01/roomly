import axios from "axios";
import type { Quarto } from "../types/quarto";
import { API_ENDPOINTS } from "../config/api";

export const getAllQuartos = async (): Promise<Quarto[]> =>{
    const response = (await axios.get(API_ENDPOINTS.QUARTOS));
    return response.data;
}

// numero
export const getTipoQuartoById = async (): Promise<Quarto> => {
  const response = await axios.get(API_ENDPOINTS.QUARTOS);
  return response.data;
};
