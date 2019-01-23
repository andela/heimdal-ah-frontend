import React from 'react';

const MainError = ({ errors }) => (
  <div className="col-md-12 text-danger text-center">
    {errors && errors.mainError && <span className="">{errors.mainError}</span>}
  </div>
);

export default MainError;
