import instance from '../../config/http';
import { ACTIONS } from '../actionTypes';
import ActionResponse from '../actionResponse';

const getArticleById = identifier => dispatch => instance.get(`/articles/${identifier}`)
  .then((response) => {
    if (response.status === 200) {
      dispatch(ActionResponse(ACTIONS.GET_ARTICLES_BY_ID_SUCCESS, response.data.article));
    }
  }).catch((error) => {
    dispatch(ActionResponse(ACTIONS.GET_ARTICLES_BY_ID_ERROR, 'Server Error', error));
  });
export default getArticleById;
