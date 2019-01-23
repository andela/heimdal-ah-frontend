import jwtDecode from 'jwt-decode';
import { ACTIONS } from '../actionTypes';
import instance from '../../config/http';

export const setCurrentUser = decoded => ({
  type: ACTIONS.SET_CURRENT_USER,
  payload: decoded,
});

export const autheticateUser = token => (dispatch) => {
  localStorage.setItem('access-token', token);
  instance(token);
  const decoded = jwtDecode(token);
  dispatch(setCurrentUser(decoded));
};
