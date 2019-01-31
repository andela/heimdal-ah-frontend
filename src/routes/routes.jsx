import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import NotFound from '../component/Pages/NotFound.jsx';
import MainLayout from '../component/Layout/MainLayout/MainLayout';
import HomePage from '../component/Pages/HomePage.jsx';
import SocialAuth from '../component/ui/SocialAuth/SocialAuth';
import PasswordResetPresentation from '../component/Pages/PasswordResetPage/PasswordResetPresentation';
import UpdatePasswordPresentation from '../component/Pages/PasswordResetPage/UpdatePasswordPresentation';
import Profile from '../component/Pages/Profile/Profile';
import ProtectedRoute from './ProtectedRoute';
import LandingPage from '../component/Pages/LandingPage/index.jsx';

const Routes = () => (
  <MainLayout>
    <Fragment>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/social-auth" component={SocialAuth} />
        <Route exact path="/reset-password" component={PasswordResetPresentation} />
        <Route exact path="/update-password" component={UpdatePasswordPresentation} />
        <ProtectedRoute exact path="/:username" component={Profile} />
        <Route component={NotFound} />
      </Switch>
      <ReduxToastr />
    </Fragment>
  </MainLayout>
);

export default Routes;
