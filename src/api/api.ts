import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.aedb.online',
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  config.auth = {
    username: import.meta.env.VITE_API_USERNAME,
    password: import.meta.env.VITE_API_PASSWORD,
  };
  return config;
});

export default api;