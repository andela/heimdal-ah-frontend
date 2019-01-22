import { combineReducers } from 'redux';
import followUserReducer from './followUserReducer';
import profileReducer from './profileReducer';

const rootReducer = combineReducers({
  followUser: followUserReducer,
  profile: profileReducer,
});

export default rootReducer;
