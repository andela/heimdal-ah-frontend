/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import FollowButton from './FollowUser';

describe('Followbutton Snapshot Test', () => {
  it('should render the follow button correctly', () => {
    const wrapper = shallow(<FollowButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
