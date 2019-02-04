import instance from '../../config/http';
import { ACTIONS } from '../actionTypes';
import ActionResponse from '../actionResponse';

const resetPassword = userEmail => dispatch => instance.post('/password/forgot', {
  email: userEmail,
})
  .then((response) => {
    if (response.status === 200) {
      dispatch(ActionResponse(ACTIONS.RESET_PASSWORD_SUCCESS, 'Email was sent successfully'));
      dispatch(ActionResponse(ACTIONS.RESET_PASSWORD_STATE, ''));
    } else if (response.status === 404) {
      dispatch(ActionResponse(ACTIONS.RESET_PASSWORD_FAILED, 'user not avalaible'));
      dispatch(ActionResponse(ACTIONS.RESET_PASSWORD_STATE, ''));
    }
  })
  .catch((error) => {
    dispatch(ActionResponse(ACTIONS.RESET_PASSWORD_ERROR, 'Server error', error));
    dispatch(ActionResponse(ACTIONS.RESET_PASSWORD_STATE, ''));
  });

export default resetPassword;
