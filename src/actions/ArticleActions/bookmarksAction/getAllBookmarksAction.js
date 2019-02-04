import instance from '../../../config/http';
import { ACTIONS } from '../../actionTypes';
import ActionResponse from '../../actionResponse';


const searchBookmarksActions = () => dispatch => instance.get('articles/bookmarks/all')
  .then((response) => {
    if (response.status === 200) {
      dispatch(ActionResponse(ACTIONS.GET_ALL_BOOKMARKS, response.data));
    }
  }).catch((error) => {
    dispatch(ActionResponse(ACTIONS.GET_ALL_BOOKMARKS_ERRORGET_ALL_BOOKMARKS_ERRORGET_ALL_BOOKMARKS_ERROR, 'Server Error', error));
  });
export default searchBookmarksActions;
