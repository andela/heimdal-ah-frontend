import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

const Logo = () => (
  <Link to='/'>
    <img className='logo' src="./src/images/logo.png" alt="heimdal-logo" />
  </Link>
);

export default Logo;
