/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import toJson from 'enzyme-to-json';
import HeaderButton from './HeaderButton';

describe('testing the Header Button', () => {
  it('should render the image', () => {
    const wrapper = shallow(<HeaderButton />);
    expect(wrapper.length).toBe(1);
  });

  it('should create a snapshot of the logo', () => {
    const tree = shallow(<HeaderButton />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
