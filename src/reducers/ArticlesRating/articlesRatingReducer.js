import {
  ACTIONS,
} from '../../actions/actionTypes';

const initialState = {
  payload: '',
  status: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.RESET_ARTICLES_RATING_STATE:
      return ({
        ...state,
        payload: '',
        status: '',
      });

    case ACTIONS.ARTICLES_RATING_SUCCESS:
      return ({
        ...state,
        payload: action.payload,
        status: 'SUCCESS',
      });

    case ACTIONS.ARTICLES_RATING_ERROR:
      return ({
        ...state,
        payload: action.payload,
        status: 'ERROR',
      });

    default:
      return (state);
  }
};
