import { Component } from 'react';
// import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import signin from '../actions/auth/signin';
import validateLoginInput from '../validations/authValidations';

/**
 * @description - Helps a user resets his password
 * @param {props} auth - auth details received from the backend
 * @param {props} error - error received
 * @param {props} signin - sign action
 * @returns {component} Component
 */
class AuthContainer extends Component {
  state = {
    email: '',
    password: '',
    errors: {},
    isLoading: false,
  };

  onChange = (event) => {
    const { errors } = this.state;
    if (errors[event.target.name]) {
      const newErrors = { ...errors };
      delete newErrors[event.target.name];
      this.setState({
        [event.target.name]: event.target.value,
        errors: newErrors,
      });
    } else {
      this.setState({
        [event.target.name]: event.target.value,
      });
    }
  };

  onLoginSubmit = (e) => {
    const { actions } = this.props;
    e.preventDefault();
    this.setState({ isLoading: false });
    if (this.isValid()) {
      this.setState({ errors: {} });
      actions.signin(this.state);
    }
  };

  isValid = () => {
    const { errors, isValid } = validateLoginInput(this.state);
    if (errors) {
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
  actions: bindActionCreators(
    {
      signin,
    },
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(AuthContainer);
