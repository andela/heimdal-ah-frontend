import { ACTIONS } from '../../actions/actionTypes';

const initialState = {
  error: '',
  profile: {},
  articles: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_PROFILE:
      return { ...state, profile: action.profile };

    case ACTIONS.GET_ARTICLES_BY_AUTHOR:
      return { ...state, articles: action.articles };

    case ACTIONS.GETTING_PROFILE_ERROR:
      return { ...state, error: action.error };

    default:
      return state;
  }
};
