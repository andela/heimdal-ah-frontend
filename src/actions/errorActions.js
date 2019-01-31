import { ACTIONS } from './actionTypes';

export const setErrors = (payload = {}) => ({
  type: ACTIONS.SET_ERRORS,
  payload,
});

export const clearErrors = () => ({
  type: ACTIONS.CLEAR_ERRORS,
});

export const removeAnError = errorName => ({
  type: ACTIONS.REMOVE_AN_ERROR,
  errorName,
});
