import {
  START_LOADING,
  STOP_LOADING,
  UPDATE_PASSWORD_SUCCESS,
  UPDATE_PASSWORD_FAILED,
  UPDATE_PASSWORD_ERROR,
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

    case UPDATE_PASSWORD_FAILED:
      return ({
        ...state,
        payload: action.payload,
        status: 'FAILED',
      });

    case UPDATE_PASSWORD_SUCCESS:
      return ({
        ...state,
        payload: action.payload,
        status: 'SUCCESS',
      });

    case UPDATE_PASSWORD_ERROR:
      return ({
        ...state,
        payload: action.payload,
        status: 'ERROR',
      });

    default:
      return (state);
  }
};
