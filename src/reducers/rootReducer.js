import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { resetPassword, updatePassword } from './index';
import authReducer from './auth';

const rootReducer = combineReducers({
  resetpassword: resetPassword,
  updatepassword: updatePassword,
  toastr: toastrReducer,
  auth: authReducer,
});

export default rootReducer;
