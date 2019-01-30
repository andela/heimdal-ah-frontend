/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
import getArticlesRatingReducer from './getArticlesRatingReducer';

describe('articlesRatingReducer Reducers Test Suite', () => {
  it('returns status ERROR when an error occurs during rating an article', () => {
    const initialState = {
      payload: '',
      status: '',
    };
    const state = getArticlesRatingReducer(initialState,
      {
        type: 'GET_ARTICLES_RATING_ERROR',
        payload: 'Server error',
      });
    expect(state).toEqual({
      payload: 'Server error',
      status: 'ERROR',
    });
  });

  it('returns status SUCCESS when user rates an article', () => {
    const initialState = {
      payload: '',
      status: '',
    };
    const state = getArticlesRatingReducer(initialState,
      {
        type: 'GET_ARTICLES_RATING_SUCCESS',
        payload: [{ stars: 4, userId: 1 }, { stars: 5, userId: 2 }],
      });
    expect(state).toEqual({
      payload: [{ stars: 4, userId: 1 }, { stars: 5, userId: 2 }],
      status: 'SUCCESS',
    });
  });

  it('returns default state if no action is specified', () => {
    const initialState = {
      payload: '',
      status: '',
    };
    const state = getArticlesRatingReducer(initialState,
      {
        type: '',
        payload: '',
      });
    expect(state).toEqual({
      payload: '',
      status: '',
    });
  });

  it('should return the initial state', () => {
    expect(getArticlesRatingReducer(undefined, {})).toEqual({
      payload: '',
      status: '',
    });
  });
});
