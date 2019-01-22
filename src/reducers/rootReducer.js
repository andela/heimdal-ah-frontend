import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';

const appReducer = combineReducers({ auth: authReducer, errors: errorsReducer });

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
