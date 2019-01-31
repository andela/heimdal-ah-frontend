/* eslint-disable no-undef */
import { ACTIONS } from '../actions/actionTypes';
import { removeAnError, clearErrors } from '../actions/errorActions';

// Reducer to be tested
import errorsReducer from './errorsReducer';

describe('authReducer', () => {
  it('should return the default state if no action is specified', () => {
    const initialState = {};
    const action = { type: '' };
    expect(errorsReducer(initialState, action)).toMatchSnapshot({});
    expect(errorsReducer(initialState, action)).toEqual({});
  });

  it('should update the state and set errors when type is SET_ERRORS and action is specified', () => {
    const initialState = {};
    const action = { type: ACTIONS.SET_ERRORS, payload: { username: ['username is required'] } };
    expect(errorsReducer(initialState, action)).toMatchSnapshot({});
    expect(errorsReducer(initialState, action)).toEqual({ username: ['username is required'] });
  });

  it('should update the state and remove an error when type is REMOVE_AN_ERRORS and errorName is specified in the action', () => {
    const initialState = {};
    const action = removeAnError('username');
    expect(errorsReducer(initialState, action)).toMatchSnapshot({});
    expect(errorsReducer(initialState, action)).toEqual({ ...initialState, username: '' });
  });

  it('should clear all the errors in state when the type is REMOVE_AN_ERRORS', () => {
    const initialState = {};
    const action = clearErrors();
    expect(errorsReducer(initialState, action)).toMatchSnapshot({});
    expect(errorsReducer(initialState, action)).toEqual({});
  });
});
