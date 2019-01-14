/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';
import toJson from 'enzyme-to-json';
import Header from './Header';

describe('Testing the App', () => {
  it('should render the Routes', () => {
    const wrapper = shallow(<Header />);
    const nav = wrapper.find('nav');
    expect(nav.length).toBe(1);
  });

  it('should match the snapshot', () => {
    const tree = shallow(<Header />);
    expect(toJson(tree)).toMatchSnapshot();
  });

  // it('simulates click events', () => {
  //   const onButtonClick = sinon.spy();
  //   const wrapper = shallow(<Header />);
  //   const searchIcon = wrapper.find('');

  //   searchIcon.simlate('click');
  //   expect(onButtonClick).to.have.property('callCount', 1);
  // });
});
