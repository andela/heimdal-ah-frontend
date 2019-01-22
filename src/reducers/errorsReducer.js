import { SET_ERRORS, REMOVE_AN_ERROR } from '../actions/actionTypes';

const errorsReducer = (state = {}, action) => {
  switch (action.type) {
    case SET_ERRORS:
      return { ...action.payload };

    case REMOVE_AN_ERROR:
      return { ...state, [action.errorName]: '' };

    default:
      return state;
  }
};

export default errorsReducer;
