/* eslint-disable no-undef */
import React from 'react';
import SignupForm from './SignupForm';
import FormInput from '../../InputElements/FormInput';
import LoadingSpinner from '../../loadingSpinners/LoadingSpinner';
import MainError from '../../errors/MainError';

describe('The Layout Component Test Suite', () => {
  it('should render the SignupFrom component', () => {
    const wrapper = shallow(<SignupForm />);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render <SignupForm /> Component', () => {
    const wrapper = shallow(<SignupForm />);
    expect(wrapper.length).toBe(1);
    expect(wrapper.find(SignupForm)).toBeDefined();
  });

  it('should render exactly four <FormInput /> components', () => {
    const wrapper = shallow(<SignupForm />);

    expect(wrapper.find(FormInput)).toHaveLength(4);
  });

  it('it should render exactly one <LoadingSpinner /> component', () => {
    const wrapper = shallow(<SignupForm />);

    expect(wrapper.find(LoadingSpinner)).toHaveLength(1);
  });

  it('it should render exactly one <MainError /> component', () => {
    const wrapper = shallow(<SignupForm />);
    expect(wrapper.find(MainError)).toHaveLength(1);
  });
});
