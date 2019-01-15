/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Rating from './Rating';

describe('Render <Rating />', () => {
  it('it should render Rating component', () => {
    const container = shallow(<Rating />);
    expect(container.length).toBe(1);
  });
});
