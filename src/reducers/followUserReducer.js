import { FOLLOW_USER } from '../actions/actionTypes';

const initialState = {
  message: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW_USER:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};
