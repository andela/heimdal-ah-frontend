import { GET_ALL_PROFILE } from '../actions/actionTypes';

const initialState = {
  profile: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_PROFILE:
      return {
        ...state,
        profile: action.payload,
      };
    default:
      return state;
  }
};
