/* eslint-disable react/no-children-prop */
/* eslint-disable no-undef */
import React from 'react';
import AuthContainer from './AuthContainer';

describe('<AuthContainer />', () => {
  it('should render the AuthContainer component', () => {
    const wrapper = shallow(<AuthContainer />);
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the AuthContainer component', () => {
    const wrapper = shallow(<AuthContainer children={() => {}} />);
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});
