import { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import * as profileActions from '../../actions/profileActions/profileActions';

class ProfileContainer extends Component {
  componentWillMount() {
    const username = this.props.username || this.props.user.username;
    this.props.profileActions.getArticlesByAuthor(username);
    this.props.profileActions.getProfile(username, this.props.history);
  }

  handleEditButtonClick = () => this.props.history.push('/profile/edit');

  handleFollowButtonClick = () => console.log('follow button is pressed');

  sendProps = () => ({
    articles: this.props.articles,
    profile: this.props.profile,
    onClick: this.props.username ? this.handleFollowButtonClick : this.handleEditButtonClick,
  });

  render() {
    return this.props.children(this.sendProps());
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  profile: state.profile.profile,
  articles: state.profile.articles.rows,
});

const mapDispatchToProps = dispatch => ({
  profileActions: bindActionCreators(profileActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));
