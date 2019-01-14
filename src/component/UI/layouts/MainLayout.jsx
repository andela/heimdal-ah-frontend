import React from 'react';
import PropsTypes from 'prop-types';
import './MainLayout.scss';

const MainLayout = ({ children }) => (
  <div id="content" className="p-5">
    {children}
  </div>
);

MainLayout.propTypes = {
  children: PropsTypes.element.isRequired,
};

export default MainLayout;
