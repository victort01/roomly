import axios from "axios";
import type { Reserva } from "../types/reserva";
import { API_ENDPOINTS } from "../config/api";

export const createReserva = async (dados: Omit<Reserva, "id">): Promise<Reserva> => {
  const response = await axios.post(API_ENDPOINTS.RESERVAS, dados, {});
  return response.data;
};

export const getAllReservas = async (): Promise<Reserva[]> => {
  const response = await axios.get(API_ENDPOINTS.RESERVAS);
  return response.data;
};

export const updateReserva = async (id: number, dados: Partial<Reserva>): Promise<Reserva> => {
  const response = await axios.put(`${API_ENDPOINTS.RESERVAS}/${id}`, dados, {});
  return response.data;
};

export const deleteReserva = async (id: number): Promise<void> => {
  await axios.delete(`${API_ENDPOINTS.RESERVAS}/${id}`);
};



