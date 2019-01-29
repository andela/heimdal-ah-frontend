import { ACTIONS } from '../actions/actionTypes';

const initialState = {
  isLoading: false,
};

const loaderReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.TOGGLE_LOADER:
      return {
        isLoading: !state.isLoading,
      };

    default:
      return state;
  }
};

export default loaderReducer;
