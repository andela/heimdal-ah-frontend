import { combineReducers } from 'redux';
// import { reducer as toastrReducer } from 'react-redux-toastr';
import { createArticleReducer } from './index';

const rootReducer = combineReducers({
  createArticleReducer,
});

export default rootReducer;
