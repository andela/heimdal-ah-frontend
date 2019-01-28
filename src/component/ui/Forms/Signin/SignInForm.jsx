import React from 'react';
import { Link } from 'react-router-dom';
import { FormGroup, Label, Input } from 'reactstrap';
import FormInput from '../../InputElements/FormInput';
import LoadingSpinner from '../../loadingSpinners/LoadingSpinner';
import SignInError from '../../errors/SignInError';
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
    email,
    errors,
    error,
    password,
    onChange,
    isLoading,
    onLoginSubmit,
  } = props;

  return (
    <div className="heimdal-signin-form">
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
          <div className="d-flex justify-content-between mb-3">
            <div className="p-2">
              {' '}
              <FormGroup check>
                <Label check>
                  <Input type="checkbox" />
                  {' '}
                  Remember me
                </Label>
              </FormGroup>

            </div>
            <div className="p-2">
              {' '}
              <Link to='/'>Forgot password?</Link>
            </div>
          </div>
          <SignInError error={error} />
          <div className="row">
            <LoadingSpinner isLoading={isLoading} />
            <div className="col-md-8 text-left mb-10">
              <span className="text-muted p-t-10">
              Dont have an account?
                {' '}
                <Link to="/" className="link pt-2">
                Signup here
                </Link>
              </span>
            </div>
            <div className="col-md-4 text-right">
              <button type="submit" className="btn btn-default ph-25">
              Sign In
              </button>
            </div>
          </div>
        </div>
      </form>
      <br />
      <div className="text-center">
        <a
          href={`${process.env.BASE_URL_PROD}/auth/facebook`}
          className="btn btn-block btn-facebook"
        >
        Login with Facebook
        </a>
        <br />
        <a
          href={`${process.env.BASE_URL_PROD}/auth_twitter/twitter`}
          className="btn btn-block btn-twitter"
        >
        Login with Twitter
        </a>
        <br />
        <a href={`${process.env.BASE_URL_PROD}/auth/google`} className="btn btn-block btn-google">
        Login With Google
        </a>
      </div>
    </div>
  );
};

export default SigninForm;
