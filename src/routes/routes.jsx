import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginPage from '../component/Pages/LoginPage.jsx';
import NotFound from '../component/Pages/NotFound.jsx';
import MainLayout from '../component/Layout/MainLayout/MainLayout';
import UpdateArticles from '../component/Pages/articles/UpdateArticles/UpdateArticles.jsx';
import HomePage from '../component/Pages/HomePage.jsx';


const Routes = () => (
  <MainLayout>
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/login' component={LoginPage} />
      <Route exact path='/updatearticle' component={UpdateArticles} />
      <Route component={NotFound} />
    </Switch>
  </MainLayout>
);
export default Routes;
