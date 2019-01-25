/* eslint-disable no-undef */
import SET_CURRENT_USER from '../../actions/actionTypes';

// Reducer to be tested
import socialAuthReducer from './socialAuthReducer';

describe('select_reducer', () => {
  it('testing our initial state', () => {
    const action = { type: SET_CURRENT_USER };
    const initialState = { isAuthenticated: false, user: {} };
    expect(socialAuthReducer(undefined, action)).toEqual(initialState);
  });

  it('is correct', () => {
    const action = { type: SET_CURRENT_USER };
    expect(socialAuthReducer(undefined, action)).toMatchSnapshot();
  });

  it('returns the correct state', () => {
    const action = { type: SET_CURRENT_USER, payload: 1 };
    expect(socialAuthReducer(undefined, action)).toMatchSnapshot();
  });
});
