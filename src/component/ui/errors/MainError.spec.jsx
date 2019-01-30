/* eslint-disable no-undef */
import React from 'react';
import MainError from './MainError';

describe('The MainError Component Test Suite', () => {
  it('should render the MainError component', () => {
    const wrapper = shallow(<MainError />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render <MainError /> Component', () => {
    const wrapper = shallow(<MainError />);
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('div')).toBeDefined();
  });

  it('should render exactly one span html tag if an error object and a name is passed into the component', () => {
    const errors = {
      mainError: 'The username is invalid',
    };
    const wrapper = shallow(<MainError errors={errors} />);
    expect(wrapper.find('span')).toHaveLength(1);
  });
});
