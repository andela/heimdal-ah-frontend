import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { createArticleReducer, resetPassword, updatePassword } from './index';

const rootReducer = combineReducers({
  createArticleReducer,
  resetpassword: resetPassword,
  updatepassword: updatePassword,
  toastr: toastrReducer,
});

export default rootReducer;
