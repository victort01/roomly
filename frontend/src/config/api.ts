/**
 * Configuração centralizada da API
 * Suporta múltiplos ambientes (dev, produção, etc)
 */

export const getApiUrl = (): string => {
  // Se houver variável de ambiente, usar
  if (import.meta.env.VITE_API_URL) {
    return import.meta.env.VITE_API_URL;
  }

  // Em produção, usar URL relativa (mesmo domínio)
  if (import.meta.env.PROD) {
    return "";
  }

  // Em desenvolvimento, usar localhost
  return "http://localhost:3333";
};

export const API_BASE_URL = getApiUrl();

export const API_ENDPOINTS = {
  // auth
  LOGIN: `${API_BASE_URL}/login`,

  //funcionarios
  FUNCIONARIOS: `${API_BASE_URL}/funcionarios`,

  //tipoquarto
  TIPOQUARTO: `${API_BASE_URL}/tipoquarto`,

  // quartos
  QUARTOS: `${API_BASE_URL}/quartos`,

  // hóspedes
  HOSPEDES: `${API_BASE_URL}/hospedes`,

  // reservas
  RESERVAS: `${API_BASE_URL}/reservas`,
};
