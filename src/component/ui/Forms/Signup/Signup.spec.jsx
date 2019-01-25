/* eslint-disable no-undef */
import React from 'react';
// import connectedSignup, { Signup } from './Signup';
import SignupForm from './SignupForm';

// import { setErrors, removeAnError, clearErrors } from '../../../../actions/errorActions';

// import { signupUser } from '../../../../actions/authActions';

describe('The Signup Component Test Suite', () => {
  const wrapper = shallow(<Signup />);
  it('should render the <SignupForm /> Component', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(SignupForm)).toBeDefined();
  });

  it('should handle input change event for username', () => {
    const event = { target: { name: 'username', value: 'henry' }, preventDefault: () => {} };

    wrapper.instance().onChange(event);
    expect(wrapper.state().username).toEqual('henry');
    expect(wrapper.instance().state.username).toEqual(event.target.value);
  });

  it('should handle input change event for email', () => {
    const event = {
      target: { name: 'email', value: 'henry.izontimi@gmailx.com' },
      preventDefault: () => {},
    };

    wrapper.instance().onChange(event);
    expect(wrapper.state().email).toEqual('henry.izontimi@gmailx.com');
    expect(wrapper.instance().state.email).toEqual(event.target.value);
  });

  it('should handle input change event for password', () => {
    const event = {
      target: { name: 'password', value: '123123qwe' },
      preventDefault: () => {},
    };

    wrapper.instance().onChange(event);
    expect(wrapper.state().password).toEqual('123123qwe');
    expect(wrapper.instance().state.password).toEqual(event.target.value);
  });

  it('should handle input change event for passwordConfirmation', () => {
    const event = {
      target: { name: 'passwordConfirmation', value: '123123qwe' },
      preventDefault: () => {},
    };

    wrapper.instance().onChange(event);
    expect(wrapper.state().passwordConfirmation).toEqual('123123qwe');
    expect(wrapper.instance().state.passwordConfirmation).toEqual(event.target.value);
  });

  // it('should handle submit events', () => {
  //   expect(wrapper.state()).toEqual({ ...wrapper.state() });
  //   // const signupData = { ...wrapper.state() };
  //   const event = { preventDefault: () => {} };

  // wrapper.instance().handleSignup(event);
  // expect(
  //   sinon.stub(jest.fn(wrapper.instance().props.actions(setErrors()))),
  // ).not.toHaveBeenCalled();
  // });
});
