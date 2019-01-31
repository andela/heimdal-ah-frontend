import {
  ACTIONS,
} from '../../actions/actionTypes';

const initialState = {
  payload: '',
  status: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.GET_ARTICLES_BY_ID_RESET_STATE:
      return ({
        ...state,
        payload: '',
        status: '',
      });

    case ACTIONS.GET_ARTICLES_BY_ID_SUCCESS:
      return ({
        ...state,
        payload: action.payload,
        status: 'SUCCESS',
      });

    case ACTIONS.GET_ARTICLES_BY_ID_ERROR:
      return ({
        ...state,
        payload: action.payload,
        status: 'ERROR',
      });

    default:
      return (state);
  }
};
