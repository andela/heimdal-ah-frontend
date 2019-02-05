import instance from '../../config/http';
import { ACTIONS } from '../actionTypes';
import ActionResponse from '../actionResponse';


export const getArticleById = identifier => dispatch => instance.get(`/articles/${identifier}`)
  .then((response) => {
    if (response.status === 200) {
      dispatch(ActionResponse(ACTIONS.GET_ARTICLES_BY_ID_SUCCESS, response.data.article));
    }
  }).catch((error) => {
    dispatch(ActionResponse(ACTIONS.GET_ARTICLES_BY_ID_ERROR, 'Server Error', error));
  });

export const glowArticle = userId => ({
  type: ACTIONS.LIKE_ARTICLE,
  userId,
});


export const glow = (articleId, userId) => dispatch => (
  instance
    .post(`/articles/${articleId}/likes`)
    .then(() => {
      dispatch(glowArticle(userId));
    })
);
