import { combineReducers } from 'redux';
import authReducer from './auth';

const appReducer = combineReducers({ auth: authReducer });

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
