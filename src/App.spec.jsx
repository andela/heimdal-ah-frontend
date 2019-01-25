/* eslint-disable no-undef */
import React from 'react';
import Routes from './routes/routes';

describe('Testing the App', () => {
  it('should render the Routes', () => {
    const wrapper = shallow(<Routes />);
    expect(wrapper.length).toBe(1);
  });
});
