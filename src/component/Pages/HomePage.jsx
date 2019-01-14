import React from 'react';
import Button from '../UI/buttons/Button';

const HomePage = () => (
  <div>
    <h2 className='lead mt-5'>
      Welcome to the Home page...
      <div>
        <Button btnType='signup' btnTitle='Signup' />
        <br />
        <br />
        <br />
        <Button btnType='login' btnTitle='Login' />
        <br />
        <br />
        <br />
        <Button btnType='login2' btnTitle='Login' />
        <br />
        <br />
        <br />
        <Button btnType='signup2' btnTitle='Sign Up' />
        <br />
        <br />
        <br />
        <Button btnType='follow' btnTitle='Follow' />
        <br />
        <br />
        <br />
        <Button btnType='tag' btnTitle='Technology' />
        <br />
        <br />
        <br />
        <Button btnType='report' btnTitle='Report Article' />
        <br />
        <br />
        <br />
        <Button btnType='notifications' btnTitle='load older...' />
        <br />
        <br />
        <br />
        <Button btnType='article' btnTitle='Post Article' />
        <br />
        <br />
        <br />
        <Button btnType='save-profile' btnTitle='Save Profile' />
        <br />
        <br />
        <br />
        <Button btnType='cancel' btnTitle='Cancel' />
        <br />
        <br />
        <br />
        <Button btnType='reply' btnTitle='Add Reply' />
        <br />
        <br />
        <br />
        <Button btnType='comment' btnTitle='Add Comment' />
        <br />
        <br />
        <br />
        <Button btnType='stories' btnTitle='All Stories' />
        <br />
        <br />
        <br />
        <Button btnType='facebook' btnTitle='Login with Facebook' />
        <br />
        <br />
        <br />
        <Button btnType='twitter' btnTitle='Login with Twitter' />
        <br />
        <br />
        <br />
        <Button btnType='google' btnTitle='Login with Google' />
        <br />
        <br />
        <br />
        <div style={{ background: '#606E86', height: '40vh', padding: '1em' }}>
          <Button btnType='subscribe' btnTitle='Subscribe' />
          <br />
          <br />
          <br />
          <Button btnType='edit-profile' btnTitle='Edit' />
          <br />
          <br />
          <br />
          <Button btnType='publish' btnTitle='Publish' />
        </div>
      </div>
    </h2>
  </div>
);

export default HomePage;
