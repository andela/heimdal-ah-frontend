import { combineReducers } from 'redux';
import followUserReducer from './followUserReducer';

const rootReducer = combineReducers({
  followUser: followUserReducer,
});

export default rootReducer;
