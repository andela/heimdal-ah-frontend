/* eslint-disable no-undef */
import React from 'react';
import Alert from './Alert';

describe('Password Reset Component Test Suite', () => {
  describe('<Alert />', () => {
    it('should render the PasswordReset component', () => {
      const wrapper = shallow(<Alert type='success' title='Alert' message='This is alert' />);
      expect(wrapper.length).toBe(1);
      expect(wrapper).toMatchSnapshot();
      expect(wrapper.instance().props.type).to.be.a('string');
      expect(wrapper.instance().props.title).to.be.a('string');
      expect(wrapper.instance().props.message).to.be.a('string');
      expect(wrapper.instance().props.type.length).to.be.gt(0);
      expect(wrapper.instance().props.title.length).to.be.gt(0);
      expect(wrapper.instance().props.message.length).to.be.gt(0);
    });
  });
});
