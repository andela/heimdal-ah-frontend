// import axios from 'axios';
import JWT from 'jsonwebtoken';
import { signupEndpoint } from '../apiEndpoints';
import { SET_ERRORS, SET_AUTH_USER } from './actionTypes';
import errorResponse from '../utils/errorResponse';
import configureLocalStorage from '../utils/configureLocalStorage';
import axiosInstance, { setToken } from '../utils/axiosInstance';

export const setAuthUser = (token) => {
  const decodedToken = JWT.decode(token);
  const { id: userId, username } = decodedToken;

  configureLocalStorage.setAuthUser(token);
  // remember to set axios auth token here
  setToken(token);

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
  axiosInstance
    .post(signupEndpoint, signupData)
    .then((response) => {
      const { token } = response.data;
      dispatch(setAuthUser(token));
      return history.push('/');
    })
    .catch((errors = {}) => {
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
