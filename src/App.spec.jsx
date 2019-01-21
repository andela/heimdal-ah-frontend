/* eslint-disable no-undef */
import React from 'react';
import toJson from 'enzyme-to-json';
import App from './App';

describe('Testing the App', () => {
  it('should render the Routes', () => {
    const wrapper = shallow(<App />);
    const routes = wrapper.find('Routes');
    expect(routes.length).toBe(1);
  });

  it('should match the snapshot', () => {
    const tree = shallow(<App />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
