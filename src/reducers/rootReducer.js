import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import socialAuthReducer from './SocialAuthReducer/socialAuthReducer';
import { resetPassword, updatePassword, AllFollowReducer } from './index';

const rootReducer = combineReducers({
  resetpassword: resetPassword,
  auth: socialAuthReducer,
  updatepassword: updatePassword,
  toastr: toastrReducer,
  followers: AllFollowReducer,
});

export default rootReducer;
