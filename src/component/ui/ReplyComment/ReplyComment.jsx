/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable import/no-named-as-default */
/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import ReplyCommentCard from './ReplyCommentCard/ReplyCommentCard';
import ReplyCommentForm from './ReplyCommentForm/ReplyCommentForm';
import { getCommentReplies } from '../../../actions/ReplyActions/ReplyAction';

/**
  * renderComponent
  * @method Class Class based Component
  * @summary React component for rendering the card components
  * @param {object}  replies contains the replies of a comment
  * @param {Object} props - React PropTypes
  * @property {String|Object} className - String className compatible object for styling
  * @return {Node} React node containing comment form view
  */
export class ReplyComment extends Component {
  state = {
    showReplies: false,
  };

  fetchReplies = (e) => {
    e.preventDefault();

    const { showReplies } = this.state;
    this.setState({
      showReplies: !showReplies,
    });
    !this.state.showReplies && this.props.getCommentReplies(this.props.commentId);
  };

  /**
     * Renders the component.
     *
     * @memberof app.components.ReplyComment
     * @return {string} - HTML markup for the component
   */
  render() {
    return (
      <div>
        <div
          role="searchbox"
          onKeyPress={e => this.fetchReplies(e)}
          onClick={e => this.fetchReplies(e)}
          className="reply_button"
          tabIndex="-1"
        >
          <FontAwesome name="comments" className="fav_icons" />
          Reply
        </div>
        {this.state.showReplies ? (
          <div>
            {this.props.replies ? (
              <div>
                {
                  this.props.commentId
                  && (
                  <div>
                    <ReplyCommentCard
                      replies={this.props.replies}
                      commentId={this.props.commentId}
                    />
                    <ReplyCommentForm commentId={this.props.commentId} />
                  </div>
                  )

                }
              </div>
            ) : (
              <div>No reply found</div>
            )}
          </div>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

ReplyComment.propTypes = {
  getCommentReplies: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  replies: PropTypes.object,
};

/**
 * @method module:Reactator.ReduxContainerBuilderMapStateToProps
 *
 * @param {function} mapStateToProps - function mapping redux state to props
 *
 * @return {ReduxContainerBuilder} this builder
*/
const mapStateToProps = state => ({
  auth: state.auth,
  replies: state.replies,
  replyFormError: state.replies.replyError,
  status: state.replies.status,
});

export default connect(
  mapStateToProps,
  { getCommentReplies },
)(ReplyComment);
