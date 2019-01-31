import React from 'react';
import TriggerModal from '../../ui/Forms/Modals/TriggerModal';
import Signup from '../../ui/Forms/Signup/Signup';

const HeaderButton = () => (
  <div className="header-button-group">
    <TriggerModal type="signup" label="Signup">
      <Signup />
    </TriggerModal>
    <TriggerModal type="signup" label="Login">
      signin Form
    </TriggerModal>
  </div>
);

export default HeaderButton;
