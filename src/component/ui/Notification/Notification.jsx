import React, { Component } from 'react';
import './Notification.scss';

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
  state={

  }

  render() {
    return (
      <div>
        <div className='container notification_header'>
          <div>Notification</div>
          <p className='notification_header_sm'>Your Notifications</p>
        </div>
        <div className='notification_card row'>
          <div className="notification_card_a col-3">
            <img className="notification_card_img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDlA27UJdhx1W6_SOMyFZqoVqLW91JCGUzjT545L6PPka-Y9Is" alt="user-profile-img" />
          </div>
          <div className="notification_section col-9">
            <div className="notification_card_top">
              <div>
                <span>Henry P</span>
                <span className="notification_card_message_type">message you</span>
              </div>
              <div>
                <span className="notification_card_mark_read">
                  <label htmlFor='checkbox'>
                    <input id='checkbox' type="checkbox" />
                    <span className="checkmark" />
                  </label>
                </span>
              </div>
            </div>
            <div className="notification_card_body">
          Content of the message being sent to the user
            </div>
            <div className="notification_card_bottom"> Date June</div>
            <div />
          </div>
        </div>
      </div>
    );
  }
}


export default Notification;
