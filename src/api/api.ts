import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    // Не добавляем токен для аутентификации
    if (token && !config.url?.includes('/auth')) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

api.interceptors.response.use(
    response => response,
    error => {
      if (error.response?.status === 401 && window.location.pathname !== '/login') {
        localStorage.removeItem('token');
        window.location.href = '/login';
      }
      return Promise.reject(error);
    }
  );

export default api;