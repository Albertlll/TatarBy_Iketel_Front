import { create } from 'zustand';
import api from '../../../api';

const useAuthStore = create((set) => ({
  user: null, // Текущий пользователь
  token: null, // JWT-токен
  isAuthenticated: false, // Флаг аутентификации

  // Функция для регистрации
  register: async (email, password) => {
    try {
      const response = await api.post('/register', { email, password });
      const { access_token } = response.data;

      set({ token: access_token, isAuthenticated: true });
      localStorage.setItem('token', access_token); // Сохраняем токен в localStorage
    } catch (error) {
      console.error('Registration failed:', error);
      throw error;
    }
  },

  // Функция для входа
  login: async (email, password) => {
    try {
      const response = await api.post('/token', { username: email, password });
      const { access_token } = response.data;

      set({ token: access_token, isAuthenticated: true });
      localStorage.setItem('token', access_token); // Сохраняем токен в localStorage
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
  checkAuth: async () => {
    const token = localStorage.getItem('token');
    if (token) {
      try {
        // Проверяем валидность токена
        await api.get('/protected'); // Замените на ваш защищенный эндпоинт
        set({ token, isAuthenticated: true });
      } catch (error) {
        console.error('Token validation failed:', error);
        localStorage.removeItem('token'); // Удаляем невалидный токен
      }
    }
  },
}));

export default useAuthStore;