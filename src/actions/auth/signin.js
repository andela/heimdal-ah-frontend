import { ACTIONS } from '../actionTypes';
import instance from '../../config/http';
import { setAuthUser } from '../authActions';
import { toggleLoader } from '../loaderActions';
import errorResponse from '../../utils/errorResponse';

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

const logIn = (payload, toggleModal) => dispatch => instance
  .post('/auth/login', payload)
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
export default logIn;
