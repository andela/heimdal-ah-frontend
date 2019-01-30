import { combineReducers } from 'redux';
// <<<<<<< HEAD
// import authReducer from './authReducer';
// import errorsReducer from './errorsReducer';

// const appReducer = combineReducers({ auth: authReducer, errors: errorsReducer });

// =======
import { reducer as toastrReducer } from 'react-redux-toastr';
import { resetPassword, updatePassword } from './index';
import authReducer from './AuthReducer/auth';
import errorsReducer from './errorsReducer';

const rootReducer = combineReducers({
  resetpassword: resetPassword,
  updatepassword: updatePassword,
  toastr: toastrReducer,
  errors: errorsReducer,
  auth: authReducer,
});

export default rootReducer;
