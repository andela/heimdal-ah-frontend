import React from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';

const HomepageButton = () => (
  <Link to='/login'>
    <Button btnTitle='Click to Visit Login Page' btnClass='btn-secondary' />
  </Link>
);

export default HomepageButton;
