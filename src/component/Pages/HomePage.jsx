import React, { Fragment } from 'react';
import Rating from '../ui/Rating/Rating';
import Button from '../ui/buttons/Button';
import { DemoArticleCoponentWithGlowState } from '../ui/buttons/glow/DemoArticleCoponentWithGlowState';
import BookmarksCards from '../ui/cards/BookmarksCards';
import ArticleCardHorizontal from '../ui/cards/ArticleCardHorizontal';
import ArticleCardVertical from '../ui/cards/ArticleCardVertical';

const article = {
  articleTitle: 'Applying common image transformations using React',
  article: 'You can select from a large selection of image effects, enhancements, and filters to apply to your images. The available effects include a variety of color balance and level effects, tinting, blurring, pixelating, sharpening, automatic improvement effects, artistic filters, image and text overlays, distortion and shape changing effects, outlines, backgrounds, shadows, and more. For example, the code below applies a cartoonify effect, rounding corners effect, and background color effect (and then scales the image down to a height of 300 pixels). React',
  userImage: 'https://pbs.twimg.com/profile_images/839863609345794048/mkpdB9Tf_400x400.jpg',
  username: 'Plunckysjasdassad232131',
  updatedTime: '2019-01-23 21:47:49.319+01',
  articleImage: 'https://pbs.twimg.com/profile_images/839863609345794048/mkpdB9Tf_400x400.jpg',
  commentCount: 43,
};

const HomePage = () => (
  <div>
    <Fragment>
      <br />
      <br />
      <br />
      <a href={`${process.env.BASE_URL_PROD}/auth/facebook`}>
        <Button type="facebook" label="Login with Facebook" />
      </a>
      <br />
      <br />
      <br />
      <a href={`${process.env.BASE_URL_PROD}/auth_twitter/twitter`}><Button type="twitter" label="Login with Twitter" /></a>
      <br />
      <br />
      <br />
      <br />
      <a href={`${process.env.BASE_URL_PROD}/auth/google`}>
        <Button type="google" label="Login with Google" />
      </a>
      <br />
      <br />
      <br />
    </Fragment>

    <h2 className="lead mt-5">
      Welcome to the Home page...
    </h2>
    <div className="row">
      <div className='col-md-6'>
        <ArticleCardVertical {...article} />
        <ArticleCardHorizontal {...article} />
        <BookmarksCards {...article} />
      </div>
    </div>
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <Rating className='fa fa-star' ratings={2.5} />
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
  </div>
);

export default HomePage;
