// import React from 'react';

// const LoadingSpinner = ({ isLoading }) => (
//   <div className={`col-md-12 text-center ${isLoading ? '' : 'd-none'}`}>
//     <i className="fa fa-spin fa-spinner" />
//   </div>
// );

// export default LoadingSpinner;

import React from 'react';
import { FadeLoader } from 'react-spinners';

const override = `
  display: block;
  margin: 0 auto;
`;

const LoadingSpinner = ({ isLoading, size, color }) => (
  <div className="col-md-12 text-center">
    <div className="sweet-loading">
      <FadeLoader
        css={override}
        sizeUnit="px"
        size={size || 100}
        color={color || '#2C4D45'}
        loading={isLoading}
      />
    </div>
  </div>
);

export default LoadingSpinner;
