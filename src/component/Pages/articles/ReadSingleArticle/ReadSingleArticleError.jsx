import React from 'react';

const ReadSingleArticleError = () => (
  <div className='container ReadSingleArticleError'>
    <h3>
        Sorry This Article
      <br />
        Does Not Exist
    </h3>
    <br />
    <div>
      <a to='/'>
        <div>..go back Home....</div>
      </a>
    </div>
  </div>
);

export default ReadSingleArticleError;
