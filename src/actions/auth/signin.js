import { ACTIONS } from '../actionTypes';
import instance from '../../config/http';
import { setAuthUser } from '../authActions';

export const setCurrentUser = user => ({
  type: ACTIONS.SET_AUTH_USER,
  user,
});

export const setCurrentUserError = error => ({
  type: ACTIONS.SET_CURRENT_USER_FAIL,
  error,
});

export const removeErrorMsg = () => ({
  type: ACTIONS.REMOVE_CURRENT_USER_ERROR,
});

const logIn = payload => dispatch => instance
  .post('/auth/login', payload)
  .then((response) => {
    const { token } = response.data;
    dispatch(setAuthUser(token));
  })
  .catch((error) => {
    const { data } = error.response;
    dispatch(setCurrentUserError(data));
  });
export default logIn;
