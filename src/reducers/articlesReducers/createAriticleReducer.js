import { ACTIONS } from '../../actions/actionTypes';

const intialState = {
  title: '',
  body: '',
};

export default (state = intialState, action) => {
  switch (action.type) {
    case ACTIONS.NEW_ARTICLE:
      return {
        title: action.payload.title,
        body: action.payload.body,
      };

    case ACTIONS.NEW_ARTICLE_ERROR: {
      return {
        title: null,
        body: null,
      };
    }
    default:
      return state;
  }
};
