import { create } from 'zustand';
import * as SecureStore from 'expo-secure-store';

type AuthState = {
  token: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  isAuthenticated: false,
  isLoading: true,

  login: async (token: string) => {
    await SecureStore.setItemAsync('authToken', token);
    set({ token, isAuthenticated: true, isLoading: false });
  },

  logout: async () => {
    await SecureStore.deleteItemAsync('authToken');
    set({ token: null, isAuthenticated: false, isLoading: false });
  },
}));

// Carregar token quando o app inicia
export const loadStoredToken = async () => {
  const token = await SecureStore.getItemAsync('authToken');
  if (token) {
    useAuthStore.setState({ token, isAuthenticated: true });
  }
};

// Função para carregar o token no inicio do app
export const initializeAuth = async () => {
  try {
    const token = await SecureStore.getItemAsync('authToken');
    if(token) {
      useAuthStore.setState({ token, isAuthenticated: true, isLoading: false });
    } else {
      useAuthStore.setState({ isLoading: false });
    }
  } catch (error) {
    console.error('Erro ao carregar token:', error);
    useAuthStore.setState({ isLoading: false });
  }
}
