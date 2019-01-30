/* eslint-disable react/forbid-prop-types */
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { setErrors, removeAnError, clearErrors } from '../../../../actions/errorActions';
import { signupUser } from '../../../../actions/authActions';
import { validateSignup } from '../../../../helpers/validateInputs';
import './Signup.scss';
import SignupForm from './SignupForm';
import { toggleLoader } from '../../../../actions/loaderActions';

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
      const { actions } = this.props;
      actions.removeAnError(event.target.name);
    }
  };

  handleSignup = (event) => {
    event.preventDefault();
    const { actions, history, toggle: toggleModal } = this.props;
    actions.toggleLoader();

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

    if (errors) {
      actions.toggleLoader();
      return actions.setErrors(errors.errors);
    }

    actions.clearErrors();
    return actions.signupUser(signupData, history, toggleModal);
  };

  render() {
    const { isLoading } = this.props;
    return (
      <SignupForm
        {...this.state}
        isLoading={isLoading}
        onChange={this.onChange}
        handleSignup={this.handleSignup}
      />
    );
  }
}

Signup.defaultProps = {
  errors: {},
  isLoading: false,
};

Signup.propTypes = {
  isLoading: PropTypes.bool,
  errors: PropTypes.object,
  toggle: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  errors: state.errors,
  isLoading: state.loader.isLoading,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      signupUser,
      removeAnError,
      setErrors,
      clearErrors,
      toggleLoader,
    },
    dispatch,
  ),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(Signup));
