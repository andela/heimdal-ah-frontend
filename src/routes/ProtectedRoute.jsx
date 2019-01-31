import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import isValidUser from '../utils/isValidUser';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (isValidUser() ? (<Component {...props} />) : (<Redirect to='/' />)
    )}
  />
);

export default ProtectedRoute;
