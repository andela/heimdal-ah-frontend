/* eslint-disable no-undef */

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { setAuthUser } from './authActions';
import { signupEndpoint } from '../apiEndpoints';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('The authActions Test Suite', () => {
  it('should setup setAuthUser action object', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE0LCJpYXQiOjE1NDgyNDYzNjAsImV4cCI6MTU0ODMzMjc2MH0.m9A_UvEKno7FfcqSKUqJa7Pm-sRou47xMJYWACCjYWI';
    const action = setAuthUser(token);

    expect(action).toEqual({
      type: 'SET_AUTH_USER',
      payload: {
        isAuthenticated: true,
        token,
        userId: undefined,
        username: undefined,
      },
    });
  });

  it('should return success and dispatch the setAuth action when valid data is provided', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE0LCJpYXQiOjE1NDgyNDYzNjAsImV4cCI6MTU0ODMzMjc2MH0.m9A_UvEKno7FfcqSKUqJa7Pm-sRou47xMJYWACCjYWI';

    moxios.stubRequest(signupEndpoint, {
      status: 201,
      data: {
        isAuthenticated: true,
        token,
        userId: undefined,
        username: undefined,
      },
    });

    const expected = {
      type: 'SET_AUTH_USER',
      payload: {
        isAuthenticated: true,
        token,
        userId: undefined,
        username: undefined,
      },
    };

    expect(store.dispatch(setAuthUser(token))).toEqual(expected);
  });
});
