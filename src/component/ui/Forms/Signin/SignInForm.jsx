import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import FormInput from '../../InputElements/FormInput';
import LoadingSpinner from '../../loadingSpinner/LoadingSpinner';
import './Signin.scss';

/**
 * @description - Heimdal Authors Haven Signin Component
 * @param {props} auth - the authentication state of the current user
 * @param {props} email - email value from
 * @param {props} errors - errors validations
 * @param {props} error - error validation from backend
 * @returns {component} form
 */
const SigninForm = (props) => {
  const {
    auth,
    email,
    errors,
    error,
    password,
    onChange,
    isLoading,
    onLoginSubmit,
  } = props;

  if (auth) {
    return <Redirect to="/" />;
  }
  return (
    <div className="heimdal-signup-form">
      <h1 className="form-title font-cardo text-center">Welcome back</h1>
      <form className="heimdal-form" onSubmit={onLoginSubmit} noValidate>
        <div className="font-cardo ph-30">
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
          <div className="row">
            <LoadingSpinner isLoading={isLoading} />
            <div className="col-md-12 text-danger text-center">
              {errors.mainError && <span className="">{errors.mainError}</span>}
            </div>
            <div className="col-md-8 text-left mb-10">
              <span className="text-muted p-t-10">
                {' '}
                Don't have an account?
                <Link to="/signup" className="link">
                Sign up here
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
};

export default SigninForm;
