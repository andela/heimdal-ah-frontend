import React from 'react';
import ModalButton from '../Modal/Index';
import AuthContainer from '../../../container/AuthContainer';
import SignInForm from '../Forms/Signin/SignInForm';

const HeaderButton = () => (
  <div className='header-button-group'>
    <ModalButton type='signup' label='Signup'>
      Sign up
    </ModalButton>
    <ModalButton type='signup' label='Login'>
      <AuthContainer>
        {data => <SignInForm {...data} />}
      </AuthContainer>
    </ModalButton>
  </div>
);

export default HeaderButton;
