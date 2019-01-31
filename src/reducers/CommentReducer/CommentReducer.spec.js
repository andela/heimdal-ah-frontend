/* eslint-disable no-undef */
import { ACTIONS } from '../../actions/actionTypes';
import CommentReducer from './CommentReducer';


describe('select_reducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      loading: false,
      status: false,
    };
  });

  it('testing our initial state', () => {
    const action = { type: ACTIONS.GET_ARTICLE_COMMENT };
    expect(CommentReducer(undefined, action)).toEqual(initialState);
  });

  it('is correct', () => {
    const action = { type: ACTIONS.GET_ARTICLE_COMMENT };
    expect(CommentReducer(undefined, action)).toMatchSnapshot();
  });

  it('returns the correct state', () => {
    const action = { type: ACTIONS.GET_ARTICLE_COMMENT, payload: 1 };
    expect(CommentReducer(undefined, action)).toMatchSnapshot();
  });

  it('returns the correct state', () => {
    const action = { type: ACTIONS.GET_ARTICLE_COMMENT, payload: 1 };
    const expectedState = { comments: 1, loading: false, status: false };
    expect(CommentReducer(initialState, action)).toEqual(expectedState);
  });
});
