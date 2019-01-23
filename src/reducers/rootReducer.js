import { combineReducers } from 'redux';
import socialAuthReducer from './socialAuthReducer';

export default combineReducers({
  auth: socialAuthReducer,
});
