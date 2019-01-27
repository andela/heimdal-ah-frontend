import React from 'react';
import ModalButton from '../Modal/Index';

const HeaderButton = () => (
  <div className='header-button-group'>
    <ModalButton type='signup' label='Signup'>
      Sign up
    </ModalButton>
    <ModalButton type='signup' label='Login'>
      signin Form
    </ModalButton>
  </div>
);

export default HeaderButton;
