import isEmpty from 'is-empty';
import {
  SET_CURRENT_USER,
  LOG_OUT,
} from '../actions/actionTypes';

const initialState = {
  isAuthenticated: false,
  user: {},
  error: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.user),
        user: action.user,
      };
    case LOG_OUT:
      return {
        ...state,
        ...initialState,
      };
    default: return state;
  }
};
