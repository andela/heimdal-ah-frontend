import {
  HIDE_MODAL,
  SHOW_MODAL,
  TOGGLE_MODAL,
} from '../actions/actionTypes';

const initialState = {
  display: false,
  type: null,
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

    case TOGGLE_MODAL:
      return {
        ...state,
        display: !state.display,
        type: action.type,
      };
    default: return state;
  }
};
