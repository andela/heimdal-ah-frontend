/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import './Header.scss';
import NavItems from '../navItems/NavItems';
import ActiveUser from '../../Widgets/activeuser/ActiveUser';
import Logo from '../logo/Logo';
import SearchForm from '../../Widgets/searchForm/SearchForm';
import HeaderButton from '../../Widgets/headerButton/HeaderButton';


const Header = (props) => {
  const [formData] = useState({
    search: {
      element: 'input',
      className: 'search-input',
      value: '',
      config: {
        name: 'search',
        type: 'text',
        placeholder: 'Search....',
      },
    },
  });

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
          <SearchForm formData={formData} />
        </div>
      </nav>
    </header>
  );
};


export default Header;
