/* eslint-disable no-undef */
import React from 'react';
import ProfileInfoLoader from './ProfileInfoLoader';

describe('The Profile Info Loader Component Test Suite', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow((
      <ProfileInfoLoader />
    ));
  });

  it('should render <ProfileInfoLoader /> Component', () => {
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find(ProfileInfoLoader)).toBeDefined();
  });
});
