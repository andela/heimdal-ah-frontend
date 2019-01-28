import React from 'react';
import ContentLoader from 'react-content-loader';

const ProfileInfoLoader = props => (
  <ContentLoader
    height={20}
    width={90}
    speed={2}
    primaryColor="#eee"
    secondaryColor="#dedede"
    {...props}
  >
    <rect x="0" y="1" rx="0.5" ry="0.5" width="15" height="3.2" />
    <rect x="16" y="1" rx="0.5" ry="0.5" width="15" height="3.2" />
    <rect x="0" y="5.5" rx="0.5" ry="0.5" width="28" height="2.8" />
    <rect x="0" y="9.6" rx="0.5" ry="0.5" width="14" height="2.8" />
    <rect x="15" y="9.6" rx="0.5" ry="0.5" width="13" height="2.8" />
    <rect x="0" y="14" rx="0.5" ry="0.5" width="11" height="4.3" />
  </ContentLoader>
);

export default ProfileInfoLoader;
