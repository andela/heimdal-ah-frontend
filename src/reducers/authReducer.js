import { SET_AUTH_USER } from '../actions/actionTypes';

const authDefaultState = {
  isAuthenticated: false,
};

const authReducer = (state = authDefaultState, action) => {
  switch (action.type) {
    case SET_AUTH_USER:
      return {
        ...action.payload,
      };

    default:
      return state;
  }
};

export default authReducer;
