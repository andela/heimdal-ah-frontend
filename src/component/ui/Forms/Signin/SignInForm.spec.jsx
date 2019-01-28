/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import SignInForm from './SignInForm';

describe('The Signup Component Test Suite', () => {
  // const error = {
  //   errors: {
  //     email: 'email does not exist',
  //     password: 'does not exist',
  //   },
  // };

  // it('should render the SignupFrom component', () => {
  //   const wrapper = shallow(<SignInForm {...error} />);
  //   console.log(wrapper.instance().handleError());
  //   // expect(wrapper).toMatchSnapshot();
  // });
  it('it should render ModalButton component', () => {
    const container = shallow(<SignInForm />);
    expect(container.length).toBe(1);
  });

  // it('should render <SigninForm /> Component', () => {
  //   const wrapper = shallow(<SignInForm {...error} />);
  //   const instance = wrapper.instance();
  //   instance.handleError();
  //   jest.spyOn(instance, 'handleError').mockImplementaiton(jest.fn());
  //   expect(wrapper.instance().handleError).not.toBeCalled();
  // });

  // it('should render exactly four <FormInput /> components', () => {
  //   const wrapper = shallow(<SignInForm />);

  //   expect(wrapper.find(FormInput)).toHaveLength(4);
  // });

  // it('should call incrementCounter when the button is clicked', () => {
  //   const error = true;
  //   const wrapper = shallow(<SignInForm error />);
  //   const instance = wrapper.instance();
  //   jest.spyOn(instance, 'handleError');
  //   wrapper.find('button').simulate('click');
  //   expect(instance.handleError).toHaveBeenCalledWith(error);
  //   expect(wrapper.state('counter')).toBe(2);
  // });
});
