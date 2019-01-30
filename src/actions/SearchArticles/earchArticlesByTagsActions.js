import instance from '../../config/http';
import {
  ACTIONS,
} from '../actionTypes';
import ActionResponse from '../actionResponse';

const searchArticleByTags = query => dispatch => instance.get(`/articles_search/tag?tag=${query}&offset=0&size=7`).then((response) => {
  if (response.status === 200) {
    dispatch(ActionResponse(ACTIONS.SEARCH_ARTICLES_BY_TAGS_SUCCESS,
      response.data.articles.rows));
  } else if (response.status === 404) {
    dispatch(ActionResponse(ACTIONS.SEARCH_ARTICLES_BY_TAGS_FAILED, 'Sorry, no articles found matching your search parameters'));
  }
}).catch((error) => {
  dispatch(ActionResponse(ACTIONS.SEARCH_ARTICLES_BY_TAGS_ERROR, 'Server error', error));
});

export default searchArticleByTags;
