import {
  HIDE_MODAL,
} from '../actions/actionTypes';

const initialState = {
  display: true,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HIDE_MODAL:
      return {
        ...state,
        display: action.display,
      };
    default: return state;
  }
};
