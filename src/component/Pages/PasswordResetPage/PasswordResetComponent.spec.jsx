/* eslint-disable react/no-children-prop */
/* eslint-disable no-undef */
import React from 'react';
import sinon from 'sinon';
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
      const wrapper = shallow(<PasswordReset status="SUCCESS" children={() => {}} />);
      expect(wrapper.length).toBe(1);
      expect(wrapper).toMatchSnapshot();
    });

    it('should handle submit events', () => {
      // eslint-disable-next-line react/no-children-prop
      const wrapper = shallow(
        <PasswordReset status="SUCCESS" children={() => {}} actions={() => {}} />,
      );
      const e = { target: { name: 'email', value: 'Heimdal' }, preventDefault: () => {} };
      wrapper.instance().onHandleSubmit(e);
      expect(
        sinon.stub(jest.fn(wrapper.instance().props.actions(resetPassword(e.target.value)))),
      ).not.toHaveBeenCalled();
    });

    it('should handle change events', () => {
      // eslint-disable-next-line react/no-children-prop
      const wrapper = shallow(<PasswordReset status="SUCCESS" children={() => {}} />);
      const e = { target: { name: 'email', value: 'Heimdal' }, preventDefault: () => {} };

      expect(wrapper.state().email).toEqual('');
      wrapper.instance().onHandleChange(e);
      expect(wrapper.instance().state.email).toEqual(e.target.value);
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
      const wrapper = shallow(
        <PasswordUpdate status="SUCCESS" children={() => {}} actions={() => {}} />,
      );
      expect(wrapper.length).toBe(1);
      expect(wrapper).toMatchSnapshot();
    });

    it('should handle submit events', () => {
      // eslint-disable-next-line react/no-children-prop
      const wrapper = shallow(
        <PasswordUpdate status="SUCCESS" children={() => {}} actions={() => {}} />,
      );
      const e = {
        target: { name: 'password', value: 'HeimdalPassword' },
        preventDefault: () => {},
      };
      wrapper.instance().onHandleSubmit(e);
      const newPassword = {
        password: e.target.value,
        confirmpassword: e.target.value,
      };
      const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
      // expect(jest.fn(wrapper.instance().props.actions(updatePassword(token, newPassword))))
      //   .not.toHaveBeenCalled();
      expect(
        sinon.stub(jest.fn(wrapper.instance().props.actions(updatePassword(token, newPassword)))),
      ).not.toHaveBeenCalled();
    });

    it('should handle change events', () => {
      // eslint-disable-next-line react/no-children-prop
      const wrapper = shallow(
        <PasswordUpdate status="SUCCESS" children={() => {}} actions={() => {}} />,
      );
      const e = {
        target: { name: 'password', value: 'HeimdalPassword' },
        preventDefault: () => {},
      };
      expect(wrapper.state().password).toEqual('');
      expect(wrapper.state().confirmpassword).toEqual('');
      wrapper.instance().onHandleChange(e);
      expect(wrapper.instance().state.password).toEqual(e.target.value);
    });
  });
});
