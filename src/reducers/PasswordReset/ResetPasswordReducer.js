import {
  START_LOADING,
  STOP_LOADING,
  RESET_PASSWORD_SUCCESS,
  RESET_PASSWORD_FAILED,
  RESET_PASSWORD_ERROR,
} from '../../actions/actionTypes';

const initialState = {
  payload: '',
  status: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case START_LOADING:
      return ({
        ...state,
        payload: action.payload,
        status: 'LOADING',
      });

    case STOP_LOADING:
      return ({
        ...state,
        payload: action.payload,
        status: 'LOADING_FINISHED',
      });

    case RESET_PASSWORD_FAILED:
      return ({
        ...state,
        payload: action.payload,
        status: 'FAILED',
      });

    case RESET_PASSWORD_SUCCESS:
      return ({
        ...state,
        payload: action.payload,
        status: 'SUCCESS',
      });

    case RESET_PASSWORD_ERROR:
      return ({
        ...state,
        payload: action.payload,
        status: 'ERROR',
      });

    default:
      return (state);
  }
};
