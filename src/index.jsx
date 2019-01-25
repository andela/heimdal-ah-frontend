import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
// import jwtDecode from 'jwt-decode';
import configureStore from './store/configureStore';
import App from './App.jsx';
// <<<<<<< HEAD
import setStoreDefaults from './utils/setStoreDefaults';

const store = configureStore();
setStoreDefaults(store);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
