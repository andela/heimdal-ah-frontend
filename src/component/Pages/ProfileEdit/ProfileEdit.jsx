/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable jsx-a11y/label-has-for */
import React from 'react';
import { toastr as flashToast } from 'react-redux-toastr';
import Textarea from 'react-textarea-autosize';
import './profileEdit.scss';
import Button from '../../ui/Buttons/Button';
import ProfileEditContainer from '../../../container/ProfileEdit/ProfileEditContainer';

const ProfileEdit = props => (
  <ProfileEditContainer username={props.match.params.username}>
    {
      data => (ProfileEdit.profile(data))
    }
  </ProfileEditContainer>
);

ProfileEdit.profile = (data) => {
  const { flashMessage = {} } = data.profile;
  return (
    <div className="profile-edit">
      {flashMessage.showFlash && (
        <span>
          {flashToast[flashMessage.type](flashMessage.title, flashMessage.message)}
        </span>
      )}
      <form>
        <div className="image">
          <img
            className="profile-image"
            src={data.profile.image
              || 'https://pbs.twimg.com/profile_images/839863609345794048/mkpdB9Tf_400x400.jpg'}
            alt="profile"
          />
          <input
            id="file-input"
            type="file"
            name='image'
            onChange={event => data.onChange(event)}
            accept=".jpg, .jpeg, .png"
            hidden
          />
          <label className="overlay" htmlFor="file-input" />
        </div>
        <input
          type="text"
          placeholder="Username"
          name='username'
          value={data.profile.username}
          disabled
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
          <Button type="save-profile" label="Save" onClick={event => data.handleSubmit(event)} />
          <Button type="cancel" label="Cancel" onClick={event => data.handleCancel(event)} />
        </div>
      </form>
    </div>
  );
};

export default ProfileEdit;
