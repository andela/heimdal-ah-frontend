/* eslint-disable func-names */
import { ACTIONS } from '../actionTypes';
import ActionResponse from '../actionResponse';
import instance from '../../config/http';
/**
 * Set Loading action which shows before comments are fetched
 * @return {function} retuns the action type
 */
export function setDataLoading() {
  return {
    type: ACTIONS.DATA_LOADING_REPLY,
  };
}
/**
 * Get an Article Comment(s) action using axios and dispatches the data
 * @param {integer} identifer - The article id
 * @param {object} response - the data return from after a successful axios request
 * @param {object} error - If there is an error from the request
 * @return {function} dispatches either the response or the error.
 */
export function getCommentReplies(commentId) {
  return function (dispatch) {
    dispatch(setDataLoading());
    return instance
      .get(`/comments/${commentId}/reply`)
      .then((response) => {
        const { commentReplies: replies } = response.data;
        dispatch(ActionResponse(ACTIONS.GET_COMMENT_REPLY, { [commentId]: replies }));
      })
      .catch((error) => {
        dispatch(ActionResponse(ACTIONS.GET_ERRORS, error.response));
      });
  };
}

/**
 * Post an Article Comment(s) action using axios and dispatches the data
 * @param {integer} identifer - The article id
 * @param {object} response - the data return from after a successful axios request
 * @param {object} error - If there is an error from the request
 * @return {function} dispatches either the response or the error.
 */
export function postCommentReplies(commentId, data, imageUrl) {
  const { content } = data;
  return function (dispatch) {
    dispatch(setDataLoading());
    return instance
      .post(`/comments/${commentId}/reply`, { content })
      .then((response) => {
        const { replies } = response.data;
        const profile = { image: imageUrl };
        const reply = { ...replies, profile };
        dispatch(ActionResponse(ACTIONS.POST_COMMENT_REPLY, { commentId, reply }));
      })
      .catch((error) => {
        if (error.response.status === 400) {
          dispatch(ActionResponse(ACTIONS.GET_ERRORS, error.response));
        }
        dispatch(ActionResponse(ACTIONS.GET_ERRORS, 'Server error', error.response));
      });
  };
}

/**
 * Post an Article Comment(s) action using axios and dispatches the data
 * @param {object} commentId - The comment Id
 * @param {object} response - the data return from after a successful axios request
 * @param {object} error - If there is an error from the request
 * @return {function} dispatches either the response or the error.
 */
export function deleteCommentReplies(commentId, replyId) {
  return function (dispatch) {
    dispatch(setDataLoading());
    return instance.delete(`/comments/${commentId}/reply/${replyId}`)
      .then((response) => {
        dispatch(ActionResponse(ACTIONS.ARCHIVE_COMMENT_REPLY,
          { message: response.data, commentId, replyId }));
      }).catch((error) => {
        dispatch(ActionResponse(ACTIONS.GET_ERRORS, error.response));
      });
  };
}
