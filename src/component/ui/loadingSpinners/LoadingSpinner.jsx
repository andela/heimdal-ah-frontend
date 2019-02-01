import React from 'react';
import { css } from '@emotion/core';
import { DotLoader } from 'react-spinners';

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const LoadingSpinner = ({ isLoading }) => (
  <div className="col-md-12 text-center sweet-loading">
    <DotLoader css={override} sizeUnit="px" size={150} color="#2C4D45" loading={isLoading} />
  </div>
);

export default LoadingSpinner;
