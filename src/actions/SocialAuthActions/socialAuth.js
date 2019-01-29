import jwtDecode from 'jwt-decode';
import { ACTIONS } from '../actionTypes';
import setToken from '../../config/setToken';

export const setCurrentUser = decoded => ({
  type: ACTIONS.SET_CURRENT_USER,
  payload: decoded,
});


export const autheticateUser = token => (dispatch) => {
  localStorage.setItem('access-token', token);
  const decoded = jwtDecode(token);
  setToken(token);
  dispatch(setCurrentUser(decoded));
};
