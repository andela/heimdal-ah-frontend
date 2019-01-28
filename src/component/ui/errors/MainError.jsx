import React from 'react';

const MainError = ({ errors }) => (
  <div className="col-md-12 text-danger text-center">
    {errors && errors.mainError && errors.mainError.includes('has been taken') ? (
      <span className="">
        {errors.mainError}
. If you are trying to login to your existing account, please click the
        login in here below.
      </span>
    ) : (
      <span className="">An error occured, please try again in a moment</span>
    )}
  </div>
);

export default MainError;
