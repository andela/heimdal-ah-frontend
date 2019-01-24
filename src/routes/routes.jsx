import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import LoginPage from '../component/Pages/LoginPage.jsx';
import NotFound from '../component/Pages/NotFound.jsx';
import MainLayout from '../component/Layout/MainLayout/MainLayout';
import PasswordResetPresentation from '../component/Pages/PasswordResetPage/PasswordResetPresentation';
import UpdatePasswordPresentation from '../component/Pages/PasswordResetPage/UpdatePasswordPresentation';

const Routes = () => (
  <MainLayout>
    <Switch>
      <Route exact path='/' component={LoginPage} />
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/resetpassword' component={PasswordResetPresentation} />
      <Route exact path='/updatepassword' component={UpdatePasswordPresentation} />
      <Route component={NotFound} />
    </Switch>
    <ReduxToastr />
  </MainLayout>
);

export default Routes;
