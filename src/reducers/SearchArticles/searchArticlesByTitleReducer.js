import {
  ACTIONS,
} from '../../actions/actionTypes';

const initialState = {
  payload: '',
  status: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.RESET_SEARCH_ARTICLES_BY_TITLE_STATE:
      return ({
        ...state,
        payload: '',
        status: '',
      });

    case ACTIONS.SEARCH_ARTICLES_BY_TITLE_FAILED:
      return ({
        ...state,
        payload: action.payload,
        status: 'FAILED',
      });

    case ACTIONS.SEARCH_ARTICLES_BY_TITLE_SUCCESS:
      return ({
        ...state,
        payload: action.payload,
        status: 'SUCCESS',
      });

    case ACTIONS.SEARCH_ARTICLES_BY_TITLE_ERROR:
      return ({
        ...state,
        payload: action.payload,
        status: 'ERROR',
      });

    default:
      return (state);
  }
};
