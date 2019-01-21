/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
import resetPassword from './resetPasswordReducer';

describe('ResetPassword Reducers Test Suite', () => {
  it('returns status ERROR when an error occurs during sending a user email', () => {
    const initialState = {
      payload: '',
      status: '',
    };
    const state = resetPassword(initialState,
      {
        type: 'RESET_PASSWORD_ERROR',
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
    const state = resetPassword(initialState,
      {
        type: 'RESET_PASSWORD_FAILED',
        payload: 'user not avalaible',
      });
    expect(state).toEqual({
      payload: 'user not avalaible',
      status: 'FAILED',
    });
  });

  it('returns status SUCCESS when user is sent an email to reset his password', () => {
    const initialState = {
      payload: '',
      status: '',
    };
    const state = resetPassword(initialState,
      {
        type: 'RESET_PASSWORD_SUCCESS',
        payload: 'Email was sent successfully',
      });
    expect(state).toEqual({
      payload: 'Email was sent successfully',
      status: 'SUCCESS',
    });
  });

  it('returns default state if no action is specified', () => {
    const initialState = {
      payload: '',
      status: '',
    };
    const state = resetPassword(initialState,
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
    expect(resetPassword(undefined, {})).toEqual({
      payload: '',
      status: '',
    });
  });
});
