import createArticleReducer from './articlesReducers/createAriticleReducer';
import resetPassword from './PasswordReset/resetPasswordReducer';
import updatePassword from './PasswordReset/updatePasswordReducer';
import profile from './profile/profileReducer';
import articles from './Article/articleReducer';
import articleRating from './ArticlesRating/articlesRatingReducer';
import getarticleRating from './ArticlesRating/getArticlesRatingReducer';


export {
  createArticleReducer,
  resetPassword,
  updatePassword,
  profile,
  articles,
  articleRating,
  getarticleRating,
};
