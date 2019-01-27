/* eslint-disable no-undef */
import followReducer from './AllFollowReducer';

describe('Follow reducer test suit', () => {
  it('return all followers', () => {
    const initialState = {
      message: '',
      followers: {},
    };

    const state = followReducer(initialState,

      {
        type: 'GET_ALL_FOLLOWERS',
        payload: {},
      });

    expect(state).toEqual({
      message: '',
      followers: {},
    });
  });

  it('shouls follow a user', () => {
    const initialState = {
      message: '',
      followers: {
        data: [],
      },
    };

    const state = followReducer(initialState,

      {
        type: 'FOLLOW_USER',
        payload: {
          data: [initialState.followers.data],
          message: 'successfully followed user',
        },

      });
    expect(state).toEqual({
      message: 'successfully followed user',
      followers: {
        data: [...state.followers.data],
      },

    });
  });

  it('shouls unfollow a user', () => {
    const initialState = {
      message: '',
      followers: {
        data: [],
      },
    };

    const state = followReducer(initialState,
      {
        type: 'UNFOLLOW_USER',
        payload: {
          data: [initialState.followers.data],
          message: 'successfully unfollowed user',
        },
      });

    expect(state).toEqual({

      message: 'successfully unfollowed user',
      followers: {
        data: [...state.followers.data],

      },
    });
  });
});
