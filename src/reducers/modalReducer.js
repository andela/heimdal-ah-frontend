import { ACTIONS } from '../actions/actionTypes';

const initialState = {
  display: false,
};

const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_MODAL:
      return {
        display: !state.display,
      };

    default:
      return state;
  }
};

export default modalReducer;
