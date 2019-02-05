import instance from '../../../config/http';
import { ACTIONS } from '../../actionTypes';
import ActionResponse from '../../actionResponse';


const deleteBookmarkAction = identifier => dispatch => instance.delete(`articles/bookmarks/${identifier}`)
  .then((response) => {
    if (response.status === 200) {
      dispatch(ActionResponse(ACTIONS.DELETE_BOOKMARKS, response.data));
    }
  }).catch((error) => {
    dispatch(ActionResponse(ACTIONS.DELETE_BOOKMARKS_ERROR, 'Server Error', error));
  });
export default deleteBookmarkAction;
