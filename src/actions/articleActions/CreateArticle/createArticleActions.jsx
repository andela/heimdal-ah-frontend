import instance from '../../../config/http';
import { ACTIONS } from '../../actionTypes';
import ActionResponse from '../../actionResponse';

/**
 * @description - createActions for new article
 * @param {props} status - post request
 * @returns {component} Component
 */
export function createArticleAction(articleDetails) {
  // eslint-disable-next-line func-names
  return function (dispatch) {
    instance.post('https://heimdal-ah-staging.herokuapp.com/api/v1/articles', { ...articleDetails })
      .then((response) => {
        const payload = {
          message: 'Article successfully created', status: 201,
        };
        if (response.status === 201) {
          dispatch(ActionResponse(ACTIONS.CREATE_ARTICLE, payload));
          dispatch(ActionResponse(ACTIONS.CREATE_ARTICLE_STATE, null));
        }
      }).catch((error) => {
        if (error.response.status === 400) {
          dispatch(ActionResponse(ACTIONS.CREATE_ARTICLE_ERROR, { message: 'No Field Should Be Left Empty', status: 400 }));
          dispatch(ActionResponse(ACTIONS.CREATE_ARTICLE_STATE, ''));
        } else if (error.response.status === 500) {
          dispatch(ActionResponse(ACTIONS.CREATE_ARTICLE_ERROR, { message: 'Sever Error', status: 500 }));
          dispatch(ActionResponse(ACTIONS.CREATE_ARTICLE_STATE, ''));
        }
      });
  };
}
