import React from 'react';

const handleError = (error) => {
  if (error.errors !== undefined && error.errors.password) {
    return (
      <div className="col-md-12 text-danger text-center">
        {error.errors.password && (
        <span className="">
          {error.errors.password.msg}
        </span>
        )}
      </div>
    );
  }
  return (
    <div className="col-md-12 text-danger text-center">
      {error !== undefined && error.message && (
      <span className="">
        {error.message}
      </span>
      )}
    </div>
  );
};

export default handleError;
