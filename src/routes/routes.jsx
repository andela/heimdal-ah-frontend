import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginPage from '../component/Pages/LoginPage.jsx';
import Homepage from '../component/Pages/HomePage.jsx';
import Layout from '../component/Layout/Layout.jsx';
import Profile from '../component/Pages/Profile';
import NotFound from '../component/Pages/NotFound.jsx';

const Routes = () => (
  <div>
    <Layout>
      <Switch>
        <Route path='/login' component={LoginPage} />
        <Route exact path='/' component={Homepage} />
        <Route path="/profile/:userId" component={Profile} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </div>
);

export default Routes;
