/* eslint-disable max-len */
import { ACTIONS } from '../../actions/actionTypes';

const initialState = {
  error: '',
  data: '',
  loading: false,
  userProfile: '',
  getData: '',
  toggleData: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.NOTIFICATION_LOADER:
      return ({
        ...state,
        loading: true,
      });

    case ACTIONS.CHECK_SUBSCRIPTION: {
      return ({
        ...state,
        userProfile: action.payload,
        loading: false,
      });
    }

    case ACTIONS.SUBSCRIBE_TO_NOTIFICATION: {
      return ({
        ...state,
        data: action.payload,
        loading: false,
      });
    }

    case ACTIONS.GET_USER_NOTIFICATION: {
      return ({
        ...state,
        getData: action.payload,
        loading: false,
      });
    }

    case ACTIONS.USER_INSTANT_NOTIFICATION: {
      const data = { count: state.getData.count + 1, rows: state.getData.rows.concat(action.payload) };
      return ({
        ...state,
        getData: data,
        loading: false,
      });
    }

    case ACTIONS.TOGGLE_NOTIFICATION_READ: {
      const notifications = state.getData.rows.map(notification => (notification.id !== action.payload ? notification : { ...notification, isRead: true }));
      return ({
        ...state,
        getData: {
          ...state.getData,
          rows: notifications,
        },
        loading: false,
      });
    }
    default:
      return state;
  }
};
