import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import NotFound from '../component/Pages/NotFound.jsx';
import MainLayout from '../component/Layout/MainLayout/MainLayout';
import HomePage from '../component/Pages/HomePage.jsx';
import SocialAuth from '../component/ui/SocialAuth/SocialAuth';
import ProfilePage from '../component/Pages/Profile';
import PasswordResetPresentation from '../component/Pages/PasswordResetPage/PasswordResetPresentation';
import UpdatePasswordPresentation from '../component/Pages/PasswordResetPage/UpdatePasswordPresentation';
import Profile from '../component/Pages/Profile/Profile';
import Articles from '../component/Pages/Article/ArticleListPage';
import ProtectedRoute from './ProtectedRoute';


const Routes = () => (
  <MainLayout>
    <Fragment>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/social-auth' component={SocialAuth} />
        <Route exact path='/reset-password' component={PasswordResetPresentation} />
        <Route exact path='/update-password' component={UpdatePasswordPresentation} />
        <Route exact path='/all-stories' component={Articles} />
        <ProtectedRoute exact path='/:username' component={Profile} />
        <Route component={NotFound} />
      </Switch>
      <ReduxToastr />
    </Fragment>
  </MainLayout>
);

export default Routes;
