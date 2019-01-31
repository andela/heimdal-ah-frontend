import { ACTIONS } from '../../actions/actionTypes';

const initialState = {
  loading: false,
  replyError: null,
  status: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.DATA_LOADING:
      return {
        ...state,
        loading: true,
      };

    case ACTIONS.GET_COMMENT_REPLY: {
      return { ...state, ...action.payload };
    }

    case ACTIONS.POST_COMMENT_REPLY: {
      let replies = state[action.payload.commentId];
      replies = [action.payload.reply].concat(replies);
      return ({
        ...state,
        [action.payload.commentId]: replies,
      });
    }

    case ACTIONS.ARCHIVE_COMMENT_REPLY: {
      let replies = state[action.payload.commentId];
      const { replyId } = action.payload;
      replies = replies.filter(item => item.id !== replyId);

      return ({
        ...state,
        [action.payload.commentId]: replies,
      });
    }

    case ACTIONS.GET_ERRORS:
      return ({
        ...state,
        replyError: action.payload,
        status: 'Warning',
      });

    default:
      return state;
  }
};
