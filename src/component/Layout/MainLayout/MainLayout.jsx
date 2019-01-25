import { connect } from 'react-redux';
import React, { Fragment } from 'react';
import PropsTypes from 'prop-types';
import Header from '../../ui/header/Header';
import Footer from '../../ui/footer/Footer';

/**
 * @description It wraps its children with a layout style
 * @param {object} props - react props with children
 * @returns {object} the component
 */
export const MainLayout = ({ children, auth = {} }) => (
  <Fragment>
    <Header isAuthenticated={auth.isAuthenticated} />
    <main role="main" className="pt-5">
      <div className="container-fluid">{children}</div>
    </main>
    <Footer />
  </Fragment>
);

MainLayout.propTypes = {
  children: PropsTypes.element.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(MainLayout);
