import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import getArticlesByIdReducer from './articlesReducers/getArticlesByIdReducer';
import updateArticlesReducer from './articlesReducers/updateArticlesReducer';
import {
  createArticleReducer,
  unPublishedArticle,
  resetPassword,
  updatePassword,
  searchArticlesByAuthorReducer,
  searchArticlesByTitleReducer,
  searchArticlesByTagsReducer,
  articleRating,
  getarticleRating,
} from './index';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';
import articleReducer from './Article/articleReducer';
import profileReducer from './profile/profileReducer';

const rootReducer = combineReducers({
  createArticleReducer,
  resetpassword: resetPassword,
  updatepassword: updatePassword,
  toastr: toastrReducer,
  searcharticlesbyauthor: searchArticlesByAuthorReducer,
  searcharticlesbytitle: searchArticlesByTitleReducer,
  searcharticlesbytags: searchArticlesByTagsReducer,
  getArticlesById: getArticlesByIdReducer,
  updateArticles: updateArticlesReducer,
  articlerating: articleRating,
  getarticlerating: getarticleRating,
  errors: errorsReducer,
  auth: authReducer,
  articles: articleReducer,
  profile: profileReducer,
  unpublishedarticle: unPublishedArticle,
});

export default rootReducer;
