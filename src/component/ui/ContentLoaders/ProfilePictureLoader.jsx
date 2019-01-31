import React from 'react';
import ContentLoader from 'react-content-loader';

const ProfilePictureLoader = props => (
  <ContentLoader
    height={25}
    width={25}
    speed={3}
    primaryColor="#ccc"
    secondaryColor="#dedede"
    {...props}
  >
    <rect x="0" y="0" rx="0" ry="0" width="25" height="25" />
  </ContentLoader>
);

export default ProfilePictureLoader;
