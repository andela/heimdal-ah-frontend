import jwtDecode from 'jwt-decode';
import {
  SET_CURRENT_USER,
} from './actionTypes';
import setAuthToken from '../utils/setAuthToken';

export const setCurrentUser = decoded => ({
  type: SET_CURRENT_USER,
  payload: decoded,
});

export const autheticateUser = token => (dispatch) => {
  localStorage.setItem('access-token', token);
  setAuthToken(token);
  const decoded = jwtDecode(token);
  dispatch(setCurrentUser(decoded));
};
