import jwtDecode from 'jwt-decode';
import { ACTIONS } from '../actionTypes';
import instance from '../../config/http';
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

export const checkAxios = () => {
  instance.get(`${process.env.BASE_URL_PROD}/users/followers`)
    .then((data) => {
      console.log(data.data);
    });
};
