import axios from 'axios';
import JWT from 'jsonwebtoken';
import { signupEndpoint } from '../apiEndpoints';
import { SET_ERRORS, SET_AUTH_USER } from './actionTypes';
import errorResponse from '../utils/errorResponse';
import configureLocalStorage from '../utils/configureLocalStorage';

export const setAuthUser = (token) => {
  const decodedToken = JWT.decode(token);
  const { id: userId, username } = decodedToken;

  configureLocalStorage.setAuthUser(token);
  // remember to set axios auth token here

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
      console.log('=============', errors, '=============');
      console.log('=============', errors.response, '=============');

      const { response = {}, request } = errors;

      const data = {
        dispatch,
        request,
        response,
        errors,
        SET_ERRORS,
      };
      return errorResponse(data);
    });
};
