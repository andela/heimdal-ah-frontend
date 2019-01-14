import React from 'react';
import PropsTypes from 'prop-types';
import './MainLayout.scss';

const MainLayout = ({ children }) => (
  <div className="p-5 content">
    {children}
  </div>
);

MainLayout.propTypes = {
  children: PropsTypes.element.isRequired,
};

export default MainLayout;
