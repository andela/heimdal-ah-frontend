import { ACTIONS } from '../../actions/actionTypes';

const initialState = {
  articles: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_ALL_ARTICLES:
      console.log(state, action);
      return { ...state, articles: action.payload };
    default:
      return state;
  }
};
