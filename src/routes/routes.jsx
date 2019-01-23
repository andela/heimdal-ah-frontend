import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from '../component/Pages/LoginPage.jsx';
import Homepage from '../component/Pages/HomePage.jsx';
import NotFound from '../component/Pages/NotFound.jsx';
import MainLayout from '../component/Layout/MainLayout/MainLayout';
import SocialAuth from '../component/ui/SocialAuth/SocialAuth';

const Routes = () => (
  <div>
    <MainLayout>
      <Switch>
        <Route exact path='/social-auth' component={SocialAuth} />
        <Route path='/login' component={LoginPage} />
        <Route exact path='/' component={Homepage} />
        <Route component={NotFound} />
      </Switch>
    </MainLayout>
  </div>
);

export default Routes;
