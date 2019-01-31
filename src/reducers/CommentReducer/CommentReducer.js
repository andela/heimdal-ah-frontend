import { ACTIONS } from '../../actions/actionTypes';


const initialState = {
  comments: [],
  loading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ACTIONS.DATA_LOADING:
      return ({
        ...state,
        loading: true,
      });

    case ACTIONS.GET_ARTICLE_COMMENT: {
      const comments = action.payload;
      return ({
        ...state,
        comments,
        loading: false,
      });
    }

    case ACTIONS.POST_ARTICLE_COMMENT: {
      // note the state is the comments existing
      // while the action.payload is the newly created comment.
      let { comments } = state;
      comments = comments.concat(action.payload);
      return ({
        ...state,
        comments: comments.reverse(),
      });
    }

    case ACTIONS.ARCHIVE_COMMENT: {
      let { comments } = state;
      const { commentId } = action.payload;
      comments = comments.filter(item => item.id !== commentId);
      return ({
        ...state,
        comments,
      });
    }

    case ACTIONS.GET_ERRORS:
      return ({
        ...state,
        payload: action.payload,
      });

    default:
      return state;
  }
};
