import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
// import socialAuthReducer from './SocialAuthReducer/socialAuthReducer';
import CommentReducer from './CommentReducer/CommentReducer';
import ReplyReducer from './ReplyReducer/ReplyReducer';
import authReducer from './authReducer';
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
import errorsReducer from './errorsReducer';
import articleReducer from './Article/articleReducer';
import profileReducer from './profile/profileReducer';

const rootReducer = combineReducers({
  createArticleReducer,
  resetpassword: resetPassword,
  updatepassword: updatePassword,
  toastr: toastrReducer,
  comment: CommentReducer,
  replies: ReplyReducer,
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
