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
export function getArticlesByPage(size, offset) {
  return function (dispatch) {
    dispatch({
      type: ACTIONS.SET_LOADER,
    });
    return instance.get(`/articles?size=${size}&offset=${offset}`)
      .then((response) => {
        // const { articles } = response.data;
        dispatch(ActionResponse(ACTIONS.GET_ARTICLES_BY_PAGE, response.data));
        dispatch({
          type: ACTIONS.SET_LOADER,
        });
      }).catch((error) => {
        dispatch(ActionResponse(ACTIONS.GET_ARTICLES_BY_PAGE, 'Server error', error));
      });
  };
}
