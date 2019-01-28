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
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE3LCJ1c2VybmFtZSI6ImhlbnBlcmkyIiwiZW1haWwiOiJoZW5wZXJpQGdtYWlsLmNvbSIsImltYWdlIjpudWxsLCJyb2xlSWQiOjIsImlhdCI6MTU0ODY0OTA4MiwiZXhwIjoxNTQ4NzM1NDgyfQ.3mk8seBymr0-3nCGENwQ3L0OdTN12gJ7y1hugOE1wsg';
    const action = setAuthUser(token);

    expect(action).toEqual({
      type: 'SET_AUTH_USER',
      payload: {
        userId: 17,
        username: 'henperi2',
        roleId: 2,
      },
    });
  });
});
