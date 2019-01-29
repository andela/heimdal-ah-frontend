/* eslint-disable func-names */
import instance from '../../config/http';
import { ACTIONS } from '../actionTypes';
import ActionResponse from '../actionResponse';

/**
 * get articles function
 * @returns {object} dispatch
 * @returns {object} axios instance
 * @returns {object} article object
 */
export function getArticles() {
  return function (dispatch) {
    return instance.get('/articles')
      .then((response) => {
        const { articles } = response.data;
        dispatch(ActionResponse(ACTIONS.GET_ALL_ARTICLES, articles));
      }).catch((error) => {
        dispatch(ActionResponse(ACTIONS.GET_ALL_ARTICLES, 'Server error', error));
      });
  };
}
