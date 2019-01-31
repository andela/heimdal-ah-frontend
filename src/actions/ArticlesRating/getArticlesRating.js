import instance from '../../config/http';
import {
  ACTIONS,
} from '../actionTypes';
import ActionResponse from '../actionResponse';

const getAticleRating = articleId => dispatch => instance.get(`/articles/${articleId}`).then((response) => {
  if (response.status === 200) {
    dispatch(ActionResponse(ACTIONS.GET_ARTICLES_RATING_SUCCESS, response.data.article.ratings));
  }
}).catch((error) => {
  dispatch(ActionResponse(ACTIONS.GET_ARTICLES_RATING_ERROR, 'Server error', error));
});

export default getAticleRating;
