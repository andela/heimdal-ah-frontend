import { ACTIONS } from '../../actions/actionTypes';

const initialState = {
  articles: {
    isLoading: false,
    count: 0,
    metadata: {},
    articles: {
      rows: [],
    },
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

    case ACTIONS.GET_ARTICLES_BY_PAGE:
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
