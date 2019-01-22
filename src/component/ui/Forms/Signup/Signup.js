import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import React, { Component } from 'react';
import './Signup.scss';
import { signupUser } from '../../../../actions/authActions';
import FormInput from '../../InputElements/FormInput';
import { validateSignup } from '../../../../helpers/validateInputs';

class Signup extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    errors: {},
    isLoading: false,
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    // this.setState({ errors: event.target.value });
    // this.setState(prevState => ({ errors: { ...prevState.errors } }));
  };

  onSubmit = (event) => {
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

    if (errors) {
      this.setState({ isLoading: false });
      return this.setState(prevState => ({ ...prevState, errors: errors.errors }));
    }
    this.setState({ errors: {}, isLoading: false });
    const { signupUser: dispatchSignup, history } = this.props;
    return dispatchSignup(signupData, history);
  };

  render() {
    const {
      email, username, password, passwordConfirmation, errors, isLoading,
    } = this.state;
    console.log(this.state);
    return (
      <div className="row heimdal-form">
        <h1 className="form-title font-cardo text-center">Become an Heimdal Demonym</h1>
        <form className="heimdal-form" onSubmit={this.onSubmit} noValidate>
          <div className="col-md-10 col-md-offset-1 font-cardo ph-30">
            <FormInput
              name="username"
              value={username}
              type="text"
              classname="form-control"
              placeholder="Username"
              onChange={this.onChange}
              errors={errors}
            />
            <FormInput
              name="email"
              value={email}
              type="email"
              classname="form-control"
              placeholder="Email Address"
              onChange={this.onChange}
              errors={errors}
            />
            <FormInput
              name="password"
              value={password}
              type="password"
              classname="form-control"
              placeholder="Password"
              onChange={this.onChange}
              errors={errors}
            />
            <FormInput
              name="passwordConfirmation"
              value={passwordConfirmation}
              type="password"
              classname="form-control"
              placeholder="Confirm Password"
              onChange={this.onChange}
              errors={errors}
            />
            <br />
            <div className="row">
              <div className={`col-md-12 text-center ${isLoading ? '' : 'hidden'}`}>
                <i className="fa fa-spin fa-spinner" />
              </div>
              <div className="col-md-8 text-left m-b-10">
                <span className="text-muted p-t-10">
                  Already have an account?
                  {' '}
                  <Link to="/" className="link">
                    Log in here
                  </Link>
                </span>
              </div>
              <div className="col-md-4 text-right">
                <button type="submit" className="btn signup-btn" disabled={isLoading}>
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { signupUser },
)(withRouter(Signup));
