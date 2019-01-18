/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import NavItems from './NavItems';


describe('shallow testing', () => {
  it('should test the component if it renders anything', () => {
    const wrapper = shallow(<NavItems />);
    const header = wrapper.find('li');
    expect(header.length).toEqual(3);
  });

  it('should test the value of a particular div or element', () => {
    const wrapper = shallow(<NavItems />);
    const link = wrapper.find('Link');
    expect(link.length).toBe(3);
  });
});
