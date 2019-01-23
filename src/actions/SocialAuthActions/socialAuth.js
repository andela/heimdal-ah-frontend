import jwtDecode from 'jwt-decode';
import { SET_CURRENT_USER } from '../actionTypes';
import instance from '../../config/http';

export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded,
});

export const autheticateUser = token => (dispatch) => {
  localStorage.setItem('access-token', token);
  instance(token);
  const decoded = jwtDecode(token);
  dispatch(setCurrentUser(decoded));
};
