import instance from '../../config/http';
import {
  ACTIONS,
} from '../actionTypes';
import ActionResponse from '../actionResponse';

let http;
const searchArticleByAuthor = (query, field, size) => (dispatch) => {
  if (field !== null && size !== null) {
    http = instance.get(`/articles_search/author?author=${query}&offset=${field}&size=${size}`);
  } else {
    http = instance.get(`/articles_search/author?author=${query}`);
  }

  http.then((response) => {
    if (response.status === 200) {
      dispatch(ActionResponse(ACTIONS.SEARCH_ARTICLES_BY_AUTHOR_SUCCESS,
        response.data.articles.rows));
    } else if (response.status === 404) {
      dispatch(ActionResponse(ACTIONS.SEARCH_ARTICLES_BY_AUTHOR_FAILED, 'Sorry, no articles found matching your search parameters'));
    }
  }).catch((error) => {
    dispatch(ActionResponse(ACTIONS.SEARCH_ARTICLES_BY_AUTHOR_ERROR, 'Server error', error));
  });
};

export default searchArticleByAuthor;
