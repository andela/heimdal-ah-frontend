import React, { Fragment } from 'react';
import Rating from '../ui/Rating/Rating';
import Button from '../ui/Buttons/Button';
import { DemoArticleCoponentWithGlowState } from '../ui/Buttons/glow/DemoArticleCoponentWithGlowState';
// import ArticleCardVertical from '../ui/cards/BookmarksCards';


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
      <div>
        <Rating className="fa fa-star" ratings={2.5} />
        <Button type="signup" label="Signup" />
        <br />
        <br />
        <br />
        <Button type="login" label="Login" />
        <br />
        <br />
        <br />
        <Button type="login2" label="Login" />
        <br />
        <br />
        <br />
        <Button type="signup2" label="Sign Up" />
        <br />
        <br />
        <br />
        <Button type="follow" label="Follow" />
        <br />
        <br />
        <br />
        <Button type="tag" label="Technology" />
        <br />
        <br />
        <br />
        <Button type="report" label="Report Article" />
        <br />
        <br />
        <br />
        <Button type="notifications" label="load older..." />
        <br />
        <br />
        <br />
        <Button type="article" label="Post Article" />
        <br />
        <br />
        <br />
        <Button type="save-profile" label="Save Profile" />
        <br />
        <br />
        <br />
        <Button type="cancel" label="Cancel" />
        <br />
        <br />
        <br />
        <Button type="reply" label="Add Reply" />
        <br />
        <br />
        <br />
        <Button type="comment" label="Add Comment" />
        <br />
        <br />
        <br />
        <Button type="stories" label="All Stories" />
        <div style={{ background: '#606E86', height: '40vh', padding: '1em' }}>
          <Button type="subscribe" label="Subscribe" />
          <br />
          <br />
          <br />
          <Button type="edit-profile" label="Edit" />
          <br />
          <br />
          <br />
          <Button type="publish" label="Publish" />
        </div>
      </div>
      <div>
        <DemoArticleCoponentWithGlowState />
      </div>
    </h2>
  </div>
);

export default HomePage;
