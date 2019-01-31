import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import CommentReducer from './CommentReducer/CommentReducer';
import ReplyReducer from './ReplyReducer/ReplyReducer';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';
import CommentHistoryReducer from './CommentHistoryReducer/CommentHistoryReducer';
import {
  resetPassword,
  updatePassword,
  articleRating,
  getarticleRating,
} from './index';
import profileReducer from './profile/profileReducer';

const rootReducer = combineReducers({
  resetpassword: resetPassword,
  updatepassword: updatePassword,
  toastr: toastrReducer,
  comment: CommentReducer,
  replies: ReplyReducer,
  errors: errorsReducer,
  auth: authReducer,
  commentHistory: CommentHistoryReducer,
  articlerating: articleRating,
  getarticlerating: getarticleRating,
  profile: profileReducer,
});

export default rootReducer;
