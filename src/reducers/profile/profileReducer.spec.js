/* eslint-disable no-undef */
import profileReducer from './profileReducer';

describe('Profile Reducer Test Suite', () => {
  const profile = {
    biodata: 'Tagvohdu opueka rik enani tode fuwhiba hejsuv dumba',
    followed: [{ followedId: 3 }],
    followers: [{ followerId: 2 }],
    id: 1,
    userId: 1,
    username: 'wale',
  };

  const articles = {
    count: 1,
    rows: [{ id: 2 }],
  };

  const initialState = {
    error: '',
    profile: {},
    articles: {},
  };

  it('should return new state containing profile', () => {
    const state = profileReducer(initialState, {
      type: 'GET_PROFILE',
      profile,
    });
    expect(state).toEqual({
      articles: {},
      error: '',
      profile,
    });
  });

  it('should return new state containing error', () => {
    const state = profileReducer(initialState, {
      type: 'GETTING_PROFILE_ERROR',
      error: 'Something went wrong',
    });
    expect(state).toEqual({
      articles: {},
      error: 'Something went wrong',
      profile: {},
    });
  });

  it('should return new state containing articles', () => {
    const state = profileReducer(initialState, {
      type: 'GET_ARTICLES_BY_AUTHOR',
      articles,
    });
    expect(state).toEqual({
      articles,
      error: '',
      profile: {},
    });
  });

  it('should return the initial state', () => {
    expect(profileReducer(undefined, {})).toEqual({
      error: '',
      profile: {},
      articles: {},
    });
  });
});
