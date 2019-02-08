import { ACTIONS } from '../actionTypes';

export const logoutUser = () => ({
  type: ACTIONS.LOGOUT_USER,
});

const logoutAction = () => (dispatch) => {
  localStorage.removeItem('access-token');
  dispatch(logoutUser());
};

export default logoutAction;
