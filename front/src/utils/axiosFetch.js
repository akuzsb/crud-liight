import axios from 'axios';
import router from '../router';

const axiosFetch = axios.create({
  baseURL: 'http://localhost:3000/api',
});

// Interceptor para agregar el token al header de Authorization
axiosFetch.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

// Interceptor para manejar errores 401
axiosFetch.interceptors.response.use((response) => {
  return response;
}, (error) => {
  if (error.response && error.response.status === 401) {
    router.push('/login');
  }
  return Promise.reject(error);
});

export default axiosFetch;
