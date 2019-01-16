/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import NavItems from '../navItems/NavItems';
import ActiveUser from '../../Widgets/activeUser';
import Logo from '../logo/Logo';
import SearchForm from '../../Widgets/submitForm/SubmitForm';

const Header = (props) => {
  const [formData] = useState({
    search: {
      element: 'input',
      value: '',
      config: {
        name: 'search',
        type: 'text',
        placeholder: 'Search....',
      },
    },
  });

  const button = () => (
    <div className="header-button-group">
      <Link to='/signup'><button type='button' className="header-button">Signup</button></Link>
      <Link to='/login'><button type='button' className="header-button">Login</button></Link>
    </div>
  );

  const { isValidated } = props;
  return (
    <header className='header'>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Logo />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <NavItems />
          </ul>
          {isValidated ? <ActiveUser /> : button()}
          {/* {searchForm()} */}
          <SearchForm formData={formData} />
        </div>
      </nav>
    </header>
  );
};


export default Header;
