import { setAuthUser } from '../actions/authActions';

export default (store) => {
  if (localStorage.getItem('access-token')) {
    store.dispatch(setAuthUser(localStorage.getItem('access-token')));
  }
};
