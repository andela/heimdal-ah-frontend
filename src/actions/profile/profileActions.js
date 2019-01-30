import instance from '../../config/http';
import { ACTIONS } from '../actionTypes';

export const getProfile = username => dispatch => instance.get(`/profiles/${username}`)
  .then((response) => {
    const { profile } = response.data;
    dispatch({ type: ACTIONS.GET_PROFILE, profile });
  })
  .catch((error) => {
    if (!error.response) {
      return (
        dispatch({
          type: ACTIONS.GETTING_PROFILE_ERROR,
          error: 'Internet connection error',
        }));
    }

    if (error.response.status === 404) {
      return (
        dispatch({
          type: ACTIONS.GETTING_PROFILE_ERROR,
          error: 'The requested page doesn’t exist!',
        }));
    }

    return dispatch({
      type: ACTIONS.GETTING_PROFILE_ERROR,
      error: 'A server error occured',
    });
  });

export const getArticlesByAuthor = username => (
  dispatch => instance.get(`/articles_search/author?author=${username}&size=6`)
    .then((response) => {
      const { articles } = response.data;
      dispatch({ type: ACTIONS.GET_ARTICLES_BY_AUTHOR, articles });
    }));
