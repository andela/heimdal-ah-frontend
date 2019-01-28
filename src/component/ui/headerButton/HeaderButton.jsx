import React from 'react';
import ModalButton from '../Modal/Index';
import SignupContent from '../Forms/Signup/Signup';

const HeaderButton = () => (
  <div className="header-button-group">
    <ModalButton type="signup" label="Signup">
      <SignupContent />
    </ModalButton>
    <ModalButton type="signup" label="Login">
      signin Form
    </ModalButton>
  </div>
);

export default HeaderButton;
