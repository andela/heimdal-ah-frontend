/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Link } from 'react-router-dom';
import './NavItems.scss';

const NavItems = () => {
  const navItem = [
    {
      link: '/',
      text: 'Home',
      isActive: true,
      linkClass: 'nav-link',
    },
    {
      link: '/all-stories',
      text: 'All Stories',
      isActive: false,
      linkClass: 'nav-link',
    },
    {
      link: '/tags',
      text: 'Tags',
      isActive: false,
      linkClass: 'nav-link',
    },
  ];
  return navItem.map((item, i) => (
    <div key={i}>
      {item.isActive
        ? (
          <li key={i} className='nav-item active'>
            <Link className={item.linkClass} to={item.link}>
              {item.text}
            </Link>
          </li>
        )
        : (
          <li key={i} className='nav-item'>
            <Link className={item.linkClass} to={item.link}>
              {item.text}
            </Link>
          </li>
        )
        }
    </div>
  ));
};

export default NavItems;
