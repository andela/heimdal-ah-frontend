import { combineReducers } from 'redux';
// <<<<<<< HEAD
// import authReducer from './authReducer';
// import errorsReducer from './errorsReducer';

// const appReducer = combineReducers({ auth: authReducer, errors: errorsReducer });

// =======
import { reducer as toastrReducer } from 'react-redux-toastr';
// import socialAuthReducer from './SocialAuthReducer/socialAuthReducer';
import { resetPassword, updatePassword } from './index';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';

const rootReducer = combineReducers({
  resetpassword: resetPassword,
  // auth: socialAuthReducer,
  updatepassword: updatePassword,
  toastr: toastrReducer,
  errors: errorsReducer,
  auth: authReducer,
});
// >>>>>>> develop

export default rootReducer;
