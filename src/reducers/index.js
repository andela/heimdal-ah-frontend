import createArticleReducer from './articlesReducers/createAriticleReducer';
import resetPassword from './PasswordReset/resetPasswordReducer';
import updatePassword from './PasswordReset/updatePasswordReducer';
import searchArticlesByAuthorReducer from './SearchArticles/searchArticlesByAuthorReducer';
import searchArticlesByTitleReducer from './SearchArticles/searchArticlesByTitleReducer';
import searchArticlesByTagsReducer from './SearchArticles/searchArticlesByTagsReducer';
import profile from './profile/profileReducer';
import articles from './Article/articleReducer';
import articleRating from './ArticlesRating/articlesRatingReducer';
import getarticleRating from './ArticlesRating/getArticlesRatingReducer';
import unPublishedArticle from './Article/unpublishedArticleReducer';


export {
  createArticleReducer,
  resetPassword,
  updatePassword,
  searchArticlesByAuthorReducer,
  searchArticlesByTitleReducer,
  searchArticlesByTagsReducer,
  profile,
  articles,
  articleRating,
  getarticleRating,
  unPublishedArticle,
};
