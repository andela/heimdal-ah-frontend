import isEmpty from 'is-empty';
import { ACTIONS } from '../actions/actionTypes';

const initialState = {
  isAuthenticated: false,
  user: {},
  error: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        user: action.user,
      };
    case ACTIONS.SET_CURRENT_USER_FAIL:
      return {
        ...state,
        isAuthenticated: false,
        user: {},
        error: action.error,
      };

    case ACTIONS.REMOVE_CURRENT_USER:
      return {
        ...state,
        ...initialState,
      };
    default: return state;
  }
};
