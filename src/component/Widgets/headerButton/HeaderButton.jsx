import React from 'react';
import TriggerModal from '../../ui/Modal/TriggerModal';

const HeaderButton = () => (
  <div className='header-button-group'>
    <TriggerModal type='signup' label='Signup'>
      Sign up
    </TriggerModal>
    <TriggerModal type='signup' label='Login'>
      signin Form
    </TriggerModal>
  </div>
);

export default HeaderButton;
