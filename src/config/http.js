import axios from 'axios';

const instance = token => axios.create({
  baseURL: `${process.env.BASE_URL_PROD}/api/v1`,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'access-token': token,
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

export default instance;
