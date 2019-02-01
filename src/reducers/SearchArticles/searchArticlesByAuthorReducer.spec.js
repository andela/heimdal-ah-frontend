/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
import searchArticlesByAuthor from './searchArticlesByAuthorReducer';

describe('searchArticlesByAuthor Reducers Test Suite', () => {
  it('returns status ERROR when an error occurs during searching article', () => {
    const initialState = {
      payload: '',
      status: '',
    };
    const state = searchArticlesByAuthor(initialState,
      {
        type: 'SEARCH_ARTICLES_BY_AUTHOR_ERROR',
        payload: 'Server error',
      });
    expect(state).toEqual({
      payload: 'Server error',
      status: 'ERROR',
    });
  });

  it('returns status FAILED when an author is not available', () => {
    const initialState = {
      payload: '',
      status: '',
    };
    const state = searchArticlesByAuthor(initialState,
      {
        type: 'SEARCH_ARTICLES_BY_AUTHOR_FAILED',
        payload: 'Sorry, no articles found matching your search parameters',
      });
    expect(state).toEqual({
      payload: 'Sorry, no articles found matching your search parameters',
      status: 'FAILED',
    });
  });

  it('returns status SUCCESS when article is found based on author', () => {
    const initialState = {
      payload: '',
      status: '',
    };
    const state = searchArticlesByAuthor(initialState,
      {
        type: 'SEARCH_ARTICLES_BY_AUTHOR_SUCCESS',
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
    const state = searchArticlesByAuthor(initialState,
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
    expect(searchArticlesByAuthor(undefined, {})).toEqual({
      payload: '',
      status: '',
    });
  });
});
