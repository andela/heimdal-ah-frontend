import { combineReducers } from 'redux';
import { ResetPassword, UpdatePassword } from './index';

const rootReducer = combineReducers({
  resetpassword: ResetPassword,
  updatepassword: UpdatePassword,
});

export default rootReducer;
