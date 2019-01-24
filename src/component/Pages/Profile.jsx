import React from 'react';
import FollowButton from '../../container/FollowUser';

const Profile = props => (
  <div>
    <br />
    <p>
        user id is
      {' '}
      {props.match.params.userId}
    </p>
    <br />
    <FollowButton />
  </div>

);
export default Profile;
