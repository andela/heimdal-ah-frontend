import React from 'react';
import HomepageButton from '../ui/buttons/HomepageButton';
import { DemoArticleCoponentWithGlowState } from '../ui/buttons/glow/DemoArticleCoponentWithGlowState';

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
