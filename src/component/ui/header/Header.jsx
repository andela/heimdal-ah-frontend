import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';
import NavItems from '../navItems/NavItems';
import ActiveUser from '../Widgets/activeuser/ActiveUser';
import Logo from '../logo/Logo';
import SearchForm from '../Widgets/searchForm/SearchForm';
import HeaderButton from '../Widgets/headerButton/HeaderButton';

/**
 * @param {boolean} isValidated should be a boolean
 */
const Header = (props) => {
  const { isValidated } = props;
  return (
    <header className='header'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Logo />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <NavItems />
          </ul>
          {isValidated ? <ActiveUser /> : <HeaderButton />}
          <SearchForm />
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  isValidated: PropTypes.bool.isRequired,
};

export default Header;
