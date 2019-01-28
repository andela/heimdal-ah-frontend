/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SignupError from './signupError';

describe('The Signup Component Test Suite', () => {
  it('should match the snapshot', () => {
    const tree = shallow(<SignupError />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
