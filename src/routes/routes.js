import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from '../component/Pages/LoginPage.jsx';
import Homepage from '../component/Pages/HomePage.jsx';
import Cards from '../component/UI/cards/Cards';

const Routes = () => (
  <div className='container'>
    <Switch>
      <Route exact path='/' component={Cards} />
      <Route exact path='/login' component={LoginPage} />
    </Switch>
  </div>
);

export default Routes;
