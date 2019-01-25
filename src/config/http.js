import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://heimdal-ah-staging.herokuapp.com/api/v1',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoid2FsZSIsInJvbGVJZCI6MSwiaWF0IjoxNTQ4MzczNjExLCJleHAiOjE1NDg0NjAwMTF9.eWuLzQcwOE0M6L4a5Irnjp6oV-MAHzjC6Ka8Aj5A218',
  },
});

export default instance;
