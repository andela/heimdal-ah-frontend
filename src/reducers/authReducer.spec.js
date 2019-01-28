/* eslint-disable no-undef */
import { ACTIONS } from '../actions/actionTypes';

// Reducer to be tested
import authReducer from './authReducer';

describe('authReducer', () => {
  it('should update the auth sate when a payload is sent and action type is defined', () => {
    const initialState = { isAuthenticated: false, user: {} };
    const action = { type: ACTIONS.SET_AUTH_USER, payload: { userId: 5 } };

    expect(authReducer(initialState, action)).toMatchSnapshot({});
    expect(authReducer(initialState, action)).toEqual({
      isAuthenticated: true,
      user: {
        userId: 5,
      },
    });
  });

  it('should return default state if no action is specified', () => {
    const initialState = { isAuthenticated: false, user: {} };
    const action = { type: '' };
    expect(authReducer(initialState, action)).toMatchSnapshot({});
    expect(authReducer(initialState, action)).toEqual({
      isAuthenticated: false,
      user: {},
    });
  });
});
