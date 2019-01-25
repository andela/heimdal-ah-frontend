import { ACTIONS } from '../actions/actionTypes';
import isEmpty from '../utils/isEmpty';

const authDefaultState = {
  isAuthenticated: false,
  user: {},
};

const authReducer = (state = authDefaultState, action) => {
  switch (action.type) {
    case ACTIONS.SET_AUTH_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: { ...action.payload },
      };

    default:
      return state;
  }
};

export default authReducer;
