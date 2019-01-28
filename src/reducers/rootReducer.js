import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import socialAuthReducer from './SocialAuthReducer/socialAuthReducer';
import {
  resetPassword,
  updatePassword,
  searchArticlesByAuthorReducer,
  searchArticlesByTitleReducer,
  searchArticlesByTagsReducer,
} from './index';

const rootReducer = combineReducers({
  resetpassword: resetPassword,
  auth: socialAuthReducer,
  updatepassword: updatePassword,
  toastr: toastrReducer,
  searcharticlesbyauthor: searchArticlesByAuthorReducer,
  searcharticlesbytitle: searchArticlesByTitleReducer,
  searcharticlesbytags: searchArticlesByTagsReducer,
});

export default rootReducer;
