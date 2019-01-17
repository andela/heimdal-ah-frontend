import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from '../component/Pages/LoginPage.jsx';
import Cards from '../component/UI/cards/NotificationCards';

const Routes = () => (
  <div className='container'>
    <Switch>
      <Route exact path='/' component={Cards} />
      <Route exact path='/login' component={LoginPage} />
    </Switch>
  </div>
);

export default Routes;
