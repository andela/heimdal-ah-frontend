/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
import articlesRatingReducer from './articlesRatingReducer';

describe('articlesRatingReducer Reducers Test Suite', () => {
  it('returns status ERROR when an error occurs during rating an article', () => {
    const initialState = {
      payload: '',
      status: '',
    };
    const state = articlesRatingReducer(initialState,
      {
        type: 'ARTICLES_RATING_ERROR',
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
    const state = articlesRatingReducer(initialState,
      {
        type: 'ARTICLES_RATING_SUCCESS',
        payload: 5,
      });
    expect(state).toEqual({
      payload: 5,
      status: 'SUCCESS',
    });
  });

  it('returns default state if no action is specified', () => {
    const initialState = {
      payload: '',
      status: '',
    };
    const state = articlesRatingReducer(initialState,
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
    expect(articlesRatingReducer(undefined, {})).toEqual({
      payload: '',
      status: '',
    });
  });


  it('should return RESET_ARTICLES_RATING_STATE', () => {
    const initialState = {
      payload: '5',
      status: 'SUCCESS',
    };
    expect(articlesRatingReducer(initialState, {
      type: 'RESET_ARTICLES_RATING_STATE',
    })).toEqual({
      payload: '',
      status: '',
    });
  });
});
