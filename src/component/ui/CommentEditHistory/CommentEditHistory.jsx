import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import moment from 'moment';
import TimeAgo from 'javascript-time-ago';
import english from 'javascript-time-ago/locale/en';
import
fetchCommentEditHistory
  from '../../../actions/CommentEditHistory/CommentEditHistory';
import './CommentEditHistory.scss';

TimeAgo.addLocale(english);
const timeAgo = new TimeAgo('en-US');

/**
 * @description - CommentHistory class
 */
class CommentEditHistory extends Component {
  componentDidMount() {
    const { actions, articleId, commentId } = this.props;
    actions(fetchCommentEditHistory(articleId, commentId));
  }

  render() {
    const { commentHistory } = this.props;
    return (
      !commentHistory || commentHistory.length === 0
        ? <p className='no-c'>No edit history</p>
        : (
          <ul className='history-list'>
            {
              commentHistory.map(item => (
                <li className='history-item' key={item.id}>
                  <p>{item.content}</p>
                  <i className="far fa-clock updated-time float-right">
                    {' '}
                    <span>{timeAgo.format(moment(item.createdAt).valueOf())}</span>
                  </i>
                </li>
              ))
            }
          </ul>
        )
    );
  }
}

CommentEditHistory.propType = {
  commentHistory: PropTypes.instanceOf(Array),
};
const mapStateToProps = state => ({
  commentHistory: state.commentHistory.commentHistory.commentHistory,
});

const mapDispatchToProps = dispatch => ({
  actions: action => dispatch(action),
});
export default connect(mapStateToProps, mapDispatchToProps)(CommentEditHistory);
