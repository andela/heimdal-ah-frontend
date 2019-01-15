/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import MainLayout from './MainLayout';

describe('The Layout Component Test Suite', () => {
  it('should have MainLayout Component', () => {
    const wrapper = shallow(<MainLayout />);
    expect(wrapper.length).toBe(1);
  });
});
