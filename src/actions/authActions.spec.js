/* eslint-disable no-undef */

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { setAuthUser } from './authActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('The authActions Test Suite', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('should setup setAuthUser action object', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE0LCJpYXQiOjE1NDgyNDYzNjAsImV4cCI6MTU0ODMzMjc2MH0.m9A_UvEKno7FfcqSKUqJa7Pm-sRou47xMJYWACCjYWI';
    const action = setAuthUser(token);

    expect(action).toEqual({
      type: 'SET_AUTH_USER',
      payload: {
        user: {
          userId: 14,
          username: undefined,
          roleId: undefined,
        },
      },
    });
  });
});
