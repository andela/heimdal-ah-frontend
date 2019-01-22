import { Component } from 'react';
// import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import login from '../actions/auth/login';
import validateLogin from '../validations/authValidations';

class AuthContainer extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
  };

  onChange = (e) => {
    const { errors } = this.state;
    if (errors[e.target.name]) {
      const allErrors = { ...errors };
      delete allErrors[e.target.name];
      this.setState({
        [e.target.name]: e.target.value,
        errors,
      });
    } else {
      this.setState({
        [e.target.name]: e.target.value,
      });
    }
  };

  onLoginSubmit = (e) => {
    const { action } = this.props;
    e.preventDefault();
    if (this.isValid()) {
      this.setState({ errors: {} });
      action.signinUser(this.state);
    }
  };

  isValid = () => {
    const { errors, isValid } = validateLogin(this.state);
    if (!isValid) {
      this.setState({ errors, password: '' });
    }

    return isValid;
  }

  sendProps = () => ({
    ...this.props,
    ...this.state,
    onChange: this.onChange,
    onLoginSubmit: this.onLoginSubmit,
  })

  render() {
    return this.props.children(this.sendProps());
  }
}


const mapStateToProps = state => ({
  auth: state.auth.isAuthenticated,
  error: state.auth.error,
});

const matchDispatchToProps = dispatch => ({
  action: bindActionCreators(
    {
      signinUser: login,
    },
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(AuthContainer);
