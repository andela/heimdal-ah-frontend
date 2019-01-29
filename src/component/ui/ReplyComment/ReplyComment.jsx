/* eslint-disable no-unused-expressions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import FontAwesome from 'react-fontawesome';
import ReplyCommentCard from './ReplyCommentCard/ReplyCommentCard';
import ReplyCommentForm from './ReplyCommentForm/ReplyCommentForm';
import { getCommentReplies } from '../../../actions/ReplyActions/ReplyAction';

class ReplyComment extends Component {
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
                <ReplyCommentCard replies={this.state.replies} commentId={this.props.commentId} />
                <ReplyCommentForm commentId={this.props.commentId} />
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
