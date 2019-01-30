import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import {
  resetPassword,
  updatePassword,
  articleRating,
  getarticleRating,
} from './index';
import authReducer from './AuthReducer/auth';
import errorsReducer from './errorsReducer';

const rootReducer = combineReducers({
  resetpassword: resetPassword,
  updatepassword: updatePassword,
  toastr: toastrReducer,
  articlerating: articleRating,
  getarticlerating: getarticleRating,
  errors: errorsReducer,
  auth: authReducer,
});

export default rootReducer;
