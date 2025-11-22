export const getApiUrl = (): string => {
    if (import.meta.env.VITE_API_URL) {
        return import.meta.env.VITE_API_URL;
    }

    if (import.meta.env.PROD) {
        return "";
    }

    return "https://localhost:3000";
};

export const API_BASE_URL = getApiUrl();

export const API_ENDPOINTS = {
    // auth
    LOGIN : `${API_BASE_URL}/login`,

    //tipoquarto
    TIPOQUARTO: `${API_BASE_URL}/tipoquarto`,

    // quartos
    QUARTOS: `${API_BASE_URL}/quartos`,

    // hóspedes
    HOSPEDES: `${API_BASE_URL}/hospedes`,

    // reservas
    RESERVAS: `${API_BASE_URL}/reservas`
};
