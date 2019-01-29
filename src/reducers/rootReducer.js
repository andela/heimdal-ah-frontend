import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { resetPassword, updatePassword, profile } from './index';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';
import articleReducer from './Articles/articleReducer';

const rootReducer = combineReducers({
  resetpassword: resetPassword,
  updatepassword: updatePassword,
  toastr: toastrReducer,
  profile,
  errors: errorsReducer,
  auth: authReducer,
  articles: articleReducer,

});

export default rootReducer;
