// import jwtDecode from 'jwt-decode';
// import setToken from '../../config/setToken';
// import { ACTIONS } from '../actionTypes';
import { setAuthUser } from '../authActions';

// export const setCurrentUser = decoded => ({
//   type: ACTIONS.SET_CURRENT_USER,
//   payload: decoded,
// });

export const authenticateUser = token => (dispatch) => {
  // localStorage.setItem('access-token', token);
  // const decoded = jwtDecode(token);
  // setToken(token);
  // dispatch(setCurrentUser(decoded));
  dispatch(setAuthUser(token));
};
