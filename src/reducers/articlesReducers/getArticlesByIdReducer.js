/* eslint-disable no-case-declarations */
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

    case ACTIONS.LIKE_ARTICLE:
      const likes = (state.payload.likes.some(item => item.userId === action.userId))
        ? state.payload.likes.filter(item => item.userId !== action.userId)
        : [...state.payload.likes, { userId: action.userId }];
      return {
        status: state.status,
        payload: { ...state.payload, likes },
      };

    default:
      return (state);
  }
};
