/* eslint-disable no-undef */
import React from 'react';
import FormInput from './FormInput';

describe('The FormInput Component Test Suite', () => {
  it('should render the FormInput component', () => {
    const wrapper = shallow(<FormInput />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render <FormInput /> Component', () => {
    const wrapper = shallow(<FormInput />);
    expect(wrapper.length).toBe(1);
    expect(wrapper.find('input')).toBeDefined();
  });

  it('should render exactly one small html tag if an error object and a name is passed into the component', () => {
    const errors = {
      username: ['The username is invalid'],
    };
    const name = 'username';
    const wrapper = shallow(<FormInput errors={errors} name={name} />);

    expect(wrapper.find('small')).toHaveLength(1);
  });

  it('should render exactly one small html tag if an error object and a name is passed into the component', () => {
    const errors = {
      username: { msg: 'The username is invalid' },
    };
    const name = 'username';
    const wrapper = shallow(<FormInput errors={errors} name={name} />);

    expect(wrapper.find('small')).toHaveLength(1);
  });
});
