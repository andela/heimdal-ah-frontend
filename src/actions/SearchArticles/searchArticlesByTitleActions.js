import instance from '../../config/http';
import {
  ACTIONS,
} from '../actionTypes';
import ActionResponse from '../actionResponse';

const searchArticleByTitle = query => dispatch => instance.get(`/articles_search/title?title=${query}&offset=0&size=7`).then((response) => {
  if (response.status === 200) {
    dispatch(ActionResponse(ACTIONS.SEARCH_ARTICLES_BY_TITLE_SUCCESS, response.data.articles.rows));
    // dispatch(ActionResponse(ACTIONS.RESET_SEARCH_ARTICLES_STATE));
  } else if (response.status === 404) {
    dispatch(ActionResponse(ACTIONS.SEARCH_ARTICLES_BY_TITLE_FAILED, 'Sorry, no articles found matching your search parameters'));
    // dispatch(ActionResponse(ACTIONS.RESET_SEARCH_ARTICLES_STATE));
  }
}).catch((error) => {
  dispatch(ActionResponse(ACTIONS.SEARCH_ARTICLES_BY_TITLE_ERROR, 'Server error', error));
//   dispatch(ActionResponse(ACTIONS.RESET_SEARCH_ARTICLES_STATE));
});

export default searchArticleByTitle;
