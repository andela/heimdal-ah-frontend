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


const ActiveUser = (props) => {
  const { actions, username, image } = props;
  return (
    <div className="active_user_logo">
      <div className="dropdown">
        <img
          className="notification_icon dropbtn"
          src="https://res.cloudinary.com/naijavibz/image/upload/v1549376036/Icons.png"
          alt="notification-logo"
        />
        <div className="dropdown-content">
          <div className="username">Notification</div>
          <NotificationDropDown />
        </div>
      </div>
      <div className="dropdown">
        <img className="profile-icon" src={image || 'https://res.cloudinary.com/naijavibz/image/upload/v1549376036/Group_2.1.png'} alt="profile-logo" />
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
            <a to="/notifications">Notification</a>
          </div>
          <div>
            <a to="/publication">Publication</a>
          </div>
          <div className="user-settings">
            <div>
              <a href={username}>Profile</a>
            </div>
            <div>
              <Link to='/' onClick={() => actions.logout()}>Logout</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      logout,
    },
    dispatch,
  ),
});
export default connect(null, mapDispatchToProps)(ActiveUser);
