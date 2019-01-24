import jwt from 'jsonwebtoken';
import { ACTIONS } from '../actionTypes';
import instance from '../../config/http';


export const setCurrent = user => ({
  type: ACTIONS.SET_CURRENT_USER,
  user,
});

export const setCurrentUserError = error => ({
  type: ACTIONS.SET_CURRENT_USER_ERROR,
  error,
});

const logIn = data => dispatch => instance.post('auth/login', data)
  .then(
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
