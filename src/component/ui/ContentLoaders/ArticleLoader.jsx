import React from 'react';
import ContentLoader from 'react-content-loader';

const ArticleLoader = () => (
  <ContentLoader
    height={54}
    width={52}
    speed={3}
    primaryColor="#eee"
    secondaryColor="#f9f9f9"
  >
    <rect x="0" y="0" rx="2" ry="2" width="50" height="4" />
    <rect x="0" y="5" rx="3" ry="3" width="50" height="30" />
    <rect x="0" y="36" rx="2" ry="2" width="50" height="5" />
    <circle cx="2.1" cy="43" r="1.6" />
    <rect x="5" y="42" rx="1" ry="1" width="20" height="2" />
    <rect x="30" y="42" rx="1" ry="1" width="20" height="2" />
    <rect x="0" y="46" rx="1" ry="1" width="5" height="2" />
    <rect x="45" y="46" rx="1" ry="1" width="5" height="2" />
    <rect x="10" y="48" rx="1" ry="1" width="30" height="2" />
  </ContentLoader>
);

export default ArticleLoader;
