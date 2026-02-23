import axios from 'axios';

// Instancia global de Axios para llamadas a la API de NestJS
export const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

// Tipado base para las Tiendas devueltas por el backend
export interface Store {
    id: string;
    name: string;
    url: string;
    logo: string | null;
    country: string;
    shipping: number;
    productsCount?: number;
    rating?: number; // Dummy field for the UI since backend might not have it yet
    reviews?: number; // Dummy field for the UI
}

// Custom hook o fetcher directo para obtener tiendas
export const getStores = async (): Promise<Store[]> => {
    try {
        const response = await api.get<Store[]>('/stores');
        return response.data;
    } catch (error) {
        console.error('Error fetching stores:', error);
        return [];
    }
};
