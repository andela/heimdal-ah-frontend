/* eslint-disable no-undef */
import { ACTIONS } from '../../actions/actionTypes';
import ReplyReducer from './ReplyReducer';


describe('select_reducer', () => {
  let initialState;
  beforeEach(() => {
    initialState = {
      loading: false,
      replyError: null,
      status: null,
    };
  });

  it('testing our initial state', () => {
    const action = { type: ACTIONS.GET_COMMENT_REPLY };
    expect(ReplyReducer(undefined, action)).toEqual(initialState);
  });

  it('is correct', () => {
    const action = { type: ACTIONS.GET_COMMENT_REPLY };
    expect(ReplyReducer(undefined, action)).toMatchSnapshot();
  });

  it('returns the correct state', () => {
    const action = { type: ACTIONS.GET_COMMENT_REPLY, payload: 1 };
    expect(ReplyReducer(undefined, action)).toMatchSnapshot();
  });

  it('testing the get ', () => {
    const action = { type: ACTIONS.GET_COMMENT_REPLY, payload: 1 };
    const expectedState = { loading: false, status: null, replyError: null };
    expect(ReplyReducer(initialState, action)).toEqual(expectedState);
  });
});
