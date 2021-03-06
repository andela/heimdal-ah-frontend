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
export function getUnpublishedArticles() {
  return function (dispatch) {
    dispatch({
      type: ACTIONS.SET_LOADER,
    });
    return instance.get('/articles/unpublished')
      .then((response) => {
        const { articles } = response.data;
        dispatch(ActionResponse(ACTIONS.GET_ALL_UNPUBLISHED_ARTICLES, articles));
        dispatch({
          type: ACTIONS.SET_LOADER,
        });
      }).catch((error) => {
        dispatch(ActionResponse(ACTIONS.GET_ALL_UNPUBLISHED_ARTICLES, 'Server error', error));
      });
  };
}
