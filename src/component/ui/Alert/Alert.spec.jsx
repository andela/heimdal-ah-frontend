/* eslint-disable no-undef */
import React from 'react';
import Alert from './Alert';

describe('Password Reset Component Test Suite', () => {
  describe('<Alert />', () => {
    it('should render the PasswordReset component', () => {
      const wrapper = shallow(<Alert type='success' title='Alert' message='This is alert' />);
      expect(wrapper.length).toBe(1);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
