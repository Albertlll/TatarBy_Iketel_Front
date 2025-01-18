import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Добавляем токен в заголовки каждого запроса
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Обработка ошибок
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Ошибки от сервера
      const { status, data } = error.response;
      
      if (status === 401) {
        // Неавторизован
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
      
      return Promise.reject(data?.message || 'Ошибка сервера');
    } else if (error.request) {
      // Запрос был сделан, но ответ не получен
      return Promise.reject('Нет ответа от сервера');
    } else {
      // Ошибка при настройке запроса
      return Promise.reject('Ошибка при отправке запроса');
    }
  }
);

// Базовые методы API
export const register = async (email, password) => {
  return api.post('/register', { email, password });
};

export const login = async (email, password) => {
  const response = await api.post('/token', {
    username: email,
    password,
  });
  return response.data;
};

export const getProtectedData = async () => {
  return api.get('/protected');
};

export default api;