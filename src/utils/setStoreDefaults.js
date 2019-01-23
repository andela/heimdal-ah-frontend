import { setAuthUser } from '../actions/authActions';

export default (store) => {
  if (localStorage.token && localStorage.isAuthenticated) {
    store.dispatch(setAuthUser(localStorage.token));
  }
};
