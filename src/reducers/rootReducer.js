import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { createArticleReducer, resetPassword, updatePassword } from './index';
import socialAuthReducer from './SocialAuthReducer/socialAuthReducer';
import getArticlesByIdReducer from './articlesReducers/getArticlesByIdReducer';
import updateArticlesReducer from './articlesReducers/updateArticlesReducer';

const rootReducer = combineReducers({
  createArticleReducer,
  resetpassword: resetPassword,
  auth: socialAuthReducer,
  updatepassword: updatePassword,
  toastr: toastrReducer,
  getArticlesById: getArticlesByIdReducer,
  updateArticles: updateArticlesReducer,
});

export default rootReducer;
