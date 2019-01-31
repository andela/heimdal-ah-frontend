/* eslint-disable func-names */
import { ACTIONS } from '../actionTypes';
import ActionResponse from '../actionResponse';
import instance from '../../config/http';
/**
 * Set Loading action which shows before comments are fetched
 * @return {function} retuns the action type
 */

export function setDataLoading() {
  return function () {
    ActionResponse(ACTIONS.DATA_LOADING);
  };
}

/**
 * Get an Article Comment(s) action using axios and dispatches the data
 * @param {integer} identifer - The article id
 * @param {object} response - the data return from after a successful axios request
 * @param {object} error - If there is an error from the request
 * @return {function} dispatches either the response or the error.
 */

export function getArticleComment(identifier) {
  return function (dispatch) {
    dispatch(setDataLoading());
    instance.get(`/articles/${identifier}/comments`)
      .then((response) => {
        const { comment: comments } = response.data;
        dispatch(ActionResponse(ACTIONS.GET_ARTICLE_COMMENT, comments));
      }).catch(() => {
        dispatch(ActionResponse(ACTIONS.GET_ERRORS, {}));
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

export function postArticleComment(identifier, data, imageUrl) {
  const { content, isPrivate } = data;
  return function (dispatch) {
    dispatch(setDataLoading());
    instance.post(`/articles/${identifier}/comments`, { content, isPrivate })
      .then((response) => {
        let { comment } = response.data;
        const profile = { image: imageUrl };// store.state.auth.user;
        comment = { ...comment, profile };
        dispatch(ActionResponse(ACTIONS.POST_ARTICLE_COMMENT, comment));
      }).catch((error) => {
        dispatch(ActionResponse(ACTIONS.GET_ERRORS, error.data));
      });
  };
}


/**
 * Post an Article Comment(s) action using axios and dispatches the data
 * @param {integer} articleId - The article Id
 * @param {object} commentId - The comment Id
 * @param {object} response - the data return from after a successful axios request
 * @param {object} error - If there is an error from the request
 * @return {function} dispatches either the response or the error.
 */

export function deleteArticleComment(articleId, commentId) {
  return function (dispatch) {
    dispatch(setDataLoading());
    instance.delete(`/articles/${articleId}/comments/${commentId}`)
      .then((response) => {
        dispatch(ActionResponse(ACTIONS.ARCHIVE_COMMENT, { message: response.data, commentId }));
      }).catch((error) => {
        dispatch(ActionResponse(ACTIONS.GET_ERRORS, error.data));
      });
  };
}