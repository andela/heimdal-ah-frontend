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
        articles: {
          ...state.articles,
          isLoading: !state.articles.isLoading,
        },
      };

    case ACTIONS.GET_ALL_UNPUBLISHED_ARTICLES:
      return {
        articles: {
          ...state.articles,
          ...action.payload,
        },
      };
    default:
      return state;
  }
};
