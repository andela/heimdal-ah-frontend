import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import getArticlesByIdReducer from './articlesReducers/getArticlesByIdReducer';
import updateArticlesReducer from './articlesReducers/updateArticlesReducer';
import {
  createArticleReducer,
  unPublishedArticle,
  resetPassword,
  updatePassword,
  articleRating,
  getarticleRating,
} from './index';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';
import articleReducer from './Article/articleReducer';
import profileReducer from './profile/profileReducer';
import loaderReducer from './loaderReducer';

const rootReducer = combineReducers({
  createArticleReducer,
  resetpassword: resetPassword,
  updatepassword: updatePassword,
  toastr: toastrReducer,
  getArticlesById: getArticlesByIdReducer,
  updateArticles: updateArticlesReducer,
  articlerating: articleRating,
  getarticlerating: getarticleRating,
  errors: errorsReducer,
  auth: authReducer,
  loader: loaderReducer,
  articles: articleReducer,
  profile: profileReducer,
  unpublishedarticle: unPublishedArticle,
});

export default rootReducer;
