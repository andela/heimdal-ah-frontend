import { combineReducers } from 'redux';
// <<<<<<< HEAD
// import authReducer from './authReducer';
// import errorsReducer from './errorsReducer';

import { reducer as toastrReducer } from 'react-redux-toastr';
import { resetPassword, updatePassword } from './index';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';
import loaderReducer from './loaderReducer';

const rootReducer = combineReducers({
  resetpassword: resetPassword,
  updatepassword: updatePassword,
  toastr: toastrReducer,
  errors: errorsReducer,
  auth: authReducer,
  loader: loaderReducer,
});

export default rootReducer;
