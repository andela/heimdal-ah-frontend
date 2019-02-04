import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:9000/api/v1',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export const setToken = (token) => {
  axiosInstance.defaults.headers.common['access-token'] = token;
};

export default axiosInstance;
