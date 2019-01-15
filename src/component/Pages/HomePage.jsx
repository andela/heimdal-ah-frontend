import React from 'react';
import HomepageButton from '../UI/buttons/HomepageButton';
import Rating from '../UI/Rating/Rating';

const HomePage = () => (
  <div>
    <h2 className='lead mt-5'>
        Welcome to the Home page...
      <div>
        <HomepageButton />
        <Rating ratings={3} />
      </div>
    </h2>
  </div>
);

export default HomePage;
