/* eslint-disable react/forbid-prop-types */
import { connect } from 'react-redux';
import PropsTypes from 'prop-types';
import React from 'react';
import './Header.scss';
import NavItems from '../navItems/NavItems';
import ActiveUser from '../activeuser/ActiveUser';
import Logo from '../logo/Logo';
import SearchForm from '../searchForm/SearchForm';
import HeaderButton from '../headerButton/HeaderButton';

/**
 * @param {boolean} isAuthenticated should be a boolean
 */
const Header = ({ auth }) => {
  const { isAuthenticated, user } = auth;
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
        <Logo />
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <NavItems />
          </ul>
          {isAuthenticated ? <ActiveUser username={user.username} /> : <HeaderButton />}
          <SearchForm />
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
export default connect(mapStateToProps)(Header);
