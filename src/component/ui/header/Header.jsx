/* eslint-disable react/forbid-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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
const Header = (props) => {
  const { isAuthenticated } = props.auth;
  return (
    <header className='header'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Logo />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <NavItems />
          </ul>
          {isAuthenticated ? <ActiveUser /> : <HeaderButton />}
          {(window.location.search === '?query=' || window.location.pathname === '/search' || new URLSearchParams(window.location.search).get('query')) ? '' : <SearchArticlesPresentation /> }

        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  auth: state.auth,
});

export default connect(mapStateToProps, {})(Header);
