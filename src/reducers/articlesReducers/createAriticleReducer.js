import ACTIONS from '../../actions/actionTypes';

const intialState = {
  title: '',
  body: '',
};

export default (state = intialState, action) => {
  switch (action.type) {
    case ACTIONS.CREATE_ARTICLE:
      return {
        ...state,
        title: action.payload.title,
        body: action.payload.body,
        status: 'SUCCESS',
        payload: action.payload,
      };

    case ACTIONS.CREATE_ARTICLE_ERROR: {
      return {
        ...state,
        title: null,
        body: null,
        status: 'FAILED',
        payload: action.payload,
      };
    }
    default:
      return state;
  }
};
