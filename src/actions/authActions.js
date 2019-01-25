// import axios from 'axios';
import JWT from 'jsonwebtoken';
import { ACTIONS } from './actionTypes';
import { signupEndpoint } from '../apiEndpoints';
import errorResponse from '../utils/errorResponse';
import configureLocalStorage from '../utils/configureLocalStorage';
import axiosInstance, { setToken } from '../utils/axiosInstance';

export const setAuthUser = (token) => {
  const decodedToken = JWT.decode(token);
  const { userId, username, roleId } = decodedToken;

  configureLocalStorage.setAuthUser(token);
  // remember to set axios auth token here
  setToken(token);

  return {
    type: ACTIONS.SET_AUTH_USER,
    payload: {
      user: { userId, username, roleId },
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
      };
      return errorResponse(data);
    });
};
