import { ACTIONS } from '../../actions/actionTypes';

const initialState = {
  articles: {
    isLoading: false,
    count: 0,
    rows: [],
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_LOADER:
      return {
        ...state,
        isLoading: !state.isLoading,
      };

    case ACTIONS.GET_ALL_ARTICLES:
      return {
        ...state,
        articles: action.payload,
      };
    default:
      return state;
  }
};
