import axios from 'axios';
import jwt from 'jsonwebtoken';
import { SET_CURRENT_USER, SET_CURRENT_USER_ERROR } from '../actionTypes';

export const setCurrent = user => ({
  type: SET_CURRENT_USER,
  user,
});

export const setCurrentUserError = error => ({
  type: SET_CURRENT_USER_ERROR,
  error,
});

const logIn = data => dispatch => axios.post('https://heimdal-ah-staging.herokuapp.com/api/v1/auth/login', data).then(
  (res) => {
    const { token } = res.data;
    // const { message } = res.data;
    localStorage.setItem('token', token);
    dispatch(setCurrent(jwt.decode(token)));
    return true;
  },
).catch((error) => {
  dispatch(setCurrentUserError(error.response.data));
});
export default logIn;
