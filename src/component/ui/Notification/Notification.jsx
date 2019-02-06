/* eslint-disable import/no-named-as-default */
/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
/* eslint-disable react/forbid-prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Notification.scss';
import { connect } from 'react-redux';
import {
  subscribeToNotification,
  checkSubscription,
  getUserNotification,
  getNewNotification,
} from '../../../actions/NotificationActions/NotificationAction';
import NotificationCard from './NotificationCard/NotificationCard';

/**
  * renderComponent
  * @method Class Class based Component
  * @summary React component for rendering the card components
  * @param {object}  comment contains the comments of an article
  * @param {Object} props - React PropTypes
  * @property {String|Object} className - String className compatible object for styling
  * @return {Node} React node containing comment card view
  */
class Notification extends Component {
  state = {
    subscribed: this.props.userDetails && this.props.userDetails.notification,
  }

  componentWillMount() {
    const { username } = this.props.user.user;
    this.props.checkSubscription(username);
  }

  componentDidMount() {
    const { userId } = this.props.user.user;
    this.props.getUserNotification(userId);
    if (this.props.userDetails && this.props.userDetails.notification) {
      this.setState({
        subscribed: this.props.userDetails.notification,
      });
    }
    this.props.getNewNotification();
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      subscribed: nextProps.subscribe.status || nextProps.userDetails.notification,
    });
  }

  subscribe = (e) => {
    e.preventDefault();
    this.props.subscribeToNotification();
  }

  /**
     * Renders the component.
     *
     * @memberof app.components.Comment
     * @return {string} - HTML markup for the component
   */
  render() {
    return (
      <div>
        <div className='container notification_header'>
          <div className='notification_container'>
            <div>Notification</div>
          </div>
          <div className='subscribe_btn_container'>
            <button onClick={e => this.subscribe(e)} className='subscribe_btn' type='submit'>
              {this.state.subscribed ? 'Unsubscribe' : 'Subscribe'}
            </button>
          </div>
        </div>
        <NotificationCard />
      </div>
    );
  }
}

Notification.propTypes = {
  subscribeToNotification: PropTypes.func.isRequired,
  message: PropTypes.object,
  subscribe: PropTypes.string,
};

/**
 * @method module:Reactator.ReduxContainerBuilderMapStateToProps
 *
 * @param {function} mapStateToProps - function mapping redux state to props
 *
 * @return {ReduxContainerBuilder} this builder
*/
const mapStateToProps = state => ({
  subscribe: state.notification.data,
  user: state.auth,
  userDetails: state.notification.userProfile.user,
  toggle: state.notification.toggleData,
});

export default connect(mapStateToProps, {
  subscribeToNotification,
  getUserNotification,
  checkSubscription,
  getNewNotification,
})(Notification);
