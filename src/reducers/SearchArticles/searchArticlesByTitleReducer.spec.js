/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
import searchArticlesByTitle from './searchArticlesByTitleReducer';

describe('searchArticlesByTitle  Reducers Test Suite', () => {
  it('returns status ERROR when an error occurs during searching article', () => {
    const initialState = {
      payload: '',
      status: '',
    };
    const state = searchArticlesByTitle(initialState,
      {
        type: 'SEARCH_ARTICLES_BY_TITLE_ERROR',
        payload: 'Server error',
      });
    expect(state).toEqual({
      payload: 'Server error',
      status: 'ERROR',
    });
  });

  it('returns status FAILED when an title is not available', () => {
    const initialState = {
      payload: '',
      status: '',
    };
    const state = searchArticlesByTitle(initialState,
      {
        type: 'SEARCH_ARTICLES_BY_TITLE_FAILED',
        payload: 'Sorry, no articles found matching your search parameters',
      });
    expect(state).toEqual({
      payload: 'Sorry, no articles found matching your search parameters',
      status: 'FAILED',
    });
  });

  it('returns status SUCCESS when article is found based on title', () => {
    const initialState = {
      payload: '',
      status: '',
    };
    const state = searchArticlesByTitle(initialState,
      {
        type: 'SEARCH_ARTICLES_BY_TITLE_SUCCESS',
        payload: [{}],
      });
    expect(state).toEqual({
      payload: [{}],
      status: 'SUCCESS',
    });
  });

  it('returns default state if no action is specified', () => {
    const initialState = {
      payload: '',
      status: '',
    };
    const state = searchArticlesByTitle(initialState,
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
    expect(searchArticlesByTitle(undefined, {})).toEqual({
      payload: '',
      status: '',
    });
  });
});
