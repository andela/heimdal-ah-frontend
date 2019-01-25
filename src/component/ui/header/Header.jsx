/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import './Header.scss';
import NavItems from '../navItems/NavItems';
import ActiveUser from '../activeuser/ActiveUser';
import Logo from '../logo/Logo';
import SearchForm from '../searchForm/SearchForm';
import HeaderButton from '../headerButton/HeaderButton';

/**
 * @param {boolean} isAuthenticated should be a boolean
 */
const Header = (props) => {
  const { isAuthenticated } = props;
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Logo />
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <NavItems />
          </ul>
          {isAuthenticated ? <ActiveUser /> : <HeaderButton />}
          <SearchForm />
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(
  mapStateToProps,
  {},
)(Header);
