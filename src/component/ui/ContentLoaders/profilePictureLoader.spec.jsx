/* eslint-disable no-undef */
import React from 'react';
import ProfilePictureLoader from './ProfilePictureLoader';

describe('The Profile Picture Loader Test Suite', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow((
      <ProfilePictureLoader />
    ));
  });

  it('should render <ProfilePictureLoader /> Component', () => {
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find(ProfilePictureLoader)).toBeDefined();
  });
});
