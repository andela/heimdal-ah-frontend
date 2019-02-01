/* eslint-disable react/require-default-props */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable import/no-named-as-default */
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CommentCard from '../CommentCard/CommentCard';
import './Comment.scss';
import CommentForm from '../CommentForm/CommentForm';
import { getArticleComment } from '../../../actions/CommentActions/CommentActions';


/**
  * renderComponent
  * @method Class Class based Component
  * @summary React component for rendering the card components
  * @param {object}  comment contains the comments of an article
  * @param {Object} props - React PropTypes
  * @property {String|Object} className - String className compatible object for styling
  * @return {Node} React node containing comment card view
  */
export class Comment extends Component {
  componentDidMount() {
    const { articleId } = this.props;
    if (articleId) {
      this.props.getArticleComment(articleId);
    }
  }

  /**
     * Renders the component.
     *
     * @memberof app.components.Comment
     * @return {string} - HTML markup for the component
   */
  render() {
    const { user, articleId } = this.props;
    return (
      <Fragment>
        <div className='comment-header'>
        Comment
        </div>
        { user.isAuthenticated
          ? (

            <CommentCard loading={this.props.loading} />
          )
          : ''
        }

        <div className='comment__form'>
          <CommentForm articleId={articleId} />
        </div>
      </Fragment>
    );
  }
}

Comment.propTypes = {
  getArticleComment: PropTypes.func,
  comment: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  status: PropTypes.bool,
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
  loading: state.comment.loading,
  status: state.state,
  user: state.auth,
  error: state.comment.error,
});

export default connect(mapStateToProps, { getArticleComment })(Comment);
