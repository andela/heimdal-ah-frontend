import React from 'react';
import { connect } from 'react-redux';
import ClipLoader from 'react-spinners/ClipLoader';
import moment from 'moment';
import TimeAgo from 'javascript-time-ago';
import english from 'javascript-time-ago/locale/en';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router-dom';
import NotificationCheckButton from '../NotificationCard/NotifcationCheckButton/NotificationCheckButton';

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
function NotificationDropDown(props) {
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
          <div className='row notification_dropdown'>
            <div className=''>
              <div>
                {' '}
                <span>{profile.username || item.senderUsername}</span>
              </div>
            </div>
            <div className=''>
            Notification:
              {' '}
              <span>{item.type.toLowerCase()}</span>
              {' '}
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
          <div className='col-12'>
            {data.content}
          </div>
          <div className="notification_dropdown_bottom col-12 text-right">
            <span className='dropdown_btm'>{item.isRead}</span>
            <FontAwesome name='clock' className='fav_icons dropdown' />
            { timeAgo.format(moment(item.createdAt).valueOf()) }
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
      <div className='dropdown_btn_all'><Link to='/notification'>See All</Link></div>
    </div>
  );
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

export default connect(mapStateToProps, {})(NotificationDropDown);
