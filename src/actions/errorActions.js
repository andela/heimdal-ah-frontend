import { SET_ERRORS, CLEAR_ERRORS, REMOVE_AN_ERROR } from './actionTypes';

export const setErrors = (payload = {}) => ({
  type: SET_ERRORS,
  payload,
});

export const clearErrors = () => ({
  type: CLEAR_ERRORS,
});

export const removeAnError = errorName => ({
  type: REMOVE_AN_ERROR,
  errorName,
});
