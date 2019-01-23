/* eslint-disable no-undef */
import React from 'react';
import Alert from './Alert';

describe('Password Reset Component Test Suite', () => {
  describe('<Alert />', () => {
    it('should render the Alert component', () => {
      const wrapper = mount(<Alert type='success' title='Alert' message='This is alert' />);
      expect(wrapper.length).toBe(1);
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.props().type).toEqual('success');
      expect(wrapper.props().title).toEqual('Alert');
      expect(wrapper.props().message).toEqual('This is alert');
    });
  });
});
