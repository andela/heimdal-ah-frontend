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
