/* eslint-disable no-undef */
import React from 'react';
import SignupForm from './SignupForm';
import FormInput from '../../InputElements/FormInput';
import LoadingSpinner from '../../loadingSpinners/LoadingSpinner';
import MainError from '../../errors/MainError';

describe('The Signup Component Test Suite', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<SignupForm handleSignup={() => {}} onChange={() => {}} />);
  });
  it('should render the SignupFrom component', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render <SignupForm /> Component', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper.find(SignupForm)).toBeDefined();
  });

  it('should render exactly four <FormInput /> components', () => {
    expect(wrapper.find(FormInput)).toHaveLength(4);
  });

  it('it should render exactly one <LoadingSpinner /> component', () => {
    expect(wrapper.find(LoadingSpinner)).toHaveLength(1);
  });

  it('it should render exactly one <MainError /> component', () => {
    expect(wrapper.find(MainError)).toHaveLength(1);
  });
});
