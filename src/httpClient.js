import axios from 'axios';

const api = axios.create({
  baseURL: 'https://fastapi:8000', // Укажите URL вашего бэкенда
});

// Добавляем токен в заголовки каждого запроса
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;