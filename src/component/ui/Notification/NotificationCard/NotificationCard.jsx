import React from 'react';
import { connect } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import moment from 'moment';
import TimeAgo from 'javascript-time-ago';
import english from 'javascript-time-ago/locale/en';
import FontAwesome from 'react-fontawesome';
import NotificationCheckButton from './NotifcationCheckButton/NotificationCheckButton';

TimeAgo.addLocale(english);
const timeAgo = new TimeAgo('en-US');

/**
  * renderComponent
  * @method
  * @summary React component for displaying a the Notification card
  * @param {object}  Notification contains the Notification of a user
  * @param {Object} props - React PropTypes
  * @property {String|Object} className - String className compatible object for styling
  * @return {Node} React node containing Notification card view
*/
export function NotificationCard(props) {
  const { userId } = props.user.user;
  let notifications = props.result.rows;
  notifications = notifications || [];
  const renderCard = () => notifications.map((item) => {
    const { profile = {} } = item;
    const { data = {} } = item;
    return (
      <div key={item.id}>
        <div className={item.isRead ? 'notification_card row mark_as_read' : 'notification_card row'}>
          {/* <div className="notification_card_a col-3">
            <img className="notification_card_img" src={profile.image} alt="user-profile-img" />
          </div> */}
          <div className="notification_section col-9">
            <div className="notification_card_top">
              <div>
                <span>{profile.username || item.senderUsername}</span>
                <span className="notification_card_message_type">
                Notification:
                  {' '}
                  <span>{item.type.toLowerCase()}</span>
                  {' '}
                </span>
              </div>
              <div>
                <span className="notification_card_mark_read">
                  <NotificationCheckButton
                    isRead={item.isRead}
                    notificationId={item.id}
                    userId={userId}
                  />
                </span>
              </div>
            </div>
            <div className="notification_card_body">
              {data.content}
            </div>
            <div className="notification_card_bottom">
              <span>{item.isRead}</span>
              <FontAwesome name='clock' className='fav_icons' />
              { timeAgo.format(moment(item.createdAt).valueOf()) }
            </div>
            <div />
          </div>
        </div>
      </div>
    );
  });
  return (
    <div>
      {props.loading
        ? (
          <div className="col-md-12 text-center">
            <div className='sweet-loading'>
              <ClipLoader
                sizeUnit="px"
                size={150}
                color="#123abc"
                loading={props.loading}
              />
            </div>
          </div>
        )
        : ''
      }

      {
      renderCard()
    }
    </div>
  );
}

NotificationCard.propTypes = {
};

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

export default connect(mapStateToProps, {})(NotificationCard);
