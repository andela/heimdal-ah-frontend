import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import LoginPage from '../component/Pages/LoginPage.jsx';
import Homepage from '../component/Pages/HomePage.jsx';
import PasswordResetPresentation from '../component/Pages/PasswordResetPage/PasswordResetPresentation';
import UpdatePasswordPresentation from '../component/Pages/PasswordResetPage/UpdatePasswordPresentation';

const Routes = () => (
  <div>
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/resetpassword' component={PasswordResetPresentation} />
      <Route exact path='/updatepassword' component={UpdatePasswordPresentation} />
    </Switch>
    <ReduxToastr />
  </div>
);

export default Routes;
