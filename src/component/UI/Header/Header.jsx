/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/no-array-index-key */
/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import NavItems from '../NavItems/NavItems';
import ActiveUser from '../../Widgets/activeUser';

class Header extends Component {
  state = {
    displayInput: false,
  }

  logo = () => (
    <Link to='/'>
      <img className='logo' src='/public/images/logo.png' alt="heimdal-logo" />
    </Link>
  );

  button = () => (
    <div className="header-button-group">
      <Link to='/signup'><button type='button' className="header-button">Signup</button></Link>
      <Link to='/login'><button type='button' className="header-button">Login</button></Link>
    </div>
  );

  showInput = (e) => {
    e.preventDefault();
    const { displayInput } = this.state;
    this.setState({
      displayInput: !displayInput,
    });
  };

  searchForm = displayInput => (
    <form className="header-form form-inline my-2 my-lg-0">
      <div className={displayInput ? '' : 'header-input'}><input className="form-control  mr-sm-2" type="search" placeholder="Search" aria-label="Search" /></div>
      <div
        onClick={e => this.showInput(e)}
        className='search_icon'
      >
        <i className="fas fa-search" />
      </div>
    </form>
  );

  render() {
    const { isValidated } = this.props;
    const { displayInput } = this.state;
    return (
      <header className='header'>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          {this.logo()}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <NavItems />
            </ul>
            {isValidated ? <ActiveUser /> : this.button()}
            {this.searchForm(displayInput)}
          </div>
        </nav>
      </header>
    );
  }
}

export default Header;
