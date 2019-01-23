import { combineReducers } from 'redux';
import socialAuthReducer from './SocialAuthReducer/socialAuthReducer';

export default combineReducers({
  auth: socialAuthReducer,
});
