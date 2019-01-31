import { ACTIONS } from '../../actions/actionTypes';

const initialState = {
  history: {},
};


const commentEditHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_COMMENT_EDIT_HISTORY:
      return {
        ...state,
        history: action.history,
      };

    case ACTIONS.GET_COMMENT_EDIT_HISTORY_FAIL:
      return {
        ...state,
        error: action.error,
      };
    default:
      return state;
  }
};

export default commentEditHistoryReducer;
