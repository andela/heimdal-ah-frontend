import Axios from 'axios';
import {
  START_LOADING,
  STOP_LOADING,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAILED,
  UPDATE_PASSWORD_ERROR,
} from '../actionTypes';
import ActionResponse from '../ActionResponse';

const UpdatePassword = (token, newPassword) => (dispatch) => {
  dispatch(ActionResponse(START_LOADING, 'Loading...'));

  return Axios.post(`${process.env.BASE_URL_PROD}/api/v1/password/reset/${token}`, {
    password: newPassword.password,
    confirmPassword: newPassword.confirmPassword,
  }).then((response) => {
    dispatch(ActionResponse(STOP_LOADING, 'Loading Finished'));
    if (response.status === 200) {
      dispatch(ActionResponse(UPDATE_PASSWORD_SUCCESS, 'password update was successful'));
    } else if (response.status === 404) {
      dispatch(ActionResponse(UPDATE_PASSWORD_FAILED, 'user not avalaible'));
    }
  }).catch((error) => {
    dispatch(ActionResponse(STOP_LOADING, 'Loading Finished'));
    dispatch(ActionResponse(UPDATE_PASSWORD_ERROR, 'Server error', error));
  });
};

export default UpdatePassword;
