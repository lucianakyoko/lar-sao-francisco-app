import { create } from 'zustand';
import * as SecureStore from 'expo-secure-store';

type AuthState = {
  token: string | null;
  isAuthenticated: boolean;
  login: (token: string) => Promise<void>;
  logout: () => Promise<void>;
};

export const useAuthStore = create<AuthState>((set) => ({
  token: null,
  isAuthenticated: false,

  login: async (token: string) => {
    await SecureStore.setItemAsync('authToken', token);
    set({ token, isAuthenticated: true });
  },

  logout: async () => {
    await SecureStore.deleteItemAsync('authToken');
    set({ token: null, isAuthenticated: false });
  },
}));

// Carregar token quando o app inicia
export const loadStoredToken = async () => {
  const token = await SecureStore.getItemAsync('authToken');
  if (token) {
    useAuthStore.setState({ token, isAuthenticated: true });
  }
};
