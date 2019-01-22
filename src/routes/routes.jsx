import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from '../component/Pages/LoginPage.jsx';
import HomePage from '../component/Pages/HomePage';

const Routes = () => (
  <div>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/login' component={LoginPage} />
    </Switch>
  </div>
);

export default Routes;
