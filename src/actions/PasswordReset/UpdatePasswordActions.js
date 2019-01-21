import Axios from 'axios';
import {
  ACTIONS,
} from '../actionTypes';
import ActionResponse from '../ActionResponse';

const updatePassword = (token, newPassword) => (dispatch) => {
  dispatch(ActionResponse(ACTIONS.START_LOADING, 'Loading...'));

  return Axios.post(`${process.env.BASE_URL_PROD}/api/v1/password/reset/${token}`, {
    password: newPassword.password,
    confirmPassword: newPassword.confirmPassword,
  }).then((response) => {
    dispatch(ActionResponse(ACTIONS.STOP_LOADING, 'Loading Finished'));
    if (response.status === 200) {
      dispatch(ActionResponse(ACTIONS.UPDATE_PASSWORD_SUCCESS, 'password update was successful'));
    } else if (response.status === 404) {
      dispatch(ActionResponse(ACTIONS.UPDATE_PASSWORD_FAILED, 'user not avalaible'));
    }
  }).catch((error) => {
    dispatch(ActionResponse(ACTIONS.STOP_LOADING, 'Loading Finished'));
    dispatch(ActionResponse(ACTIONS.UPDATE_PASSWORD_ERROR, 'Server error', error));
  });
};

export default updatePassword;
