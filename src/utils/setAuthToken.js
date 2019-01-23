import axios from 'axios';

const setAuthToken = (token) => {
  if (token) {
    // Apply token to every request
    axios.defaults.headers.common.token = token;
  } else {
    // Delete the auth header
    delete axios.defaults.headers.common.token;
  }
};

export default setAuthToken;
