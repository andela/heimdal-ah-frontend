import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import NotFound from '../component/Pages/NotFound.jsx';
import MainLayout from '../component/Layout/MainLayout/MainLayout';
import HomePage from '../component/Pages/HomePage.jsx';
import SocialAuth from '../component/ui/SocialAuth/SocialAuth';
import PasswordResetPresentation from '../component/Pages/PasswordResetPage/PasswordResetPresentation';
import UpdatePasswordPresentation from '../component/Pages/PasswordResetPage/UpdatePasswordPresentation';
import Profile from '../component/Pages/Profile/Profile';
import ProfileEdit from '../component/Pages/ProfileEdit/ProfileEdit';
import ProtectedRoute from './ProtectedRoute';
import ScrollToTop from './ScrollToTop.jsx';


const Routes = () => (
  <MainLayout>
    <ScrollToTop>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/social-auth' component={SocialAuth} />
        <Route exact path='/reset-password' component={PasswordResetPresentation} />
        <Route exact path='/update-password' component={UpdatePasswordPresentation} />
        <ProtectedRoute exact path='/:username' component={Profile} />
        <ProtectedRoute exact path='/:username/edit' component={ProfileEdit} />
        <Route component={NotFound} />
      </Switch>
      <ReduxToastr />
    </ScrollToTop>
  </MainLayout>
);

export default Routes;
