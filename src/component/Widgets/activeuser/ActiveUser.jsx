import React from 'react';
import { Link } from 'react-router-dom';

const ActiveUser = () => (
  <div className="active_user_logo">
    <div className="dropdown">
      <img className="notification_icon dropbtn" src="/src/public/images/Icons.png" alt="notification-logo" />
      <div className="dropdown-content">
        <div className='username'>Notification</div>
        <Link to="/">Link 1</Link>
        <Link to="/">Link 2</Link>
        <Link to="/">Link 3</Link>
      </div>
    </div>
    <div className='dropdown'>
      <img className="profile-icon" src='/src/images/Group 2.1.png' alt="profile-logo" />
      <div className="dropdown-content">
        <div className='username'>@el-Joft</div>
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/create-article">Write An Article</Link>
        <Link to="/reading-stats">Reading Stats</Link>
        <Link to="/bookmarks">Bookmarks</Link>
        <Link to="/notifications">Notification</Link>
        <Link to="/publication">Publication</Link>
        <div className='user-settings'>
          <Link to="/user-profile">Profile</Link>
          <Link to="/logout">Logout</Link>
        </div>
      </div>
    </div>
  </div>
);


export default ActiveUser;
