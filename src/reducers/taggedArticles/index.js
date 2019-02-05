import { ACTIONS } from '../../actions/actionTypes';

const initialState = [];

const taggedArticlesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.SET_TAGGED_ARTICLES:
      return [...action.payload];

    default:
      return state;
  }
};

export default taggedArticlesReducer;
