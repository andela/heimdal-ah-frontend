/* eslint-disable no-undef */
import React from 'react';
import toJson from 'enzyme-to-json';
import Logo from './Logo';


describe('testing the logo', () => {
  it('should render the image', () => {
    const wrapper = shallow(<Logo />);
    const image = wrapper.find('img');
    expect(image.length).toBe(1);
  });

  it('should create a snapshot of the logo', () => {
    const tree = shallow(<Logo />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
