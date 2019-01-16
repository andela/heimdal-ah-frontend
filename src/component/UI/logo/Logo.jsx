import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => (
  <Link to='/'>
    <img className='logo' src='/public/images/logo.png' alt="heimdal-logo" />
  </Link>
);

export default Logo;
