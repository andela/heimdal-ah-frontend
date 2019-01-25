import instance from '../../config/http';
import { ACTIONS } from '../actionTypes';
import ActionResponse from '../actionResponse';


const updateArticle = (title, body, description, identifier) => dispatch => instance.put(`/articles/${identifier}`, {
  title,
  body,
  description,
  headers: {
    'access-token': localStorage.getItem('access-token'),
  },
})
  .then((response) => {
    if (response.data.status === 200) {
      dispatch(ActionResponse(ACTIONS.UPDATE_ARTICLES_SUCCESS, response.data.article));
      dispatch(ActionResponse(ACTIONS.UPDATE_ARTICLES_RESET_STATE));
    }
  }).catch((error) => {
    dispatch(ActionResponse(ACTIONS.UPDATE_ARTICLES_ERROR, 'Server Error', error));
    dispatch(ActionResponse(ACTIONS.UPDATE_ARTICLES_RESET_STATE));
  });

export default updateArticle;
