import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

/**
 * @description - Fetch users comments
 * @param {props} comments - the comments returned from dispatching actions
 * @param {props} action- the action been dispatched
 * @returns {component} Component
 */
class Comments extends Component {
  componentDidMount = () => {
    const { action } = this.props;
    action.fetchComments();
  };

  render() {
    const { comments } = this.props;
    return (
      <div />
    );
  }
}

Comments.propTypes = {
  comments: PropTypes.instanceOf(Array),
  action: PropTypes.instanceOf(Object)
};

const mapStateToProps = state => ({
  comments: state.commentsReducer.comments
});

const matchDispatchToProps = dispatch => ({
  action: bindActionCreators(
    {
      fetchComments,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, matchDispatchToProps)(Comments);
