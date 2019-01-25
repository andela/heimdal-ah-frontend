import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { resetPassword, updatePassword } from './index';
import getArticlesByIdReducer from './articlesReducers/getArticlesByIdReducer';
import updateArticlesReducer from './articlesReducers/updateArticlesReducer';

const rootReducer = combineReducers({
  resetpassword: resetPassword,
  updatepassword: updatePassword,
  toastr: toastrReducer,
  getArticlesById: getArticlesByIdReducer,
  updateArticles: updateArticlesReducer,
});

export default rootReducer;
