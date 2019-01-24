import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'font-awesome/css/font-awesome.min.css';
import jwtDecode from 'jwt-decode';
import configureStore from './store/configureStore';
import App from './App.jsx';
import { setCurrentUser } from './actions/SocialAuthActions/socialAuth';
import setToken from './config/setToken';

const store = configureStore();
// check for token
const token = localStorage.getItem('access-token');
if (token) {
  // set auth token
  // decode token and get user info and expiration
  setToken(token);
  const decoded = jwtDecode(token);
  // set user using the setCurrentUser
  store.dispatch(setCurrentUser(decoded));
}

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
