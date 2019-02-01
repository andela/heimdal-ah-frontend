/* eslint-disable react/no-unused-state */
import { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import uploadImage from '../../utils/uploadImage';
import { updateProfile } from '../../actions/profile/profileActions';

/**
 * @description - Profile Edit Container Component
 * @param {props} props - props containing profile details
 * @returns {component} Component
 */
class ProfileEditContainer extends Component {
  state = {
    image: this.props.profile.image || 'https://avatars.mds.yandex.net/get-pdb/938499/43932b0d-b15b-4962-ab61-cc93e0b1b5ed/orig',
    biodata: this.props.profile.biodata || '',
    location: this.props.profile.location || '',
    username: this.props.profile.username || '',
    firstName: this.props.profile.firstName || '',
    lastName: this.props.profile.lastName || '',
    flashMessage: {
      showFlash: false,
      type: 'success',
      message: '',
      title: '',
    },
  };

  componentDidMount() {
    if (!Object.keys(this.props.profile).length) {
      this.props.history.push(`/${this.props.username}`);
    }
  }

  sendProps = () => ({
    profile: this.state,
    onChange: this.handleChange,
    handleSubmit: this.handleSubmit,
    handleCancel: this.handleCancel,
  });

  toggleFlashMessage = (message, type, title) => {
    this.setState(prevState => ({
      ...prevState,
      flashMessage: {
        showFlash: !prevState.flashMessage.showFlash,
        type: type || 'success',
        message: message || '',
        title: title || '',
      },
    }));
  }

  handleChange = async (event) => {
    if (event.target.name !== 'image') {
      this.setState({ [event.target.name]: event.target.value });
    } else {
      const file = event.target.files[0];
      const imageUrl = await uploadImage(file);
      this.setState({ image: imageUrl.secure_url });
    }
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { actions, username, history } = this.props;
    const body = this.state;

    actions.updateProfile(username, body, history, this.toggleFlashMessage);
  };

  handleCancel = (event) => {
    event.preventDefault();
    this.props.history.push(`/${this.state.username}`);
  };

  render() {
    return this.props.children(this.sendProps());
  }
}

const mapStateToProps = state => ({
  profile: state.profile.profile,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators({ updateProfile }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileEditContainer));
