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

    case ACTIONS.FOLLOW_USER:
      return {
        error: state.error,
        articles: state.articles,
        profile: {
          ...state.profile,
          followers: [...state.profile.followers, { followerId: action.payload }],
        },
      };

    case ACTIONS.UNFOLLOW_USER:
      return {
        error: state.error,
        articles: state.articles,
        profile: {
          ...state.profile,
          followers: state.profile.followers.filter(item => item.followerId !== action.payload),
        },
      };

    default:
      return state;
  }
};
