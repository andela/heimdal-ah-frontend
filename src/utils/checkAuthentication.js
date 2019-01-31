import React from 'react';
import jwt from 'jsonwebtoken';
import { Redirect } from 'react-router-dom';


const checkAuthentication = () => {
  const token = localStorage.getItem('access-token');
  try {
    jwt.verify(token, 'secret');
    return null;
  } catch (err) {
    return <Redirect to='/login' />;
  }
};

export default checkAuthentication;
