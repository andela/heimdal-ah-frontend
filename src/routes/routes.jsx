import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from '../component/Pages/LoginPage.jsx';
import Homepage from '../component/Pages/HomePage.jsx';
import Layout from '../component/Layout/Layout.jsx';
import NotFound from '../component/Pages/NotFound.jsx';
import SocialAuth from '../component/ui/Widgets/SocialAuth/SocialAuth';

const Routes = () => (
  <div>
    <Layout>
      <Switch>
        <Route path='/social-auth' component={SocialAuth} />
        <Route path='/login' component={LoginPage} />
        <Route exact path='/' component={Homepage} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </div>
);

export default Routes;
