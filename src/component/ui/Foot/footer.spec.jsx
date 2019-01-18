/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

describe('Footer Snapshot Test', () => {
  it('should render the footer page correctly', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('grid layout classname test', () => {
  it('should test for the grid classnames', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('footer').length).toBe(1);
    expect(wrapper.find('footer').hasClass('footerWrapper')).toBe(true);
    expect(wrapper.find('div').at(2).hasClass('col-md-6')).toBe(true);
  });
});
