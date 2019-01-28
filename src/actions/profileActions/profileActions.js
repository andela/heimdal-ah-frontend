// import axios from 'axios';

import instance from '../../config/http';
import { ACTIONS } from '../actionTypes';

export const getProfile = (username, history) => dispatch => instance.get(`/profiles/${username}`)
  .then((response) => {
    const { profile } = response.data;
    dispatch({ type: ACTIONS.GET_PROFILE, profile });
  })
  .catch(() => history.push('/error'));

export const getArticlesByAuthor = username => dispatch => instance.get(`/articles_search/author?author=${username}&size=6`)
  .then((response) => {
    const { articles } = response.data;
    dispatch({ type: ACTIONS.GET_ARTICLES_BY_AUTHOR, articles });
  })
  .catch(error => console.log(error));
