import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { resetPassword, updatePassword, AllFollowReducer } from './index';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';

const rootReducer = combineReducers({
  resetpassword: resetPassword,
  updatepassword: updatePassword,
  toastr: toastrReducer,
  followers: AllFollowReducer,
  errors: errorsReducer,
  auth: authReducer,
});

export default rootReducer;
