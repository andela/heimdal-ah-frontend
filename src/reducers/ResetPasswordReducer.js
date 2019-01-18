import {
  GLOBAL_START_LOADING,
  GLOBAL_STOP_LOADING,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_ERROR,
} from '../actions/actionTypes';

const initialState = {
  payload: '',
  status: '',
  error: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GLOBAL_START_LOADING:
      return ({
        ...state,
        payload: action.payload,
        status: 'LOADING',
        error: '',
      });

    case GLOBAL_STOP_LOADING:
      return ({
        ...state,
        payload: action.payload,
        status: 'LOADING_FINISHED',
        error: '',
      });

    case RESET_PASSWORD_FAILED:
      return ({
        ...state,
        payload: action.payload,
        status: 'FAILED',
        error: '',
      });

    case RESET_PASSWORD_SUCCESS:
      return ({
        ...state,
        payload: action.payload,
        status: 'SUCCESS',
        error: '',
      });

    case RESET_PASSWORD_ERROR:
      return ({
        ...state,
        payload: action.payload,
        status: 'ERROR',
        error: action.error,
      });

    default:
      return (state);
  }
};
