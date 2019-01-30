import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://heimdal-ah-staging.herokuapp.com/api/v1',
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

export default instance;
