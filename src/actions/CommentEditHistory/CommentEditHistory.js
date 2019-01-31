import { ACTIONS } from '../actionTypes';
import axiosInstance from '../../config/http';

export const getCommentEditHistory = history => ({
  type: ACTIONS.GET_COMMENT_EDIT_HISTORY,
  history,
});

export const getCommentEditHistoryFail = error => ({
  type: ACTIONS.GET_COMMENT_EDIT_HISTORY_FAIL,
  error,
});

const fetchCommentEditHistory = (articleId, commentId) => dispatch => axiosInstance
  .get(`/articles/${articleId}/comments/${commentId}`)
  .then((res) => {
    dispatch(getCommentEditHistory(res.data));
  }).catch((error) => {
    dispatch(getCommentEditHistoryFail(error.response.data));
  });

export default fetchCommentEditHistory;
