/* eslint-disable no-undef */
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { autheticateUser } from './socialAuth';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({});

describe('select_actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('should dispatch the setAuthUser action', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE0LCJpYXQiOjE1NDgyNDYzNjAsImV4cCI6MTU0ODMzMjc2MH0.m9A_UvEKno7FfcqSKUqJa7Pm-sRou47xMJYWACCjYWI';
    const expectedActions = [
      {
        payload: {
          user: {
            userId: 14,
            username: undefined,
            roleId: undefined,
          },
        },
        type: 'SET_AUTH_USER',
      },
    ];
    store.dispatch(autheticateUser(token));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
