import { connect } from 'react-redux';
import React from 'react';
import PropsTypes from 'prop-types';
import Header from '../../ui/header/Header';
import Footer from '../../ui/footer/Footer';

/**
 * @description It wraps its children with a layout style
 * @param {object} props - react props with children
 * @returns {object} the component
 */
export const MainLayout = ({ children, auth = {} }) => (
  <div>
    <Header isAuthenticated={auth.isAuthenticated} />
    {children}
    <Footer />
  </div>
);

MainLayout.propTypes = {
  children: PropsTypes.element.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(MainLayout);
