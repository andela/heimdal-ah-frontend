/* eslint-disable no-undef */
import SET_CURRENT_USER, { ACTIONS } from '../../actions/actionTypes';
import auth from './auth';

describe('select_reducer', () => {
  it('renders with initial state', () => {
    const action = { type: SET_CURRENT_USER };
    const initialState = { isAuthenticated: false, user: {}, error: {} };
    expect(auth(undefined, action)).toEqual(initialState);
  });

  it('renders correctly', () => {
    const action = { type: ACTIONS.SET_CURRENT_USER };
    expect(auth(undefined, action)).toMatchSnapshot();
  });

  it('returns the correct state', () => {
    const action = { type: ACTIONS.SET_CURRENT_USER, user: {} };
    expect(auth(undefined, action)).toMatchSnapshot();
  });

  it('should set user if user is succesfully stored', () => {
    const initialState = {
      isAuthenticated: true,
      user: {},
      error: {},
    };

    const state = auth(initialState,
      {
        type: ACTIONS.SET_CURRENT_USER,
        isAuthenticated: true,
        user: {
          userId: 1,
          email: 'email',
          username: 'wale',
          image: 'https://hardwaremassive.com/s…cture.jpg',
          roleId: 1,
        },
        error: {},
      });
    expect(state).toEqual({
      isAuthenticated: true,
      user: {
        userId: 1,
        email: 'email',
        username: 'wale',
        image: 'https://hardwaremassive.com/s…cture.jpg',
        roleId: 1,
      },
      error: {},
    });
  });

  it('renders correctly', () => {
    const action = { type: ACTIONS.SET_CURRENT_USER_FAIL };
    expect(auth(undefined, action)).toMatchSnapshot();
  });

  it('returns the correct state', () => {
    const action = { type: ACTIONS.SET_CURRENT_USER_FAIL, error: {} };
    expect(auth(undefined, action)).toMatchSnapshot();
  });

  it('should set user if user login was unsuccessful', () => {
    const initialState = {
      isAuthenticated: false,
      user: {},
      error: {},
    };

    const state = auth(initialState,
      {
        type: ACTIONS.SET_CURRENT_USER_FAIL,
        isAuthenticated: false,
        user: {},
        error: { message: 'Login unsuccessful' },
      });
    expect(state).toEqual({
      isAuthenticated: false,
      user: {},
      error: { message: 'Login unsuccessful' },
    });
  });
});
