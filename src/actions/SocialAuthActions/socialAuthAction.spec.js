/* eslint-disable no-undef */
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { authenticateUser } from './socialAuth';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({});

describe('select_actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('should dispatch the setAuthUser action', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE3LCJ1c2VybmFtZSI6ImhlbnBlcmkyIiwiZW1haWwiOiJoZW5wZXJpQGdtYWlsLmNvbSIsImltYWdlIjpudWxsLCJyb2xlSWQiOjIsImlhdCI6MTU0ODY0OTA4MiwiZXhwIjoxNTQ4NzM1NDgyfQ.3mk8seBymr0-3nCGENwQ3L0OdTN12gJ7y1hugOE1wsg';
    const expectedActions = [
      {
        payload: {
          userId: 17,
          username: 'henperi2',
          roleId: 2,
        },
        type: 'SET_AUTH_USER',
      },
    ];
    store.dispatch(authenticateUser(token));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
