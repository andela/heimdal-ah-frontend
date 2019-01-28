/* eslint-disable react/jsx-filename-extension */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-shadow */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import FollowButton from '../component/ui/Buttons/Button.jsx';
import { getAllFollowers, followUser, unfollowUser } from '../actions/Follow/userFollowAction';

/**
 * Follow user class
 * @returns followUser class object
 */
class FollowUser extends Component {
  constructor() {
    super();

    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    const { getAllFollowers } = this.props.actions;

    getAllFollowers();
  }

  onClick() {
    const {
      unfollowUser, followUser,
    } = this.props.actions;
    const { match, followers } = this.props;
    const { params } = match;
    const followerId = parseInt(params.userId, 10);

    if (followers.includes(followerId)) {
      unfollowUser(followerId);
    } else {
      followUser(followerId);
    }
  }

  render() {
    const { followers, match } = this.props;
    const { params } = match;
    const followerId = parseInt(params.userId, 10);

    return (
      <FollowButton
        type='follow'
        props={this.props.followers}
        label={followers.includes(followerId) ? 'Unfollow' : 'Follow'}
        onClick={this.onClick}
      />
    );
  }
}
const matchDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      getAllFollowers,
      followUser,
      unfollowUser,
    },
    dispatch,
  ),
});

const mapStateToProps = state => ({
  followers: state.followers.followers.data
    ? state.followers.followers.data.map(user => user.followedId)
    : [],
});

export default withRouter(connect(mapStateToProps, matchDispatchToProps)(FollowUser));
