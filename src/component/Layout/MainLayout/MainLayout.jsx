import React from 'react';
import PropsTypes from 'prop-types';
import Header from '../../ui/header/Header';
import Footer from '../../ui/footer/Footer';

/**
 * @description It wraps its children with a layout style
 * @param {object} props - react props with children
 * @returns {object} the component
 */
const MainLayout = ({ children }) => (
  <div>
    <Header isValidated={false} />
    {children}
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropsTypes.element.isRequired,
};

export default MainLayout;
