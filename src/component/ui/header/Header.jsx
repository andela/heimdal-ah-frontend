/* eslint-disable react/forbid-prop-types */
import { connect } from 'react-redux';
import PropsTypes from 'prop-types';
import React from 'react';
import './Header.scss';
import NavItems from '../navItems/NavItems';
import ActiveUser from '../activeuser/ActiveUser';
import Logo from '../logo/Logo';
// import SearchForm from '../searchForm/SearchForm';
import HeaderButton from '../headerButton/HeaderButton';
import SearchArticlesPresentation from '../searchForm/searchArticlesPresentation';

/**
 * @param {boolean} isAuthenticated should be a boolean
 */
const Header = ({ auth }) => {
  const {
    isAuthenticated,
    user: { username, image },
  } = auth;
  return (
    <header className="header mb-5 pb-4">
      <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
        <Logo />
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <NavItems />
          </ul>
          {isAuthenticated ? <ActiveUser username={username} image={image} /> : <HeaderButton />}
          {window.location.search === '?query='
          || window.location.pathname === '/search'
          || new URLSearchParams(window.location.search).get('query') ? (
              ''
            ) : (
              <SearchArticlesPresentation />
            )}
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  auth: PropsTypes.object,
};

Header.defaultProps = {
  auth: {},
};

const mapStateToProps = state => ({
  auth: state.auth,
});

const matchDispatchToProps = dispatch => ({
  actions: action => dispatch(action),
});

export default connect(
  mapStateToProps,
  matchDispatchToProps,
)(Header);
