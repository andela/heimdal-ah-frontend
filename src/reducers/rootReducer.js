import { combineReducers } from 'redux';
import modal from './modal';

const appReducer = combineReducers({ modal });

// const initialState = appReducer({}, {});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;
