/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable import/no-named-as-default */
import React from 'react';
import FontAwesome from 'react-fontawesome';
import PropTypes from 'prop-types';
import GridLoader from 'react-spinners/GridLoader';
import { connect } from 'react-redux';
import DeleteButton from '../../CommentForm/CommentDelete';
import './ReplyCommentCard.scss';

/**
  * renderComponent
  * @method Function Function based Component
  * @summary React component for rendering the reply card components
  * @param {object}  replies contains the replies of a comment
  * @param {Object} props - React PropTypes
  * @property {String|Object} className - String className compatible object for styling
  * @return {Node} React node containing replies form view
  */
export const ReplyCommentCard = (props) => {
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

  /**
     * Renders the component.
     *
     * @memberof app.components.Comment
     * @return {string} - HTML markup for the component
   */
  return (
    <div>
      <div className='col-md-12 text-center'>
        { props.loading
          ? (
            <div className='sweet-loading'>
              <GridLoader
                sizeUnit="px"
                size={25}
                color="#123abc"
                loading={props.loading}
              />
            </div>
          )
          : ''
    }
      </div>
      <div>
        {replies || Object.keys(replies).length !== 0 ? renderCard() : <div />}
      </div>

    </div>
  );
};

ReplyCommentCard.propTypes = {
  auth: PropTypes.object.isRequired,
  replies: PropTypes.object,
  loading: PropTypes.bool,
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
  loading: state.replies.loading,
});

export default connect(
  mapStateToProps,
  {},
)(ReplyCommentCard);
