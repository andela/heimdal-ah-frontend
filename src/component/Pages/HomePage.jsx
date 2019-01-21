import React from 'react';
import Rating from '../ui/Rating/Rating';
import Button from '../ui/buttons/Button';
import RootModal from '../ui/Modals/RootModal';
import { DemoArticleCoponentWithGlowState } from '../ui/buttons/glow/DemoArticleCoponentWithGlowState';
import Signup from '../ui/Forms/Signup/Signup';

const HomePage = () => (
  <div>
    <h2 className="lead mt-5">Welcome to the Home page...</h2>
    <RootModal title="Report" modalType="Report" classname="">
      <h2>Child component</h2>
    </RootModal>
    <br />
    <br />
    <br />
    <br />
    <RootModal title="" modalType="" classname="">
      <Signup />
    </RootModal>
    <div className="container">
      <div className="col-md-7">
        <Signup />
      </div>
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
      <br />
      <br />
      <br />
      <Button type="facebook" label="Login with Facebook" />
      <br />
      <br />
      <br />
      <Button type="twitter" label="Login with Twitter" />
      <br />
      <br />
      <br />
      <Button type="google" label="Login with Google" />
      <br />
      <br />
      <br />
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
  </div>
);

export default HomePage;
