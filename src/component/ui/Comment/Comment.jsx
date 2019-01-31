import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
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
class Comment extends Component {
  componentDidMount() {
    this.props.getArticleComment(1);
  }

  /**
     * Renders the component.
     *
     * @memberof app.components.Comment
     * @return {string} - HTML markup for the component
   */
  render() {
    return (
      <Fragment>
        <div className='comment-header'>
        Comment
        </div>
        <CommentCard />
        <div className='comment__form'>
          <CommentForm />
        </div>
      </Fragment>
    );
  }
}

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

export default connect(mapStateToProps, { getArticleComment })(Comment);
