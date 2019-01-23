import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from '../component/Pages/LoginPage.jsx';
import NotFound from '../component/Pages/NotFound.jsx';
import MainLayout from '../component/Layout/MainLayout/MainLayout';
import SocialAuth from '../component/ui/Widgets/SocialAuth/SocialAuth';


const Routes = () => (
  <MainLayout>
    <Switch>
      <Route path='/social-auth' component={SocialAuth} />
      <Route exact path='/' component={LoginPage} />
      <Route exact path='/login' component={LoginPage} />
      <Route component={NotFound} />
    </Switch>
  </MainLayout>
);
export default Routes;
