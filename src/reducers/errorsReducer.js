import { ACTIONS } from '../actions/actionTypes';

const errorsReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.SET_ERRORS:
      return { ...action.payload };

    case ACTIONS.REMOVE_AN_ERROR:
      return { ...state, [action.errorName]: '' };

    case ACTIONS.CLEAR_ERRORS:
      return {};

    default:
      return state;
  }
};

export default errorsReducer;
