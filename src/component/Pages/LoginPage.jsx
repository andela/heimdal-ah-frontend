import React from 'react';
import AuthContainer from '../../container/AuthContainer';
import SignInForm from '../ui/Forms/Signin/SignInForm';

const LoginPage = () => (
  <div>
    <AuthContainer>
      {data => <SignInForm {...data} />}
    </AuthContainer>
  </div>
);


export default LoginPage;
