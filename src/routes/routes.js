import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from '../component/Pages/LoginPage.jsx';
import Homepage from '../component/Pages/HomePage.jsx';

const Routes = () => (
  <div className='container'>
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/login' component={LoginPage} />
    </Switch>
  </div>
);

export default Routes;
