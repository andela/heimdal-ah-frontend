/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
import UpdatePassword from './UpdatePasswordReducer';

describe('ResetPassword Reducers Test Suite', () => {
  it('returns status ERROR when an error occurs during sending a user email', () => {
    const initialState = {
      payload: '',
      status: '',
    };
    const state = UpdatePassword(initialState,
      {
        type: 'UPDATE_PASSWORD_ERROR',
        payload: 'Server error',
      });
    expect(state).toEqual({
      payload: 'Server error',
      status: 'ERROR',
    });
  });

  it('returns status FAILED when user not available', () => {
    const initialState = {
      payload: '',
      status: '',
    };
    const state = UpdatePassword(initialState,
      {
        type: 'UPDATE_PASSWORD_FAILED',
        payload: 'user not avalaible',
      });
    expect(state).toEqual({
      payload: 'user not avalaible',
      status: 'FAILED',
    });
  });

  it('returns status SUCCESS when user updates his password', () => {
    const initialState = {
      payload: '',
      status: '',
    };
    const state = UpdatePassword(initialState,
      {
        type: 'UPDATE_PASSWORD_SUCCESS',
        payload: 'password update was successful',
      });
    expect(state).toEqual({
      payload: 'password update was successful',
      status: 'SUCCESS',
    });
  });

  it('returns default state if no action is specified', () => {
    const initialState = {
      payload: '',
      status: '',
    };
    const state = UpdatePassword(initialState,
      {
        type: '',
        payload: '',
      });
    expect(state).toEqual({
      payload: '',
      status: '',
    });
  });

  it('should return the initial state', () => {
    expect(UpdatePassword(undefined, {})).toEqual({
      payload: '',
      status: '',
    });
  });
});
