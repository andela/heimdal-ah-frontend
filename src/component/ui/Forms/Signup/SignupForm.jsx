import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import FormInput from '../../InputElements/FormInput';
import LoadingSpinner from '../../loadingSpinners/LoadingSpinner';
import MainError from '../../errors/MainError';

/**
 * @description It wraps its children with a layout style
 * @param {object} props - react props with children
 * @returns {object} the SignupFrom component
 */
const SignupForm = (props) => {
  const {
    username,
    email,
    password,
    passwordConfirmation,
    errors,
    isLoading,
    onChange,
    handleSignup,
  } = props;

  return (
    <div className="heimdal-signup-form">
      <h1 className="form-title font-cardo text-center">Become an Heimdal Demonym</h1>
      <form className="heimdal-form" onSubmit={handleSignup} noValidate>
        <div className="font-cardo ph-30">
          <FormInput
            name="username"
            value={username}
            type="text"
            classname="form-control"
            placeholder="Username"
            onChange={onChange}
            errors={errors}
          />
          <FormInput
            name="email"
            value={email}
            type="email"
            classname="form-control"
            placeholder="Email Address"
            onChange={onChange}
            errors={errors}
          />
          <FormInput
            name="password"
            value={password}
            type="password"
            classname="form-control"
            placeholder="Password"
            onChange={onChange}
            errors={errors}
          />
          <FormInput
            name="passwordConfirmation"
            value={passwordConfirmation}
            type="password"
            classname="form-control"
            placeholder="Confirm Password"
            onChange={onChange}
            errors={errors}
          />
          <div className="row">
            <LoadingSpinner isLoading={isLoading} />
            <MainError errors={errors} />
            <div className="col-md-8 text-left mb-10">
              <span className="text-muted p-t-10">
                Already have an account?
                {' '}
                <Link to="/" className="link">
                  Log in here
                </Link>
              </span>
            </div>
            <div className="col-md-4 text-right">
              <button type="submit" className="btn signup-btn">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </form>
      <br />
      <div className="col-md-12 text-center">
        <a
          href={`${process.env.BASE_URL_PROD}/auth/facebook`}
          className="btn btn-block btn-primary"
        >
          Login with Facebook
        </a>
        <br />
        <a
          href={`${process.env.BASE_URL_PROD}/auth_twitter/twitter`}
          className="btn btn-block btn-info"
        >
          Login with twitter
        </a>
        <br />
        <a href={`${process.env.BASE_URL_PROD}/auth/google`} className="btn btn-block btn-danger">
          Login With Google
        </a>
      </div>
    </div>
  );
};

SignupForm.propTypes = {
  username: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  passwordConfirmation: PropTypes.string.isRequired,
  errors: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default SignupForm;
