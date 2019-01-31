/* eslint-disable no-undef */
import React from 'react';
import LoadingSpinner from './LoadingSpinner';

describe('The LoadingSpinner Component Test Suite', () => {
  it('should render the LoadingSpinner component', () => {
    const wrapper = shallow(<LoadingSpinner />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render <LoadingSpinner /> Component', () => {
    const wrapper = shallow(<LoadingSpinner />);
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('div')).toBeDefined();
    expect(wrapper.find('i')).toBeDefined();
  });
});
