/* eslint-disable no-undef */
import React from 'react';
import PasswordResetPresentation from './PasswordResetPresentation';
import UpdatePassword from './UpdatePassword';

describe('Password Reset Component Test Suite', () => {
  describe('<PasswordReset />', () => {
    it('should render the PasswordReset component', () => {
      const wrapper = shallow(<PasswordResetPresentation />);
      expect(wrapper.length).toBe(1);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('<UpdatePassword />', () => {
    it('should render the UpdatePassword component', () => {
      const wrapper = shallow(<UpdatePassword />);
      expect(wrapper.length).toBe(1);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
