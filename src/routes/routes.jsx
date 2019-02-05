import React from 'react';
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
import searchView from '../component/ui/searchForm/searchView.jsx';
import UpdateArticlesPresentation from '../component/Pages/articles/UpdateArticles/UpdateArticlesPresentation.jsx';
import ReadSingleArticleError from '../component/Pages/articles/ReadSingleArticle/ReadSingleArticleError.jsx';
import Profile from '../component/Pages/Profile/Profile';
import ProfileEdit from '../component/Pages/ProfileEdit/ProfileEdit';
import Articles from '../component/Pages/Article/ArticleListPage';
import ProtectedRoute from './ProtectedRoute';
import ScrollToTop from './ScrollToTop.jsx';
import BookmarkList from '../component/Pages/articles/bookmarksArticles/BookmarksList';


const Routes = () => (
  <MainLayout>
    <ScrollToTop>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/social-auth' component={SocialAuth} />
        <Route exact path='/resetpassword' component={PasswordResetPresentation} />
        <Route exact path='/updatepassword' component={UpdatePasswordPresentation} />
        <Route exact path='/search' component={searchView} />
        <Route exact path='/articles/create' component={CreateArticle} />
        <Route exact path='/:username/articles/:slug' component={SingleArticlePage} />
        <Route exact path='/bookmarks' component={BookmarkList} />
        <Route exact path='/articles/:slug' component={ReadSingleArticleError} />
        <Route exact path='/articles/update' component={UpdateArticlesPresentation} />
        <Route exact path='/resetpassword' component={PasswordResetPresentation} />
        <Route exact path='/updatepassword' component={UpdatePasswordPresentation} />
        <Route exact path='/reset-password' component={PasswordResetPresentation} />
        <Route exact path='/update-password' component={UpdatePasswordPresentation} />
        <Route exact path='/reset-password' component={PasswordResetPresentation} />
        <Route exact path='/update-password' component={UpdatePasswordPresentation} />
        <Route exact path='/all-stories' component={Articles} />
        <ProtectedRoute exact path='/:username' component={Profile} />
        <ProtectedRoute exact path='/:username/edit' component={ProfileEdit} />
        <Route component={NotFound} />
      </Switch>
      <ReduxToastr />
    </ScrollToTop>
  </MainLayout>
);

export default Routes;
