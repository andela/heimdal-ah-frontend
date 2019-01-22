/* eslint-disable no-undef */
import React from 'react';
import Header from './Header.jsx';

describe('<Header />', () => {
  it('should render the Header component', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.length).toBe(1);
  });

  it('should test the children of the header', () => {
    const wrapper = shallow(<Header />);
    const children = wrapper.find('nav');
    expect(children.length).toBe(1);
  });
});
