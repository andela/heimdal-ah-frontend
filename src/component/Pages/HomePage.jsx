import React from 'react';
<<<<<<< HEAD
import HomepageButton from '../ui/buttons/HomepageButton';
import { DemoArticleCoponentWithGlowState } from '../ui/buttons/glow/DemoArticleCoponentWithGlowState';
=======
import Button from '../UI/buttons/Button';
import { DemoArticleCoponentWithGlowState } from '../UI/buttons/glow/DemoArticleCoponentWithGlowState';
>>>>>>> 4363c8ae28747207fd0f599296e9053e5e4fc41d

const HomePage = () => (
  <div>
    <h2 className='lead mt-5'>
      Welcome to the Home page...
      <div>
        <Button type='signup' label='Signup' />
        <br />
        <br />
        <br />
        <Button type='login' label='Login' />
        <br />
        <br />
        <br />
        <Button type='login2' label='Login' />
        <br />
        <br />
        <br />
        <Button type='signup2' label='Sign Up' />
        <br />
        <br />
        <br />
        <Button type='follow' label='Follow' />
        <br />
        <br />
        <br />
        <Button type='tag' label='Technology' />
        <br />
        <br />
        <br />
        <Button type='report' label='Report Article' />
        <br />
        <br />
        <br />
        <Button type='notifications' label='load older...' />
        <br />
        <br />
        <br />
        <Button type='article' label='Post Article' />
        <br />
        <br />
        <br />
        <Button type='save-profile' label='Save Profile' />
        <br />
        <br />
        <br />
        <Button type='cancel' label='Cancel' />
        <br />
        <br />
        <br />
        <Button type='reply' label='Add Reply' />
        <br />
        <br />
        <br />
        <Button type='comment' label='Add Comment' />
        <br />
        <br />
        <br />
        <Button type='stories' label='All Stories' />
        <br />
        <br />
        <br />
        <Button type='facebook' label='Login with Facebook' />
        <br />
        <br />
        <br />
        <Button type='twitter' label='Login with Twitter' />
        <br />
        <br />
        <br />
        <Button type='google' label='Login with Google' />
        <br />
        <br />
        <br />
        <div style={{ background: '#606E86', height: '40vh', padding: '1em' }}>
          <Button type='subscribe' label='Subscribe' />
          <br />
          <br />
          <br />
          <Button type='edit-profile' label='Edit' />
          <br />
          <br />
          <br />
          <Button type='publish' label='Publish' />
        </div>
      </div>
      <div>
        <DemoArticleCoponentWithGlowState />
      </div>
    </h2>
  </div>
);

export default HomePage;
