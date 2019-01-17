import Axios from 'axios';
import {
  GLOBAL_START_LOADING,
  GLOBAL_STOP_LOADING,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_ERROR,
} from './actionTypes';

const ResetPassword = userEmail => (dispatch) => {
  dispatch({
    type: GLOBAL_START_LOADING,
    payload: 'Loading...',
  });
  return Axios.post(`${process.env.BASE_URL_PROD}/api/v1/password/forget`, {
    email: userEmail,
  }).then((response) => {
    dispatch({
      type: GLOBAL_STOP_LOADING,
      payload: 'Loading Finished',
    });
    if (response.status === 200) {
      dispatch({
        type: RESET_PASSWORD_SUCCESS,
        payload: 'Email was sent successfully',
      });
    } else if (response.status === 404) {
      dispatch({
        type: RESET_PASSWORD_FAILED,
        payload: 'user not avalaible',
      });
    }
  }).catch((error) => {
    dispatch({
      type: RESET_PASSWORD_ERROR,
      payload: 'Server error',
      error,
    });
  });
};

export default ResetPassword;
