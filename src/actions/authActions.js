import axios from 'axios';
import JWT from 'jsonwebtoken';
import { signupEndpoint } from '../apiEndpoints';
import { SET_ERRORS, SET_AUTH_USER } from './actionTypes';

export const setAuthUser = (token) => {
  const decodedToken = JWT.decode(token);
  const { id: userId, username } = decodedToken;

  // SetLocalStorageUser
  localStorage.setItem('isAuthenticated', true);
  localStorage.setItem('token', token);
  localStorage.setItem('userId', userId);
  localStorage.setItem('username', username);

  return {
    type: SET_AUTH_USER,
    payload: {
      isAuthenticated: true,
      token,
      userId,
      username,
    },
  };
};

export const signupUser = (signupData = {}, history) => (dispatch) => {
  axios
    .post(signupEndpoint, signupData)
    .then((response) => {
      console.log('=============', response, '=============');
      if (response.status === 201) {
        const { token } = response.data;
        alert(token);
        return dispatch(setAuthUser(token));
        // return history.push('/users/foods');
      }
      return dispatch({
        type: SET_ERRORS,
        payload: 'An error occured try again',
      });
    })
    .catch((errors = {}) => {
      console.log('=============', errors.response, '=============');
      const { response } = errors;

      if (response.status === 400) {
        return dispatch({
          type: SET_ERRORS,
          payload: response.data.errors,
        });
      }
      if (response.status === 409) {
        return dispatch({
          type: SET_ERRORS,
          payload: { mainError: response.data.message },
        });
      }
      if (response.status === 500) {
        return dispatch({
          type: SET_ERRORS,
          payload: { mainError: 'An error occured, please try again in a moment' },
        });
      }
    });
};
