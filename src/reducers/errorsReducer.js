import { SET_ERRORS, REMOVE_AN_ERROR, CLEAR_ERRORS } from '../actions/actionTypes';

const errorsReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return { ...action.payload };

    case REMOVE_AN_ERROR:
      return { ...state, [action.errorName]: '' };

    case CLEAR_ERRORS:
      return {};

    default:
      return state;
  }
};

export default errorsReducer;
