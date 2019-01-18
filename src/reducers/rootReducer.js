import { combineReducers } from 'redux';
import ResetPassword from './index';

const rootReducer = combineReducers({
  resetpassword: ResetPassword,
});

export default rootReducer;
