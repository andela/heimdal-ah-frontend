import React from 'react';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';
import DeleteButton from '../../CommentForm/CommentDelete';
import './ReplyCommentCard.scss';

const ReplyCommentCard = (props) => {
  const { user } = props.auth;
  let replies = props.replies[props.commentId];
  replies = replies || [];
  const renderCard = () => replies.map(item => (
    <section key={item.id} className="comment-section container">
      <div className="comment-card row">
        <div className="comment-image col-md-2 col-sm-2">
          <img className="comment-card-img" src={item.profile.image} alt="user-comment-logo" />
        </div>
        <div className="comment-card-body col-md-9 col-sm-9">
          <div className="comment-body-top">
            <span className="reply-name">{item.profile.username}</span>
            <span className="comment-date small_text">
              <FontAwesome name="clock" className="fav_icons" />
            </span>
            <span className="small_text">
              <FontAwesome name="calendar" className="fav_icons" />
                09: 00 am
            </span>
            { item.userId === user.userId
              ? <DeleteButton replyId={item.id} buttonName='reply' commentId={props.commentId} />
              : <div />
            }
          </div>
          <div className="reply-body">{item.content}</div>
          <div className="comment-body-footer">
            <span />
            <span />
          </div>
        </div>
      </div>
    </section>
  ));

  return <div>{replies || Object.keys(replies).length !== 0 ? renderCard() : <div />}</div>;
};

const mapStateToProps = state => ({
  auth: state.auth,
  replies: state.replies,
});

export default connect(
  mapStateToProps,
  {},
)(ReplyCommentCard);
