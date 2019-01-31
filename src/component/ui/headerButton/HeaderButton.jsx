import React from 'react';
import ModalButton from '../Modal/Index';
import AuthContainer from '../../../container/AuthContainer';
import SignInForm from '../Forms/Signin/SignInForm';
import SignupContent from '../Forms/Signup/Signup';

const HeaderButton = () => (
  <div className="header-button-group">
    <ModalButton type="signup" label="Signup">
      <SignupContent />
    </ModalButton>
    <ModalButton type='signup' label='Login'>
      <AuthContainer>
        {data => <SignInForm {...data} />}
      </AuthContainer>
    </ModalButton>
  </div>
);

export default HeaderButton;
