import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import LoginPage from '../component/Pages/LoginPage.jsx';
import NotFound from '../component/Pages/NotFound.jsx';
import MainLayout from '../component/Layout/MainLayout/MainLayout';
import HomePage from '../component/Pages/HomePage.jsx';
import SocialAuth from '../component/ui/SocialAuth/SocialAuth';
import PasswordResetPresentation from '../component/Pages/PasswordResetPage/PasswordResetPresentation';
import UpdatePasswordPresentation from '../component/Pages/PasswordResetPage/UpdatePasswordPresentation';
import UpdateArticles from '../component/Pages/articles/UpdateArticles/UpdateArticles.jsx';


const Routes = () => (
  <MainLayout>
    <Fragment>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/social-auth' component={SocialAuth} />
        <Route exact path='/login' component={LoginPage} />
        <Route exact path='/articles/update' component={UpdateArticles} />
        <Route exact path='/resetpassword' component={PasswordResetPresentation} />
        <Route exact path='/updatepassword' component={UpdatePasswordPresentation} />
        <Route component={NotFound} />
      </Switch>
      <ReduxToastr />
    </Fragment>
  </MainLayout>
);

export default Routes;
