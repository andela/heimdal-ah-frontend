import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import {
  resetPassword, updatePassword, articleRating, getarticleRating,
} from './index';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';
import profileReducer from './profile/profileReducer';
import homeReducer from './homeReducer';

const rootReducer = combineReducers({
  resetpassword: resetPassword,
  updatepassword: updatePassword,
  toastr: toastrReducer,
  articlerating: articleRating,
  getarticlerating: getarticleRating,
  errors: errorsReducer,
  auth: authReducer,
  profile: profileReducer,
  home: homeReducer,
});

export default rootReducer;
