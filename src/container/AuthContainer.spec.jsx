/* eslint-disable react/no-children-prop */
/* eslint-disable no-undef */
import React from 'react';
import { AuthContainer } from './AuthContainer';

describe('<AuthContainer />', () => {
  it('should render the AuthContainer component', () => {
    const wrapper = shallow(<AuthContainer children={() => {}} />);
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the AuthContainer component', () => {
    const wrapper = shallow(<AuthContainer children={() => {}} />);
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('should handle change events', () => {
    const wrapper = shallow(<AuthContainer
      children={() => {}}
      auth={{ isAuthenticated: false, user: {}, error: {} }}
      error={{}}
      email='Heimdal'
      actions={() => {}}
    />);
    const e = { target: { name: 'email', value: 'Heimdal' }, preventDefault: () => {} };
    expect(wrapper.instance().props.email).toEqual('Heimdal');
    wrapper.instance().onChange(e);
    expect(wrapper.instance().props.email).toEqual(e.target.value);
  });

  it('calls `func` when mounted', () => {
    const wrapper = shallow(<AuthContainer
      children={() => {}}
      auth={{ isAuthenticated: false, user: {}, error: {} }}
      error={{}}
      email='Heimdal'
      actions={() => {}}
    />);
    const instance = wrapper.instance();
    jest.spyOn(instance, 'onLoginSubmit');
    const e = { target: { name: 'email', value: 'Heimdal' }, preventDefault: () => {} };
    wrapper.instance().onLoginSubmit(e);
    expect(instance.onLoginSubmit).toHaveBeenCalled();
  });
});
