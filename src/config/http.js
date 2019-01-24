import axios from 'axios';

const instance = axios.create({
  baseURL: `${process.env.BASE_URL_PROD}`,
  headers: { 'Access-Control-Allow-Origin': '*' },
});

export default instance;
