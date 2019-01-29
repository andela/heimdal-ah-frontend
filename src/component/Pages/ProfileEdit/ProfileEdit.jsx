import React from 'react';
import Textarea from 'react-textarea-autosize';
import './ProfileEdit.scss';
import Button from '../../ui/Buttons/Button';
import ProfileEditContainer from '../../../container/ProfileEdit/ProfileEditContainer';

function ProfileEdit() {
  return (
    <ProfileEditContainer>
      {
        data => (ProfileEdit.profile(data))
      }
    </ProfileEditContainer>
  );
}

ProfileEdit.profile = data => (
  <div className="profile-edit">
    <form>
      <div className="image">
        <img
          src={data.profile.image
            || 'https://pbs.twimg.com/profile_images/839863609345794048/mkpdB9Tf_400x400.jpg'}
          alt="profile"
        />
        <div className="overlay" />
      </div>
      <input
        type="text"
        placeholder="Username"
        name='username'
        value={data.profile.username}
        onChange={event => data.onChange(event)}
      />

      <input
        type="text"
        placeholder="Firstname"
        name='firstName'
        value={data.profile.firstName}
        onChange={event => data.onChange(event)}
      />

      <input
        type="text"
        placeholder="Lastname"
        name='lastName'
        value={data.profile.lastName}
        onChange={event => data.onChange(event)}
      />

      <Textarea
        placeholder="Enter a short Bio"
        name='biodata'
        value={data.profile.biodata}
        height="100%"
        onChange={event => data.onChange(event)}
      />

      <input
        type="text"
        placeholder="Location"
        name='location'
        value={data.profile.location}
        onChange={event => data.onChange(event)}
      />

      <div className="text-right">
        <Button type="save-profile" label="Save Profile" onClick={event => data.handleSubmit(event)} />
        <Button type="cancel" label="Cancel" onClick={event => data.handleCancel(event)} />
      </div>
    </form>
  </div>
);

export default ProfileEdit;
