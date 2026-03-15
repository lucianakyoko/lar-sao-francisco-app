import axios from 'axios';
import { useAuthStore } from '../store/authStore';

const api = axios.create({
  baseURL: 'https://lar-sao-francisco.onrender.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Adiciona o token automaticamente em todas as requisições
api.interceptors.request.use((config) => {
  const token = useAuthStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
