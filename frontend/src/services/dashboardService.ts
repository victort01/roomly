import { API_ENDPOINTS } from "../config/api";
import type { DashboardStats, RoomOccupation } from "../types/dashboard";

export const getDashboardStats = async (
  dataInicio?: string,
  dataFim?: string
): Promise<DashboardStats> => {
  const params = new URLSearchParams();
  if (dataInicio) params.append("dataInicio", dataInicio);
  if (dataFim) params.append("dataFim", dataFim);

  const queryString = params.toString();
  const url = `${API_ENDPOINTS.DASHBOARD}/stats${queryString ? "?" + queryString : ""}`;
  
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error("Failed to fetch dashboard stats");
  }
  
  return response.json();
};

export const getRoomOccupation = async (
  dataInicio?: string,
  dataFim?: string
): Promise<RoomOccupation[]> => {
  const params = new URLSearchParams();
  if (dataInicio) params.append("dataInicio", dataInicio);
  if (dataFim) params.append("dataFim", dataFim);

  const queryString = params.toString();
  const url = `${API_ENDPOINTS.DASHBOARD}/room-occupation${queryString ? "?" + queryString : ""}`;
  
  const response = await fetch(url);
  
  if (!response.ok) {
    throw new Error("Failed to fetch room occupation");
  }
  
  return response.json();
};
