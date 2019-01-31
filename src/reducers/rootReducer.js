import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { resetPassword, updatePassword } from './index';
import CommentReducer from './CommentReducer/CommentReducer';
import ReplyReducer from './ReplyReducer/ReplyReducer';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';
import CommentHistoryReducer from './CommentHistoryReducer/CommentHistoryReducer';

const rootReducer = combineReducers({
  resetpassword: resetPassword,
  updatepassword: updatePassword,
  toastr: toastrReducer,
  comment: CommentReducer,
  replies: ReplyReducer,
  errors: errorsReducer,
  auth: authReducer,
  history: CommentHistoryReducer,
});

export default rootReducer;
