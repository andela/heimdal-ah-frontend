/* eslint-disable no-undef */
import React from 'react';
import ActiveUser from './ActiveUser';

describe('testing the Header Button', () => {
  it('should render the image', () => {
    const wrapper = shallow(<ActiveUser />);
    expect(wrapper.length).toBe(1);
  });
});
