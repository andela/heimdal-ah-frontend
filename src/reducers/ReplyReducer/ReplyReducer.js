import { ACTIONS } from '../../actions/actionTypes';

const initialState = {
  loading: false,
  replyError: null,
  status: null,
};

/**
 * Call the returned function to pass actions to Redux-ORM.
 *
 * @global
 *
 * @param {ORM} orm - the ORM instance.
 * @return {Function} reducer that will update the ORM state.
 */
export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.DATA_LOADING_REPLY:
      return {
        ...state,
        loading: true,
      };

    case ACTIONS.GET_COMMENT_REPLY: {
      return { ...state, ...action.payload, loading: false };
    }

    case ACTIONS.POST_COMMENT_REPLY: {
      // let replies = state[action.payload.commentId] || [];
      // replies = [action.payload.reply].concat(replies);

      return {
        ...state,
        [action.payload.commentId]: [
          action.payload.reply,
          ...(state[action.payload.commentId] || []),
        ],
        loading: false,
      };
    }

    case ACTIONS.ARCHIVE_COMMENT_REPLY: {
      let replies = state[action.payload.commentId];
      const { replyId } = action.payload;
      replies = replies.filter(item => item.id !== replyId);

      return {
        ...state,
        [action.payload.commentId]: replies,
        loading: false,
      };
    }

    case ACTIONS.GET_ERRORS:
      return {
        ...state,
        replyError: action.payload,
        status: 'Warning',
        loading: false,
      };

    default:
      return state;
  }
};
