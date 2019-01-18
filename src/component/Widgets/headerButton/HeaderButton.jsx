import React from 'react';
import Button from '../../ui/buttons/Button';

const HeaderButton = () => (
  <div className='header-button-group'>
    <Button className="header-button" type='signup' label='Signup' />
    <Button type='login' label='Login' />
  </div>
);

export default HeaderButton;
