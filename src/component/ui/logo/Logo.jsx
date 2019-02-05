import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/logo.png';
import './Logo.scss';

const Logo = () => (
  <Link to='/'>
    <img className='logo' src={logo} alt="heimdal-logo" />
  </Link>
);

export default Logo;
