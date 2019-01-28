/* eslint-disable react/no-unused-state */
import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

class ProfileEditContainer extends Component {
  state = {
    image: this.props.profile.image || 'https://avatars.mds.yandex.net/get-pdb/938499/43932b0d-b15b-4962-ab61-cc93e0b1b5ed/orig',
    biodata: this.props.profile.biodata || '',
    location: this.props.profile.location || '',
    username: this.props.profile.username || '',
    firstName: this.props.profile.firstName || '',
    lastName: this.props.profile.lastName || '',
  };

  sendProps = () => ({
    profile: this.state,
    onChange: this.handleChange,
    handleSubmit: this.handleSubmit,
    handleCancel: this.handleCancel,
  });

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleCancel = (event) => {
    event.preventDefault();
    this.props.history.push('/profile');
  };

  render() {
    return this.props.children(this.sendProps());
  }
}

const mapStateToProps = state => ({
  profile: state.profile.profile,
});

// const mapDispatchToProps = dispatch => ({
//   // profileActions: bindActionCreators(profileActions, dispatch),
// });

export default connect(mapStateToProps)(withRouter(ProfileEditContainer));
