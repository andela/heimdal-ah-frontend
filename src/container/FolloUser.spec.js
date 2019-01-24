/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import FollowButton from './FollowUser';

describe('Footer Snapshot Test', () => {
  it('should render the footer page correctly', () => {
    const wrapper = shallow(<FollowButton />);
    expect(wrapper).toMatchSnapshot();
  });
});
