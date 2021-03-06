import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as profileActions from '../../actions/profile/profileActions';

/**
 * @description - Profile Container Component
 * @param {props} props - props containing profile details
 * @returns {component} Component
 */
class ProfileContainer extends Component {
  state = {
    flashMessage: {
      showFlash: false,
      type: 'success',
      message: '',
      title: '',
    },
  }

  componentDidMount() {
    const { username } = this.props;
    this.props.profileActions.getArticlesByAuthor(username);
    this.props.profileActions.getProfile(username);
  }

  toggleFlashMessage = () => {
    this.setState(prevState => ({
      ...prevState,
      flashMessage: {
        showFlash: !prevState.flashMessage.showFlash,
        type: 'warning',
        message: 'Please login to perform this operation',
        title: 'Follow Alert',
      },
    }));
  }


  handleEditButtonClick = () => this.props.history.push(`${this.props.username}/edit`);

  handleFollowButtonClick = () => {
    const { user, profile: { followers, id } } = this.props;
    if (!user.userId) {
      this.toggleFlashMessage();
      setTimeout(this.toggleFlashMessage, 2000);
    } else if (followers.filter(item => item.followerId === user.userId).length) {
      this.props.profileActions.unfollowUser(id, user.userId);
    } else {
      this.props.profileActions.followUser(id, user.userId);
    }
  }

  sendProps = () => ({
    error: this.props.error,
    loggedInUser: this.props.user,
    articles: this.props.articles,
    profile: this.props.profile,
    flashMessage: this.state.flashMessage,
    onClick: this.props.username === this.props.user.username
      ? this.handleEditButtonClick : this.handleFollowButtonClick,
  });

  render() {
    return this.props.children(this.sendProps());
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  profile: state.profile.profile,
  articles: state.profile.articles.rows,
  error: state.profile.error,
});

const mapDispatchToProps = dispatch => ({
  profileActions: bindActionCreators(profileActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));
