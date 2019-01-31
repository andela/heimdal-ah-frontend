import moment from 'moment';
import axiosInstance from '../../config/http';
import { ACTIONS } from '../actionTypes';

export const setFeaturedArticles = (articles) => {
  const featuredArticles = articles.rows
    .sort((item1, item2) => item2.likes.length - item1.likes.length)
    .slice(0, 6);
  return {
    type: ACTIONS.SET_FEATURED_ARTICLES,
    payload: featuredArticles,
  };
};

export const setRecentArticles = (articles) => {
  const recentArticles = articles.rows
    .sort((item1, item2) => moment(item2.likes.createdAt) - moment(item1.likes.createdAt))
    .slice(0, 4);
  return {
    type: ACTIONS.SET_RECENT_ARTICLES,
    payload: recentArticles,
  };
};

export const setMainArticles = (articles) => {
  let mainArticles = {};
  while (Object.keys(mainArticles).length < 9) {
    const index = Math.floor(Math.random() * articles.rows.length);
    mainArticles[index] = articles.rows[index];
  }
  mainArticles = Object.values(mainArticles);
  return {
    type: ACTIONS.SET_MAIN_ARTICLES,
    payload: articles.rows,
  };
};

export const getArticles = () => dispatch => axiosInstance
  .get('/articles')
  .then((response) => {
    const { articles } = response.data;
    dispatch(setFeaturedArticles(articles));
    dispatch(setRecentArticles(articles));
    dispatch(setMainArticles(articles));
  })
  .catch((errors) => {
    console.log(errors);
  });
