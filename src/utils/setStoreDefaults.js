import jwt from 'jsonwebtoken';
import { setAuthUser } from '../actions/authActions';
import logoutAction from '../actions/auth/logout';

export default (store) => {
  const token = localStorage.getItem('access-token');
  if (token) {
    const decoded = jwt.decode(token);
    const isExpired = (decoded.exp < (Date.now() / 1000));
    if (isExpired) {
      store.dispatch(logoutAction());
    } else {
      store.dispatch(setAuthUser(token));
    }
  }
};
