import { ACTIONS } from '../../actions/actionTypes';

const initialState = {
  profile: {},
  articles: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_PROFILE:
      return { ...state, profile: action.profile };

    case ACTIONS.GET_ARTICLES_BY_AUTHOR:
      return { ...state, articles: action.articles };

    default:
      return state;
  }
};
