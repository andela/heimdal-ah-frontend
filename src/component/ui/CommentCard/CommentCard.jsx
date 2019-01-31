import React from 'react';
import { connect } from 'react-redux';
import './CommentCard.scss';
import FontAwesome from 'react-fontawesome';
import { getArticleComment } from '../../../actions/CommentActions/CommentActions';
import DeleteButton from '../CommentForm/CommentDelete';
import ReplyComment from '../ReplyComment/ReplyComment';
import Ellipse from '../Elllipse/Ellipse';

/**
  * renderComponent
  * @method
  * @summary React component for displaying a the comment card
  * @param {object}  comment contains the comments of an article
  * @param {Object} props - React PropTypes
  * @property {String|Object} className - String className compatible object for styling
  * @return {Node} React node containing comment card view
*/

const CommentCard = (props) => {
  const { user } = props.user;
  let { comments } = props;
  comments = comments || [];
  const renderCard = () => comments.map(item => (
    <section key={item.id} className="comment-section container">
      <div className="comment-card row">
        <div className="comment-image col-md-2 col-sm-2">
          <img
            className="comment-card-img"
            src={item.profile.image}
            alt='user-comment-logo'
          />
        </div>
        <div className="comment-card-body col-md-9 col-sm-9">
          <div className="comment-body-top">
            <span className='comment-name'>{item.profile.username}</span>
            <span className='comment-date small_text'>
              <FontAwesome name='clock' className='fav_icons' />
              {item.createdAt}
            </span>
            <span className='small_text'>
              <FontAwesome name='calendar' className='fav_icons' />
              09: 00 am
            </span>
            <Ellipse articleId={item.articleId} commentId={item.id} />
            { item.userId === user.userId
              ? <DeleteButton buttonName='comment' commentId={item.id} />
              : <div />
            }
          </div>
          <div className="comment-body">
            {item.content}
          </div>
          <div className="comment-body-footer">
            <span>
              <ReplyComment commentId={item.id} />
            </span>
            <span>
              {' '}
            </span>
          </div>
        </div>
      </div>
    </section>
  ));

  /**
     * Returns the jsx of the component.
     *
     * @memberof app.components.CommentCard
     * @return {string} - HTML markup for the component
   */

  return (
    <div>
      {
      renderCard()
    }
    </div>
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
  comments: state.comment.comments,
  user: state.auth,
});

export default connect(mapStateToProps, { getArticleComment })(CommentCard);
