import React from 'react';
import HomepageButton from '../UI/buttons/HomepageButton';
import Glow from '../UI/buttons/glow/Glow';

const HomePage = () => (
  <div>
    <h2 className='lead mt-5'>
        Welcome to the Home page...
      <div>
        <HomepageButton />
        <Glow isGlowedByUser={false} glowCount={200} />
      </div>
    </h2>
  </div>
);

export default HomePage;
