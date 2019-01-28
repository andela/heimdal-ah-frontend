/* eslint-disable no-undef */
import SET_CURRENT_USER from '../../actions/actionTypes';
import auth from './auth';

describe('select_reducer', () => {
  it('renders with initial state', () => {
    const action = { type: SET_CURRENT_USER };
    const initialState = { isAuthenticated: false, user: {}, error: {} };
    expect(auth(undefined, action)).toEqual(initialState);
  });

  it('renders correctly', () => {
    const action = { type: SET_CURRENT_USER };
    expect(auth(undefined, action)).toMatchSnapshot();
  });

  it('returns the correct state', () => {
    const action = { type: SET_CURRENT_USER, user: 1 };
    expect(auth(undefined, action)).toMatchSnapshot();
  });
});
