import React from 'react';

const ActiveUser = () => (
  <div className="active_user_logo">
    <div className="dropdown">
      <img className="notification_icon dropbtn" src="/src/images/Icons.png" alt="notification-logo" />
      <div className="dropdown-content">
        <div className='username'>Notification</div>
        <a to="/">a 1</a>
        <a to="/">a 2</a>
        <a to="/">a 3</a>
      </div>
    </div>
    <div className='dropdown'>
      <img className="profile-icon" src='/src/images/Group 2.1.png' alt="profile-logo" />
      <div className="dropdown-content">
        <div className='username'>@el-Joft</div>
        <a to="/dashboard">Dashboard</a>
        <a to="/create-article">Write An Article</a>
        <a to="/reading-stats">Reading Stats</a>
        <a to="/bookmarks">Bookmarks</a>
        <a to="/notifications">Notification</a>
        <a to="/publication">Publication</a>
        <div className='user-settings'>
          <a to="/user-profile">Profile</a>
          <a to="/logout">Logout</a>
        </div>
      </div>
    </div>
  </div>
);

export default ActiveUser;
