import { ACTIONS } from '../actionTypes';
import instance from '../../config/http';

export const getArticleComments = comments => ({
  type: ACTIONS.GET_ARTICLE_COMMENTS,
  comments,
});

export const getArticleCommentsError = comments => ({
  type: ACTIONS.GET_ARTICLE_COMMENTS_FAIL,
  comments,
});

const fetchComments = () => dispatch => instance.post('/article/2/comments')
  .then(
    (res) => {
      const { data } = res;
      dispatch(getArticleComments(data));
    },
  ).catch((error) => {
    dispatch(getArticleCommentsError(error.response));
  });

export default fetchComments;
