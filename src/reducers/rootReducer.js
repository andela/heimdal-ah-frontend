import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import {
  resetPassword, updatePassword, profile, articleRating, getarticleRating,
} from './index';
import authReducer from './AuthReducer/auth';
import errorsReducer from './errorsReducer';
import articleReducer from './Articles/articleReducer';

const rootReducer = combineReducers({
  resetpassword: resetPassword,
  updatepassword: updatePassword,
  toastr: toastrReducer,
  profile,
  articlerating: articleRating,
  getarticlerating: getarticleRating,
  errors: errorsReducer,
  auth: authReducer,
  articles: articleReducer,

});

export default rootReducer;
