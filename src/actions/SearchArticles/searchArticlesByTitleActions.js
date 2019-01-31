import instance from '../../config/http';
import {
  ACTIONS,
} from '../actionTypes';
import ActionResponse from '../actionResponse';

let http;
const searchArticleByTitle = (query, offset, size) => (dispatch) => {
  if (offset !== undefined && size !== undefined) {
    http = instance.get(`/articles_search/title?title=${query}&offset=${offset}&size=${size}`);
  } else {
    http = instance.get(`/articles_search/title?title=${query}`);
  }

  return http.then((response) => {
    if (response.status === 200) {
      dispatch(ActionResponse(ACTIONS.SEARCH_ARTICLES_BY_TITLE_SUCCESS,
        response.data.articles.rows));
    } else if (response.status === 404) {
      dispatch(ActionResponse(ACTIONS.SEARCH_ARTICLES_BY_TITLE_FAILED, 'Sorry, no articles found matching your search parameters'));
    }
  }).catch((error) => {
    dispatch(ActionResponse(ACTIONS.SEARCH_ARTICLES_BY_TITLE_ERROR, 'Server error', error));
  });
};

export default searchArticleByTitle;
