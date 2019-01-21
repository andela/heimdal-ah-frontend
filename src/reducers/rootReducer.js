import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import { resetPassword, updatePassword } from './index';

const rootReducer = combineReducers({
  resetpassword: resetPassword,
  updatepassword: updatePassword,
  toastr: toastrReducer,
});

export default rootReducer;
