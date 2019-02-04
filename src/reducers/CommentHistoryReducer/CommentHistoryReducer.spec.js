import { ACTIONS } from '../../actions/actionTypes';
import CommentHistoryReducer from './CommentHistoryReducer';


describe('select_reducer', () => {
  it('is correct', () => {
    const action = { type: ACTIONS.GET_COMMENT_EDIT_HISTORY_FAIL };
    expect(CommentHistoryReducer([], action)).toMatchSnapshot();
  });

  it('returns the correct state', () => {
    const action = { type: ACTIONS.GET_COMMENT_EDIT_HISTORY, payload: 1 };
    expect(CommentHistoryReducer(undefined, action)).toMatchSnapshot();
  });
});
