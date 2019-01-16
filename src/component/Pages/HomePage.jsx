import React from 'react';
import HomepageButton from '../UI/buttons/HomepageButton';
import { DemoArticleCoponentWithGlowState } from '../UI/buttons/glow/DemoArticleCoponentWithGlowState';

const HomePage = () => (
  <div>
    <h2 className='lead mt-5'>
        Welcome to the Home page...
      <div>
        <HomepageButton />
      </div>
      <div>
        <DemoArticleCoponentWithGlowState />
      </div>
    </h2>
  </div>
);

export default HomePage;
