import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className='container'>
    <h3>Not Found 404</h3>
    <Link to='/'>
      <div>..go back Home...</div>
    </Link>
  </div>
);

export default NotFound;
