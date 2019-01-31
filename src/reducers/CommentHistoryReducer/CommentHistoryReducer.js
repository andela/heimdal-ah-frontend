import { ACTIONS } from '../../actions/actionTypes';

const initialState = {
  commentHistory: [],
};


const commentEditHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_COMMENT_EDIT_HISTORY:
      return {
        ...state,
        commentHistory: action.history,
      };

    case ACTIONS.GET_COMMENT_EDIT_HISTORY_FAIL:
      return {
        ...state,
        ...initialState,
        error: action.error,
      };
    default:
      return state;
  }
};

export default commentEditHistoryReducer;
