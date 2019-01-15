import React from 'react';
import PropsTypes from 'prop-types';
import './MainLayout.scss';

/**
 * @description It wraps its children with a layout style
 * @param {object} props - react props with children
 * @returns {object} the component
 */
const MainLayout = ({ children }) => (
  <div className="p-5 content">
    {children}
  </div>
);

MainLayout.propTypes = {
  children: PropsTypes.element.isRequired,
};

export default MainLayout;
