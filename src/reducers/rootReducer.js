import { combineReducers } from 'redux';
import { resetPassword, updatePassword } from './index';

const rootReducer = combineReducers({
  resetpassword: resetPassword,
  updatepassword: updatePassword,
});

export default rootReducer;
