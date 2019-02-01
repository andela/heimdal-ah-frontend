/* eslint-disable no-undef */
import { toggleLoader } from '../actions/loaderActions';

// Reducer to be tested
import loaderReducer from './loaderReducer';

describe('loaderReducer', () => {
  it('should return the default state if no action is specified', () => {
    const initialState = {
      isLoading: false,
    };
    const action = { type: '' };
    expect(loaderReducer(initialState, action)).toMatchSnapshot({});
    expect(loaderReducer(initialState, action)).toEqual(initialState);
  });

  it('should update the state and toggle the loader when type is TOGGLE_LOADER', () => {
    const initialState = {
      isLoading: false,
    };
    const action = toggleLoader();
    expect(loaderReducer(initialState, action)).toMatchSnapshot({});
    expect(loaderReducer(initialState, action)).toEqual({ isLoading: true });
  });
});
