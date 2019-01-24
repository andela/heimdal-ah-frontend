/* eslint-disable no-undef */
import React from 'react';
import Button from './Button';

describe('<Button />', () => {
  it('should render the Button component', () => {
    const wrapper = shallow(<Button />);
    expect(wrapper.length).toBe(1);
  });
});
