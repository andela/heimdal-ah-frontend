import instance from '../../config/http';
import {
  ACTIONS,
} from '../actionTypes';
import ActionResponse from '../actionResponse';

const articleRating = (stars, articleId) => dispatch => instance.post(`/ratings/articles/${articleId}`, {
  stars,
}).then((response) => {
  if (response.status === 201) {
    dispatch(ActionResponse(ACTIONS.ARTICLES_RATING_SUCCESS, response.data.ratings.stars));
    dispatch(ActionResponse(ACTIONS.RESET_ARTICLES_RATING_STATE));
  }
}).catch((error) => {
  dispatch(ActionResponse(ACTIONS.ARTICLES_RATING_ERROR, 'Server error', error));
  dispatch(ActionResponse(ACTIONS.RESET_ARTICLES_RATING_STATE));
});

export default articleRating;
