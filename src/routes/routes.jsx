import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import LoginPage from '../component/Pages/LoginPage.jsx';
import Homepage from '../component/Pages/HomePage.jsx';
import { PasswordReset, UpdatePassword } from '../component/Pages/PasswordResetPage';

const Routes = () => (
  <div className='container'>
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/resetpassword' component={PasswordReset} />
      <Route exact path='/updatepassword' component={UpdatePassword} />
    </Switch>
    <ReduxToastr />
  </div>
);

export default Routes;
