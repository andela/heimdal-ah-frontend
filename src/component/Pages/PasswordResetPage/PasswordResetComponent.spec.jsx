/* eslint-disable no-undef */
import React from 'react';
import PasswordResetPresentation from './PasswordResetPresentation';
import UpdatePasswordPresentation from './UpdatePasswordPresentation';
import { PasswordUpdate } from './UpdatePassword';
import { PasswordReset } from './PasswordReset';
import resetPassword from '../../../actions/PasswordReset/resetPasswordActions';
import updatePassword from '../../../actions/PasswordReset/updatePasswordActions';

describe('Password Reset Component Test Suite', () => {
  describe('<PasswordReset />', () => {
    it('should render the PasswordResetPresentation component', () => {
      const wrapper = shallow(<PasswordResetPresentation />);
      expect(wrapper.length).toBe(1);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render the PasswordReset component', () => {
      // eslint-disable-next-line react/no-children-prop
      const wrapper = shallow(<PasswordReset status='SUCCESS' children={() => {}} />);
      // eslint-disable-next-line react/no-children-prop
      const wrapper2 = shallow(<PasswordReset status='SUCCESS' children={() => {}} actions={() => {}} />);
      expect(wrapper.length).toBe(1);
      expect(wrapper).toMatchSnapshot();
      const e = { target: { name: 'email', value: 'Heimdal' }, preventDefault: () => {}, actions: (action) => { dispatchEvent(action); } };
      expect(wrapper.state().email).toEqual('');
      wrapper.instance().onHandleChange(e);
      expect(wrapper.instance().state.email).toEqual(e.target.value);
      wrapper2.instance().onHandleSubmit(e);
      expect(jest.fn(wrapper2.instance().props.actions(resetPassword(e.target.value))))
        .not.toHaveBeenCalled();
    });
  });

  describe('<UpdatePassword />', () => {
    it('should render the UpdatePasswordPresentation component', () => {
      const wrapper = shallow(<UpdatePasswordPresentation />);
      expect(wrapper.length).toBe(1);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render the UpdatePassword component', () => {
      // eslint-disable-next-line react/no-children-prop
      const wrapper = shallow(<PasswordUpdate status='SUCCESS' children={() => {}} actions={() => {}} />);
      // eslint-disable-next-line react/no-children-prop
      const wrapper2 = shallow(<PasswordUpdate status='SUCCESS' children={() => {}} actions={() => {}} />);
      expect(wrapper.length).toBe(1);
      expect(wrapper).toMatchSnapshot();
      const e = { target: { name: 'password', value: 'HeimdalPassword' }, preventDefault: () => {}, actions: (action) => { dispatchEvent(action); } };
      expect(wrapper.state().password).toEqual('');
      expect(wrapper.state().confirmpassword).toEqual('');
      wrapper.instance().onHandleChange(e);
      expect(wrapper.instance().state.password).toEqual(e.target.value);
      wrapper2.instance().onHandleSubmit(e);
      const newPassword = {
        password: e.target.value[0],
        confirmpassword: e.target.value[1],
      };
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
      expect(jest.fn(wrapper2.instance().props.actions(updatePassword(token, newPassword))))
        .not.toHaveBeenCalled();
    });
  });
});
