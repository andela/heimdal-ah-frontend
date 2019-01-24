/* eslint-disable no-undef */
import { setErrors, clearErrors, removeAnError } from './errorActions';

describe('The errorActions Test Suite', () => {
  it('should setup setErrors action object', () => {
    const errors = {
      username: { msg: 'username is undefined' },
    };
    const action = setErrors(errors);

    expect(action).toEqual({
      type: 'SET_ERRORS',
      payload: {
        username: { msg: 'username is undefined' },
      },
    });
  });

  it('should setup clearErrors action object', () => {
    const action = clearErrors();
    expect(action).toEqual({
      type: 'CLEAR_ERRORS',
    });
  });

  it('should setup removeAnError action object', () => {
    const errorName = 'username';
    const action = removeAnError(errorName);

    expect(action).toEqual({
      type: 'REMOVE_AN_ERROR',
      errorName,
    });
  });
});
