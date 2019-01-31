import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
// import socialAuthReducer from './SocialAuthReducer/socialAuthReducer';
import CommentReducer from './CommentReducer/CommentReducer';
import ReplyReducer from './ReplyReducer/ReplyReducer';
import authReducer from './authReducer';
import {
  resetPassword,
  updatePassword,
  articleRating,
  getarticleRating,
} from './index';
import errorsReducer from './errorsReducer';
import profileReducer from './profile/profileReducer';

const rootReducer = combineReducers({
  resetpassword: resetPassword,
  updatepassword: updatePassword,
  toastr: toastrReducer,
  comment: CommentReducer,
  replies: ReplyReducer,
  articlerating: articleRating,
  getarticlerating: getarticleRating,
  errors: errorsReducer,
  auth: authReducer,
  profile: profileReducer,
});

export default rootReducer;
