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
// check that the style/ classname for the 4 columns exist four times
// check for 2 links
// describe('grid layout classname test', () => {
//   const wrapper = shallow(<Footer />);
//   it('should test for the grid classnames', () => {
//     expect(wrapper.find('#footerWrapper')).to.have.length(1);
//     console.log(wrapper.debug);
//   });
// });