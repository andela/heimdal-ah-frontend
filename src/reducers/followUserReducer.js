import { FOLLOW_USER, GET_ALL_FOLLOWERS, UNFOLLOW_USER } from '../actions/actionTypes';

const initialState = {
  message: '',
  followers: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_FOLLOWERS:
      return {
        ...state,
        followers: action.payload,
      };
    case FOLLOW_USER:
      return {
        message: action.payload.message,
        followers: { data: [...state.followers.data, { followedId: action.payload.followedId }] },
      };
    case UNFOLLOW_USER:
      return {
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
