import { combineReducers } from 'redux';
import { reducer as toastrReducer } from 'react-redux-toastr';
import CommentReducer from './CommentReducer/CommentReducer';
import ReplyReducer from './ReplyReducer/ReplyReducer';
import authReducer from './authReducer';
import errorsReducer from './errorsReducer';
import CommentHistoryReducer from './CommentHistoryReducer/CommentHistoryReducer';
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
import articleReducer from './Article/articleReducer';
import profileReducer from './profile/profileReducer';
import homeReducer from './homeReducer';
import loaderReducer from './loaderReducer';
import taggedArticlesReducer from './taggedArticles';


const rootReducer = combineReducers({
  createArticleReducer,
  resetpassword: resetPassword,
  updatepassword: updatePassword,
  toastr: toastrReducer,
  comment: CommentReducer,
  replies: ReplyReducer,
  errors: errorsReducer,
  auth: authReducer,
  commentHistory: CommentHistoryReducer,
  articlerating: articleRating,
  getarticlerating: getarticleRating,
  searcharticlesbyauthor: searchArticlesByAuthorReducer,
  searcharticlesbytitle: searchArticlesByTitleReducer,
  searcharticlesbytags: searchArticlesByTagsReducer,
  getArticlesById: getArticlesByIdReducer,
  updateArticles: updateArticlesReducer,
  loader: loaderReducer,
  articles: articleReducer,
  profile: profileReducer,
  home: homeReducer,
  unpublishedarticle: unPublishedArticle,
  getallbookmarks: getAllBookmarksReducer,
  createbookmarks: createBookmarksReducer,
  deleteBookmarks: deleteBookmarksReducer,
  taggedArticles: taggedArticlesReducer,
});

export default rootReducer;
