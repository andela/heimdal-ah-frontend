import { ACTIONS } from '../../actions/actionTypes';

const initialState = {
  featuredArticles: [],
  recentArticles: [],
  mainArticles: [],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_FEATURED_ARTICLES:
      return {
        ...state,
        featuredArticles: [...action.payload],
      };
    case ACTIONS.SET_RECENT_ARTICLES:
      return {
        ...state,
        recentArticles: [...action.payload],
      };
    case ACTIONS.SET_MAIN_ARTICLES:
      return {
        ...state,
        mainArticles: [...action.payload],
      };

    default:
      return state;
  }
};

export default homeReducer;
