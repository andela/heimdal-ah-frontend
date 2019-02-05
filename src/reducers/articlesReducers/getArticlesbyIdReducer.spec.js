/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
import getArticleById from './getArticlesByIdReducer';

describe('getArticlesById Reducers Test Suite', () => {
  it('returns status ERROR when an error occurs during retrieving an article on page load', () => {
    const initialState = {
      payload: '',
      status: '',
    };
    const state = getArticleById(initialState,
      {
        type: 'GET_ARTICLES_BY_ID_ERROR',
        payload: 'Server error',
      });
    expect(state).toEqual({
      payload: 'Server error',
      status: 'ERROR',
    });
  });

  it('returns status SUCCESS when an article has been retrieved on page load', () => {
    const initialState = {
      payload: '',
      status: '',
    };
    const state = getArticleById(initialState,
      {
        type: 'GET_ARTICLES_BY_ID_SUCCESS',
        payload: {},
      });
    expect(state).toEqual({
      payload: {},
      status: 'SUCCESS',
    });
  });

  it('returns default state if no action is specified', () => {
    const initialState = {
      payload: '',
      status: '',
    };
    const state = getArticleById(initialState,
      {
        type: '',
        payload: '',
      });
    expect(state).toEqual({
      payload: '',
      status: '',
    });
  });

  it('resets state after every action', () => {
    const initialState = {
      payload: '',
      status: '',
    };
    const state = getArticleById(initialState,
      {
        type: 'GET_ARTICLES_BY_ID_RESET_STATE',
        payload: '',
      });
    expect(state).toEqual({
      payload: '',
      status: '',
    });
  });

  it('should return the initial state', () => {
    expect(getArticleById(undefined, {})).toEqual({
      payload: '',
      status: '',
    });
  });
});
