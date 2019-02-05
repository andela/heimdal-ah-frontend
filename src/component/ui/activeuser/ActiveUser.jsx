/* eslint-disable react/no-this-in-sfc */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './activeUser.scss';
import NotificationDropDown from '../Notification/NotificationDropDown/NotificationDropDown';


import logout from '../../../actions/auth/logout';

const ActiveUser = ({ username, image }) => (
  <div className="active_user_logo">
    <div className="dropdown">
      <img
        className="notification_icon dropbtn"
        src="/src/images/Icons.png"
        alt="notification-logo"
      />
      <div className="dropdown-content">
        <div className="username">Notification</div>
        <div>
          <NotificationDropDown />
        </div>
      </div>
    </div>
    <div className="dropdown">
      <img className="profile-icon" src={image || '/src/images/Group 2.1.png'} alt="profile-logo" />
      <div className="dropdown-content">
        <div className="username">
          @
          {username}
        </div>
        <div>
          <a to="/dashboard">Dashboard</a>
        </div>
        <div>
          <a href="/articles/create">Write An Article</a>
        </div>
        <div>
          <a to="/reading-stats">Reading Stats</a>
        </div>
        <div>
          <a to="/bookmarks">Bookmarks</a>
        </div>
        <div>
          <Link to="/notifications">Notification</Link>
        </div>
        <div>
          <a to="/publication">Publication</a>
        </div>
        <div className="user-settings">
          <div>
            <a href={username}>Profile</a>
          </div>
          <div>
            <a href="/">Logout</a>
          </div>
        </div>
      </div>
    </div>
  </div>
);


const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      logout,
    },
    dispatch,
  ),
});
export default connect(mapDispatchToProps)(ActiveUser);
