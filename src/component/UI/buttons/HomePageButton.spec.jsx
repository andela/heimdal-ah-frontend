/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import HomepageButton from './HomepageButton';

describe('The Homepage Button', () => {
  it('should render the Link for the routes', () => {
    const wrapper = shallow(<HomepageButton />);
    const Link = wrapper.find('Link');
    expect(Link.length).toBe(1);
  });
});
