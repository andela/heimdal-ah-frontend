import { ACTIONS } from '../../actions/actionTypes';

const initialState = {
  comments: {},
  error: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_COMMENTS:
      return {
        ...state,
        comments: action.comments,
      };

    case ACTIONS.GET_COMMENTS_FAIL:
      return {
        ...state,
        error: action.error,
      };
    default: return state;
  }
};
