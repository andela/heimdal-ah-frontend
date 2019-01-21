import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
// import PropTypes from 'prop-types';
import React, { Component, Fragment } from 'react';
import './Signup.scss';
import { signupUser } from '../../../../actions/authActions';

class Signup extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    errors: [],
    isLoading: false,
  };

  onChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
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

    const { signupUser: dispatchSignup, history } = this.props;

    dispatchSignup(signupData, history);
  };

  render() {
    const {
      email, username, password, passwordConfirmation, errors, isLoading,
    } = this.state;

    return (
      <div className="row heimdal-form">
        <h1 className="form-title font-cardo text-center">Become an Heimdal Demonym</h1>
        <form className="heimdal-form" onSubmit={this.onSubmit}>
          <div className="col-md-10 col-md-offset-1 font-cardo ph-30">
            <div className="form-group">
              <input
                name="username"
                value={username}
                type="text"
                className="form-control"
                placeholder="Username"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <input
                name="email"
                value={email}
                type="email"
                className="form-control"
                placeholder="Email Address"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <input
                name="password"
                value={password}
                type="password"
                className="form-control"
                placeholder="Password"
                onChange={this.onChange}
              />
            </div>
            <div className="form-group">
              <input
                name="passwordConfirmation"
                value={passwordConfirmation}
                type="password"
                className="form-control"
                placeholder="Confirm Password"
                onChange={this.onChange}
              />
            </div>
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
