import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import ReduxToastr from 'react-redux-toastr';
import NotFound from '../component/Pages/NotFound.jsx';
import MainLayout from '../component/Layout/MainLayout/MainLayout';
import CreateArticle from '../component/Pages/articles/createArticle/CreateArticles';
import SingleArticlePage from '../component/Pages/articles/ReadSingleArticle/ReadSingleArticle';
import HomePage from '../component/Pages/HomePage.jsx';
import SocialAuth from '../component/ui/SocialAuth/SocialAuth';
import PasswordResetPresentation from '../component/Pages/PasswordResetPage/PasswordResetPresentation';
import UpdatePasswordPresentation from '../component/Pages/PasswordResetPage/UpdatePasswordPresentation';
import UpdateArticlesPresentation from '../component/Pages/articles/UpdateArticles/UpdateArticlesPresentation.jsx';
import ReadSingleArticleError from '../component/Pages/articles/ReadSingleArticle/ReadSingleArticleError.jsx';


const Routes = () => (
  <MainLayout>
    <Fragment>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/social-auth' component={SocialAuth} />
        <Route exact path='/articles/create' component={CreateArticle} />
        <Route exact path='/:username/articles/:slug' component={SingleArticlePage} />
        <Route exact path='/articles/:slug' component={ReadSingleArticleError} />
        <Route exact path='/articles/update' component={UpdateArticlesPresentation} />
        <Route exact path='/resetpassword' component={PasswordResetPresentation} />
        <Route exact path='/updatepassword' component={UpdatePasswordPresentation} />
        <Route exact path='/reset-password' component={PasswordResetPresentation} />
        <Route exact path='/update-password' component={UpdatePasswordPresentation} />
        <Route component={NotFound} />
      </Switch>
      <ReduxToastr />
    </Fragment>
  </MainLayout>
);

export default Routes;
