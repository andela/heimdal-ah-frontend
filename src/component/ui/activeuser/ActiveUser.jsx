/* eslint-disable require-jsdoc */
/* eslint-disable import/no-named-as-default */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './activeUser.scss';
import NotificationDropDown from '../Notification/NotificationDropDown/NotificationDropDown';
import NotificationLogo from '../../../images/non-notified.png';
import logout from '../../../actions/auth/logout';

class ActiveUser extends Component {
  state ={

  }

  render() {
    const { actions, username, image } = this.props;
    return (
      <div className="active_user_logo">
        <div className="dropdown">
          <img
            className="notification_icon dropbtn"
            src={NotificationLogo}
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
              <Link to="/articles/create">Write An Article</Link>
            </div>
            <div>
              <Link to="/bookmarks">Bookmarks</Link>
            </div>
            <div>
              <Link to="/notifications">Notifications</Link>
            </div>
            <div className="user-settings">
              <div>
                <Link to={`/${username}`}>Profile</Link>
              </div>
              <div>
                <Link to='/' onClick={() => actions.logout()}>Logout</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

/**
 * @method module:Reactator.ReduxContainerBuilderMapStateToProps
 *
 * @param {function} mapStateToProps - function mapping redux state to props
 *
 * @return {ReduxContainerBuilder} this builder
*/
const mapStateToProps = state => ({
  result: state.notification.getData,
  user: state.auth,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(
    {
      logout,
    },
    dispatch,
  ),
});
export default connect(mapStateToProps, mapDispatchToProps)(ActiveUser);
