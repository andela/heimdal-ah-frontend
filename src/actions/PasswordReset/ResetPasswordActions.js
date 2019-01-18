import Axios from 'axios';
import {
  START_LOADING,
  STOP_LOADING,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_ERROR,
} from '../actionTypes';
import ActionResponse from '../ActionResponse';

const ResetPassword = userEmail => (dispatch) => {
  dispatch(ActionResponse(START_LOADING, 'Loading...'));

  return Axios.post(`${process.env.BASE_URL_PROD}/api/v1/password/forget`, {
    email: userEmail,
  }).then((response) => {
    dispatch(ActionResponse(STOP_LOADING, 'Loading Finished'));
    if (response.status === 200) {
      dispatch(ActionResponse(RESET_PASSWORD_SUCCESS, 'Email was sent successfully'));
    } else if (response.status === 404) {
      dispatch(ActionResponse(RESET_PASSWORD_FAILED, 'user not avalaible'));
    }
  }).catch((error) => {
    dispatch(ActionResponse(STOP_LOADING, 'Loading Finished'));
    dispatch(ActionResponse(RESET_PASSWORD_ERROR, 'Server error', error));
  });
};

export default ResetPassword;
