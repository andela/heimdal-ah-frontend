import instance from '../../../config/http';
import { ACTIONS } from '../../actionTypes';
import ActionResponse from '../../actionResponse';


const createBookmarkAction = (identifier, toggleBookmark) => dispatch => instance.post(`articles/${identifier}/bookmarks`)
  .then((response) => {
    if (response.status === 200) {
      dispatch(ActionResponse(ACTIONS.CREATE_BOOKMARKS, response.data));
      toggleBookmark();
    }
  }).catch((error) => {
    dispatch(ActionResponse(ACTIONS.CREATE_BOOKMARKS_ERROR, 'Server Error', error));
  });
export default createBookmarkAction;
