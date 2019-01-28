import React from 'react';

const LoadingSpinner = ({ isLoading }) => (
  <div className={`col-md-12 text-center ${isLoading ? '' : 'd-none'}`}>
    <i className="fa fa-spin fa-spinner" />
  </div>
);

export default LoadingSpinner;
