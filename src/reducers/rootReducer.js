import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import socialAuthReducer from './SocialAuthReducer/socialAuthReducer';
import {
  resetPassword,
  updatePassword,
  articleRating,
  getarticleRating,
} from './index';

const rootReducer = combineReducers({
  resetpassword: resetPassword,
  auth: socialAuthReducer,
  updatepassword: updatePassword,
  toastr: toastrReducer,
  articlerating: articleRating,
  getarticlerating: getarticleRating,
});

export default rootReducer;
