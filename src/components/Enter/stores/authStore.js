import { create } from 'zustand';
import axios from 'axios';

const useAuthStore = create((set) => ({
  user: null, // Текущий пользователь
  token: null, // JWT-токен
  isAuthenticated: false, // Флаг аутентификации

  // Функция для регистрации
  register: async (email, password) => {
    try {
      const response = await axios.post('/api/auth/register', { email, password });
      const { user, token } = response.data;

      set({ user, token, isAuthenticated: true });
      localStorage.setItem('token', token); // Сохраняем токен в localStorage
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  },

  // Функция для входа
  login: async (email, password) => {
    try {
      const response = await axios.post('/api/auth/login', { email, password });
      const { user, token } = response.data;

      set({ user, token, isAuthenticated: true });
      localStorage.setItem('token', token); // Сохраняем токен в localStorage
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  },

  // Функция для выхода
  logout: () => {
    set({ user: null, token: null, isAuthenticated: false });
    localStorage.removeItem('token'); // Удаляем токен из localStorage
  },

  // Функция для проверки аутентификации при загрузке приложения
  checkAuth: () => {
    const token = localStorage.getItem('token');
    if (token) {
      set({ token, isAuthenticated: true });
    }
  },
}));

export default useAuthStore;