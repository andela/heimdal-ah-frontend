import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://heimdal-ah-staging.herokuapp.com/api/v1',
  headers: {
    'Access-Control-Allow-Origin': '*',
    'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInVzZXJuYW1lIjoic2VndW4iLCJlbWFpbCI6InVzZXJAaGVpbWRhbC5jb20iLCJpbWFnZSI6Imh0dHA6Ly90ZWxlY29tbXN1bHQubmwvd3AtY29udGVudC91cGxvYWRzLzIwMTYvMDcvYnJhZC1wcm9maWxlLXNxdWFyZS5qcGciLCJyb2xlSWQiOjIsImlhdCI6MTU0ODc1Njg3MCwiZXhwIjoxNTQ4ODQzMjcwfQ.4PvepKvCqkqMLmi_-aa1bB2Bl6ZVEUipzhb43LAAPxs',
  },
});

export default instance;
