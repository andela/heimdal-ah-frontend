import React from 'react';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import { deleteArticleComment } from '../../../actions/CommentActions/CommentActions';
import { deleteCommentReplies } from '../../../actions/ReplyActions/ReplyAction';

/**
  * renderComponent
  * @method Function Function based Component
  * @summary React component for rendering the card components
  * @param {Object} props - React PropTypes
  * @property {String|Object} className - String className compatible object for styling
  * @return {Node} React node containing delete comment and replies
  */
const DeleteButton = (props) => {
  const deleteComment = (e) => {
    e.preventDefault();
    const { commentId, buttonName, replyId } = props;
    if (buttonName === 'comment') {
      props.deleteArticleComment(1, commentId);
    } else {
      props.deleteCommentReplies(commentId, replyId);
    }
  };

  /**
     * Renders the component.
     *
     * @memberof app.components.Comment
     * @return {string} - HTML markup for the component
   */

  return (
    <button className='archive_button btn btn-danger' onClick={e => deleteComment(e)} type='submit'><FontAwesome name='trash' className='' /></button>
  );
};

/**
 * @method module:Reactator.ReduxContainerBuilderMapStateToProps
 *
 * @param {function} mapStateToProps - function mapping redux state to props
 *
 * @return {ReduxContainerBuilder} this builder
*/
const mapStateToProps = state => ({
  comment: state.comment,
});

export default connect(
  mapStateToProps,
  {
    deleteArticleComment, deleteCommentReplies,
  },
)(DeleteButton);
