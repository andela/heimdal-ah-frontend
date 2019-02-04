import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import getArticlesByIdReducer from './articlesReducers/getArticlesByIdReducer';
import updateArticlesReducer from './articlesReducers/updateArticlesReducer';
import {
  resetPassword,
  updatePassword,
  searchArticlesByAuthorReducer,
  searchArticlesByTitleReducer,
  searchArticlesByTagsReducer,
  articleRating,
  getarticleRating,
  createArticleReducer,
  unPublishedArticle,
  getAllBookmarksReducer,
  createBookmarksReducer,
  deleteBookmarksReducer,
} from './index';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';
import articleReducer from './Article/articleReducer';
import profileReducer from './profile/profileReducer';
import loaderReducer from './loaderReducer';


const rootReducer = combineReducers({
  createArticleReducer,
  resetpassword: resetPassword,
  updatepassword: updatePassword,
  toastr: toastrReducer,
  searcharticlesbyauthor: searchArticlesByAuthorReducer,
  searcharticlesbytitle: searchArticlesByTitleReducer,
  searcharticlesbytags: searchArticlesByTagsReducer,
  getArticlesById: getArticlesByIdReducer,
  updateArticles: updateArticlesReducer,
  articlerating: articleRating,
  getarticlerating: getarticleRating,
  errors: errorsReducer,
  auth: authReducer,
  loader: loaderReducer,
  articles: articleReducer,
  profile: profileReducer,
  unpublishedarticle: unPublishedArticle,
  getallbookmarks: getAllBookmarksReducer,
  createbookmarks: createBookmarksReducer,
  deleteBookmarks: deleteBookmarksReducer,
});

export default rootReducer;
