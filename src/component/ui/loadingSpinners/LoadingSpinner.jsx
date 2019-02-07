import React from 'react';
import { FadeLoader } from 'react-spinners';
import './LoadingSpinner.scss';

const override = `
  display: block;
  margin: 0 auto;
`;

const LoadingSpinner = ({ isLoading, size, color }) => (
  <div className="sweet-loading">
    <FadeLoader
      css={override}
      sizeUnit="px"
      size={size || 100}
      color={color || '#2C4D45'}
      loading={isLoading}
    />
  </div>
);

export default LoadingSpinner;
