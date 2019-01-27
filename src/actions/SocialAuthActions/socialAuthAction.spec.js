/* eslint-disable no-undef */
import configureStore from 'redux-mock-store';
import * as selectActions from './socialAuth';

const mockStore = configureStore();
const store = mockStore();

describe('select_actions', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('should test setCurrent actions', () => {
    const expectedActions = [{ payload: 1, type: 'SET_CURRENT_USER' }];
    store.dispatch(selectActions.setCurrentUser(1));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
