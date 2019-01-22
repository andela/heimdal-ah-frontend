import Axios from 'axios';
import {
  ACTIONS,
} from '../actionTypes';
import ActionResponse from '../actionResponse';

const resetPassword = userEmail => dispatch => Axios.post(`${process.env.BASE_URL_PROD}/api/v1/password/forgot`, {
  email: userEmail,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
}).then((response) => {
  if (response.status === 200) {
    dispatch(ActionResponse(ACTIONS.RESET_PASSWORD_SUCCESS, 'Email was sent successfully'));
  } else if (response.status === 404) {
    dispatch(ActionResponse(ACTIONS.RESET_PASSWORD_FAILED, 'user not avalaible'));
  }
}).catch((error) => {
  dispatch(ActionResponse(ACTIONS.RESET_PASSWORD_ERROR, 'Server error', error));
});

export default resetPassword;
