import { ACTIONS } from '../../actions/actionTypes';

const initialState = {
  message: '',
  followers: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_ALL_FOLLOWERS:
      return {
        ...state,
        followers: action.payload,
      };
    case ACTIONS.FOLLOW_USER:
      return {
        ...state,
        message: action.payload.message,
        followers: { data: [...state.followers.data, { followedId: action.payload.followedId }] },
      };
    case ACTIONS.UNFOLLOW_USER:
      return {
        ...state,
        message: action.payload.message,
        followers: {
          data: state.followers.data
            .filter(item => item.followedId !== action.payload.followedId),
        },
      };
    default:
      return state;
  }
};
