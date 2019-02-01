import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
// import socialAuthReducer from './SocialAuthReducer/socialAuthReducer';
import CommentReducer from './CommentReducer/CommentReducer';
import ReplyReducer from './ReplyReducer/ReplyReducer';
import authReducer from './authReducer';
import getArticlesByIdReducer from './articlesReducers/getArticlesByIdReducer';
import updateArticlesReducer from './articlesReducers/updateArticlesReducer';
import {
  resetPassword,
  updatePassword,
  searchArticlesByAuthorReducer,
  searchArticlesByTitleReducer,
  searchArticlesByTagsReducer,
  articleRating,
  getarticleRating,
  createArticleReducer,
  unPublishedArticle,
} from './index';
import errorsReducer from './errorsReducer';
import articleReducer from './Article/articleReducer';
import profileReducer from './profile/profileReducer';
import loaderReducer from './loaderReducer';

const rootReducer = combineReducers({
  createArticleReducer,
  resetpassword: resetPassword,
  updatepassword: updatePassword,
  toastr: toastrReducer,
  comment: CommentReducer,
  replies: ReplyReducer,
  searcharticlesbyauthor: searchArticlesByAuthorReducer,
  searcharticlesbytitle: searchArticlesByTitleReducer,
  searcharticlesbytags: searchArticlesByTagsReducer,
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
