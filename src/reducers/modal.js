import {
  HIDE_MODAL,
  SHOW_MODAL,
} from '../actions/actionTypes';

const initialState = {
  display: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case HIDE_MODAL:
      return {
        ...state,
        display: false,
      };
    case SHOW_MODAL:
      return {
        ...state,
        display: true,
      };
    default: return state;
  }
};
