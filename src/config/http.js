import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${process.env.BASE_URL_PROD}/api/v1` || 'https://heimdal-ah-staging.herokuapp.com/api/v1',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export const setToken = (token) => {
  axiosInstance.defaults.headers.common['access-token'] = token;
};

export default axiosInstance;
