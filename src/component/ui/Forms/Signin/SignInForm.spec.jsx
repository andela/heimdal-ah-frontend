/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SignInForm from './SignInForm';

describe('The Signup Component Test Suite', () => {
  it('should match the snapshot', () => {
    const tree = shallow(<SignInForm />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
