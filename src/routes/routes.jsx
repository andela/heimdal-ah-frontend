import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from '../component/Pages/LoginPage.jsx';
import Homepage from '../component/Pages/HomePage.jsx';
import NotFound from '../component/Pages/NotFound.jsx';
import MainLayout from '../component/Layout/MainLayout/MainLayout';


const Routes = () => (
  <MainLayout>
    <Switch>
      <Route exact path='/' component={Homepage} />
      <Route exact path='/login' component={LoginPage} />
      <Route component={NotFound} />
    </Switch>
  </MainLayout>
);
export default Routes;
