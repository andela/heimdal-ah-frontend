import React from 'react';
import AuthContainer from '../../container/AuthContainer';
import LoginForm from '../ui/forms/LoginForm';

const LoginPage = () => (
  <div>
    <AuthContainer>
      {data => <LoginForm {...data} />}
    </AuthContainer>
  </div>
);


export default LoginPage;
