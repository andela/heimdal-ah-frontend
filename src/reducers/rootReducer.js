import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
// import socialAuthReducer from './SocialAuthReducer/socialAuthReducer';
import { resetPassword, updatePassword } from './index';
import CommentReducer from './CommentReducer/CommentReducer';
import ReplyReducer from './ReplyReducer/ReplyReducer';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';

const rootReducer = combineReducers({
  resetpassword: resetPassword,
  // auth: socialAuthReducer,
  updatepassword: updatePassword,
  toastr: toastrReducer,
  comment: CommentReducer,
  replies: ReplyReducer,
  errors: errorsReducer,
  auth: authReducer,
});

export default rootReducer;
