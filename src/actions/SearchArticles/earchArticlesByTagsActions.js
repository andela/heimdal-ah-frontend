import instance from '../../config/http';
import {
  ACTIONS,
} from '../actionTypes';
import ActionResponse from '../actionResponse';

let http;
const searchArticleByTags = (query, offset, size) => (dispatch) => {
  if (offset && size) {
    http = instance.get(`/articles_search/tag?tag=${query}&offset=${offset}&size=${size}`);
  } else {
    http = instance.get(`/articles_search/tag?tag=${query}`);
  }

  http.then((response) => {
    if (response.status === 200) {
      dispatch(ActionResponse(ACTIONS.SEARCH_ARTICLES_BY_TAGS_SUCCESS,
        response.data.articles.rows));
    } else if (response.status === 404) {
      dispatch(ActionResponse(ACTIONS.SEARCH_ARTICLES_BY_TAGS_FAILED, 'Sorry, no articles found matching your search parameters'));
    }
  }).catch((error) => {
    dispatch(ActionResponse(ACTIONS.SEARCH_ARTICLES_BY_TAGS_ERROR, 'Server error', error));
  });
};

export default searchArticleByTags;
