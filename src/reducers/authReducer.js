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
    case ACTIONS.SET_CURRENT_USER_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        error: action.error,
      };

    case ACTIONS.REMOVE_CURRENT_USER_ERROR:
      return {
        ...state,
        error: {},
      };

    case ACTIONS.LOGOUT_USER:
      return {
        ...state,
        ...authDefaultState,
      };
    default:
      return state;
  }
};

export default authReducer;
