import React from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

const Logo = () => (
  <Link to='/'>
    <img className='logo' src='https://res.cloudinary.com/naijavibz/image/upload/v1549376036/logo.png' alt="heimdal-logo" />
  </Link>
);

export default Logo;
