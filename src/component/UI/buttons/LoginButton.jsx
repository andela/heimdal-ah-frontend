import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const LoginButton = () => (
  <Link to='/'>
    <Button btnTitle='Click to Visit Homepage' btnClass='btn-info mt-5' />
  </Link>
);
export default LoginButton;
