import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL || 'https://marvel-app-bk.herokuapp.com/',
});

api.interceptors.request.use((config) => {
  const token = JSON.parse(localStorage.getItem('token'));
  try {
    if (token) {
      config.headers.authorization = token;
    }
    return config;
  } catch (err) {
    console.log('err', err);
  }
});

export default api;
