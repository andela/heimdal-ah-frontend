/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
import searchArticlesByTag from './searchArticlesByTagsReducer';

describe('searchArticlesByAuthor Reducers Test Suite', () => {
  it('returns status ERROR when an error occurs during searching article', () => {
    const initialState = {
      payload: '',
      status: '',
    };
    const state = searchArticlesByTag(initialState,
      {
        type: 'SEARCH_ARTICLES_BY_TAGS_ERROR',
        payload: 'Server error',
      });
    expect(state).toEqual({
      payload: 'Server error',
      status: 'ERROR',
    });
  });

  it('returns status FAILED when an tag is not available', () => {
    const initialState = {
      payload: '',
      status: '',
    };
    const state = searchArticlesByTag(initialState,
      {
        type: 'SEARCH_ARTICLES_BY_TAGS_FAILED',
        payload: 'Sorry, no articles found matching your search parameters',
      });
    expect(state).toEqual({
      payload: 'Sorry, no articles found matching your search parameters',
      status: 'FAILED',
    });
  });

  it('returns status SUCCESS when article is found based on tag', () => {
    const initialState = {
      payload: '',
      status: '',
    };
    const state = searchArticlesByTag(initialState,
      {
        type: 'SEARCH_ARTICLES_BY_TAGS_SUCCESS',
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
    const state = searchArticlesByTag(initialState,
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
    expect(searchArticlesByTag(undefined, {})).toEqual({
      payload: '',
      status: '',
    });
  });
});
