import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';

import { setErrors, removeAnError, clearErrors } from '../../../../actions/errorActions';
import { signupUser } from '../../../../actions/authActions';
import { validateSignup } from '../../../../helpers/validateInputs';
import './Signup.scss';
import SignupForm from './SignupForm';

/**
 * @description - This class enables new users to Signup on the platform
 * @param {func} setErrors  - A dispatchable errorAction to set errors in state
 * @param {func} removeAnError  - A dispatchable errorAction to clear one error from state
 * @param {func} clearErrors  - A dispatchable errorAction to clear the error state
 * @param {func} signupUser  - A dispatchable authAction to enable signup
 * @param {object} SignupForm  - A Form component that takes in props
 * @returns {object} The rendered Component
 */
export class Signup extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    errors: {},
    isLoading: false,
  };

  componentWillReceiveProps(nextProps) {
    return nextProps.errors && this.setState({ errors: nextProps.errors });
  }

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    if (this.state.errors[event.target.name]) {
      const { action } = this.props;
      action.removeAnError(event.target.name);
    }
  };

  handleSignup = (event) => {
    event.preventDefault();
    this.setState({ isLoading: true });

    const {
      username, email, password, passwordConfirmation,
    } = this.state;

    const signupData = {
      username,
      email,
      password,
      passwordConfirmation,
    };

    const errors = validateSignup(signupData);
    const { action, history } = this.props;

    if (errors) {
      this.setState({ isLoading: false });
      return action.setErrors(errors.errors);
    }

    action.clearErrors();
    return action.signupUser(signupData, history);
  };

  render() {
    return <SignupForm {...this.state} onChange={this.onChange} handleSignup={this.handleSignup} />;
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
});

const mapDispatchToProps = dispatch => ({
  action: bindActionCreators(
    {
      signupUser,
      removeAnError,
      setErrors,
      clearErrors,
    },
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Signup));
