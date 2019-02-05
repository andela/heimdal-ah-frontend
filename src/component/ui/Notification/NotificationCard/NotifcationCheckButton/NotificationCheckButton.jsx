/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import { toggleNotificationRead } from '../../../../../actions/NotificationActions/NotificationAction';

/**
  * renderComponent
  * @method
  * @summary React component for displaying a the Notification checkbutton
  * @param {JSX}  NotificationCheckButton for making notification as read or un read
  * @param {Object} props - React PropTypes
  * @property {String|Object} className - String className compatible object for styling
  * @return {Node} React node containing Notification checkbox view
*/
class NotificationCheckButton extends Component {
  MarkAsRead = (e) => {
    e.preventDefault();
    const { userId, notificationId } = this.props;
    this.props.toggleNotificationRead(userId, notificationId);
  }

  render() {
    return (
      <div>
        <div onClick={e => this.MarkAsRead(e)} className={this.props.isRead ? 'mark_as_read_toggle_b' : 'mark_as_read_toggle_a'} />
      </div>
    );
  }
}

Notification.propTypes = {
  toggleNotificationRead: PropTypes.func.isRequired,
};

/**
 * @method module:Reactator.ReduxContainerBuilderMapStateToProps
 *
 * @param {function} mapStateToProps - function mapping redux state to props
 *
 * @return {ReduxContainerBuilder} this builder
*/
const mapStateToProps = state => ({
  user: state.auth,
  error: state.comment.error,
});

export default connect(mapStateToProps, { toggleNotificationRead })(NotificationCheckButton);
