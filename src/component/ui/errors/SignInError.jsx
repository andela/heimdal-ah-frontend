import React from 'react';

const SignInError = ({ error = {} }) => {
  if (error.errors && error.errors.password) {
    return (
      <div className="col-md-12 text-danger text-center">
        {error.errors.password && (
        <span className="">
          Incorrect email or password
        </span>
        )}
      </div>
    );
  }
  return (
    <div className="col-md-12 text-danger text-center">
      {error && error.message && (
      <span className="">
      Incorrect email or password
      </span>
      )}
    </div>
  );
};

export default SignInError;
