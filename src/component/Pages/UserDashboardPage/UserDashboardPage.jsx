import React from 'react';
import './UserDashboardPage.scss';
import { Link } from 'react-router-dom';

/**
  * renderComponent
  * @method Function Function based Component
  * @summary React component for rendering the card components
  * @param {Object} props - React PropTypes
  * @property {String|Object} className - String className compatible object for styling
  * @return {Node} React node containing Userdashboard page
  */
function UserDashboardPage(props) {
  return (
    <div>
      <div className='container userdashboard'>
        <div className='dashboard row'>
          <div className='col stats'>Stats</div>
          <div className='col userdashboard_notification'><Link to='/notification'>Notification</Link></div>
          <div className='col'>Bookmarks</div>
        </div>
      </div>
      <div>
        {props.children}
      </div>
    </div>
  );
}

export default UserDashboardPage;
