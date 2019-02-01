/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
import updateArticle from './updateArticlesReducer';

describe('updateArticles Reducers Test Suite', () => {
  it('returns status ERROR when an error occurs during updating an article', () => {
    const initialState = {
      payload: '',
      status: '',
    };
    const state = updateArticle(initialState,
      {
        type: 'UPDATE_ARTICLES_ERROR',
        payload: 'Server error',
      });
    expect(state).toEqual({
      payload: 'Server error',
      status: 'ERROR',
    });
  });

  it('returns status SUCCESS when an article has been updated', () => {
    const initialState = {
      payload: '',
      status: '',
    };
    const state = updateArticle(initialState,
      {
        type: 'UPDATE_ARTICLES_SUCCESS',
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
    const state = updateArticle(initialState,
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
    const state = updateArticle(initialState,
      {
        type: 'UPDATE_ARTICLES_RESET_STATE',
        payload: '',
      });
    expect(state).toEqual({
      payload: '',
      status: '',
    });
  });

  it('should return the initial state', () => {
    expect(updateArticle(undefined, {})).toEqual({
      payload: '',
      status: '',
    });
  });
});
