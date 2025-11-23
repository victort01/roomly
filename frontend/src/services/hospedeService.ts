import axios from "axios";
import type { Hospede} from "../types/hospede";
import type { CreateHospedeData } from "../schemas/validation";
import { API_ENDPOINTS } from "../config/api";

export const getAllHospedes = async (): Promise<Hospede[]> => {
  const response = await axios.get(API_ENDPOINTS.HOSPEDES);
  return response.data;
};

/*mudar esta porra
export const getHospedeByDocumento = async (): Promise<Hospede> => {
    const response = await axios.get(API_ENDPOINTS.HOSPEDES);
    return response.data;
}
*/
export const getHospedeByDocumento = async (documento: string): Promise<Hospede> => {
  const response = await axios.post(`${API_ENDPOINTS.HOSPEDES}/buscar`, {
    documento,});
  return response.data;
};

export const deleteHospede = async (id: number): Promise<void> => {
  await axios.delete(`${API_ENDPOINTS.HOSPEDES}/${id}`);
};

export const updateHospede = async (id: number, dados: Partial<Hospede>): Promise<Hospede> => {
  const response = await axios.put(`${API_ENDPOINTS.HOSPEDES}/${id}`, dados, {});
  return response.data;
};

export const createHospede = async (dados: CreateHospedeData): Promise<Hospede> => {
  const response = await axios.post(API_ENDPOINTS.HOSPEDES, dados);
  return response.data;
};