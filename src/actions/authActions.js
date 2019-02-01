// import axios from 'axios';
import JWT from 'jsonwebtoken';
import { ACTIONS } from './actionTypes';
import { signupEndpoint } from '../apiEndpoints';
import errorResponse from '../utils/errorResponse';
import configureLocalStorage from '../utils/configureLocalStorage';
import axiosInstance, { setToken } from '../config/http';
import { toggleLoader } from './loaderActions';

export const setAuthUser = (token) => {
  const decodedToken = JWT.decode(token);
  // const { userId, username, roleId } = decodedToken;

  configureLocalStorage.setAuthUser(token);
  // remember to set axios auth token here
  setToken(token);

  return {
    type: ACTIONS.SET_AUTH_USER,
    payload: decodedToken,
  };
};

export const signupUser = (signupData = {}, history, toggleModal) => (dispatch) => {
  axiosInstance
    .post(signupEndpoint, signupData)
    .then((response) => {
      const { token } = response.data;
      dispatch(setAuthUser(token));
      dispatch(toggleLoader());

      setTimeout(() => {
        dispatch(() => {
          toggleModal();
          return {
            type: ACTIONS.TOGGLE_MODAL,
          };
        });
      }, 200);
    })
    .catch((errors = {}) => {
      const { response = {}, request } = errors;

      const data = {
        dispatch,
        request,
        response,
        errors,
      };
      dispatch(toggleLoader());
      return errorResponse(data);
    });
};
