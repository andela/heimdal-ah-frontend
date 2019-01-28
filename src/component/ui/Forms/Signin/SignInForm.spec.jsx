/* eslint-disable react/no-children-prop */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SignInForm from './SignInForm';
import SignInError from '../../errors/SignInError';
import LoadingSpinner from '../../loadingSpinners/LoadingSpinner';

describe('The Signin Component Test Suite', () => {
  const wrapper = shallow(<SignInForm children={() => {}} />);
  it('should match the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it('should render <SignupForm /> Component', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.find(SignInForm)).toBeDefined();
  });

  it('it should render exactly one <LoadingSpinner /> component', () => {
    expect(wrapper.find(LoadingSpinner)).toHaveLength(1);
  });

  it('it should render exactly one error component', () => {
    expect(wrapper.find(SignInError)).toHaveLength(1);
  });
});
