import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from '../component/Pages/LoginPage.jsx';
import Homepage from '../component/Pages/HomePage.jsx';
import PasswordReset from '../component/Pages/PasswordResetPage/PasswordReset.jsx';

const Routes = () => (
  <div className='container'>
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/resetpassword' component={PasswordReset} />
    </Switch>
  </div>
);

export default Routes;
