import { setAuthUser } from '../authActions';

export const authenticateUser = token => (dispatch) => {
  dispatch(setAuthUser(token));
};
