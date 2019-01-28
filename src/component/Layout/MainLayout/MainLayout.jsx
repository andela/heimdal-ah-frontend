/* eslint-disable react/forbid-prop-types */
import React, { Fragment } from 'react';
import PropsTypes from 'prop-types';
import Header from '../../ui/header/Header';
import Footer from '../../ui/footer/Footer';

/**
 * @description It wraps its children with a layout style
 * @param {object} props - react props with children
 * @returns {object} the component
 */
const MainLayout = ({ children }) => (
  <Fragment>
    <Header />
    <main className="pt-5 pb-5">
      <div className="container-fluid">{children}</div>
    </main>
    <Footer />
  </Fragment>
);

MainLayout.propTypes = {
  children: PropsTypes.element.isRequired,
};

export default MainLayout;
