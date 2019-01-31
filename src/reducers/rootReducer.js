import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import getArticlesByIdReducer from './articlesReducers/getArticlesByIdReducer';
import updateArticlesReducer from './articlesReducers/updateArticlesReducer';
import {
  createArticleReducer,
  resetPassword,
  updatePassword,
  articleRating,
  getarticleRating,
} from './index';
import authReducer from './AuthReducer/auth';
import errorsReducer from './errorsReducer';
import profileReducer from './profile/profileReducer';

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
  profile: profileReducer,
});

export default rootReducer;
