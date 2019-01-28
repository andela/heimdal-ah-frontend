import jwt from 'jsonwebtoken';
import { ACTIONS } from '../actionTypes';
import instance from '../../config/http';
import setToken from '../../config/setToken';


export const setCurrent = user => ({
  type: ACTIONS.SET_CURRENT_USER,
  user,
});

export const setCurrentUserError = error => ({
  type: ACTIONS.SET_CURRENT_USER_FAIL,
  error,
});

const logIn = payload => dispatch => instance.post('/auth/login', payload)
  .then(
    (response) => {
      const { token } = response.data;
      localStorage.setItem('access-token', token);
      setToken(token);
      const decoded = jwt.decode(token);
      dispatch(setCurrent(decoded));
    },
  ).catch((error) => {
    const { data } = error.response;
    dispatch(setCurrentUserError(data));
  });
export default logIn;
