import { combineReducers } from 'redux';
import modal from './modal';
import authReducer from './authReducer';

const appReducer = combineReducers({ modal, auth: authReducer });

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
