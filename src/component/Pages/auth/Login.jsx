import React from 'react';
import AuthContainer from '../../../container/AuthContainer';
import LoginForm from '../../ui/forms/LoginForm';

const Login = () => (
  <div>
    <AuthContainer>
      {data => <LoginForm {...data} />}
    </AuthContainer>
  </div>
);


export default Login;
