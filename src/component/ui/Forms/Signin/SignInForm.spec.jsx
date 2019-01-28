/* eslint-disable react/no-children-prop */
/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import SignInForm from './SignInForm';

describe('The Signin Component Test Suite', () => {
  const wrapper = shallow(<SignInForm children={() => {}} />);
  it('should match the snapshot', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  // it('should handle change events', () => {
  //   const e = { target: { name: 'email', value: 'Heimdal' }, preventDefault: () => {} };
   
  //   wrapper.instance().props.onChange(e);
  //   expect(wrapper.instance().props.email).toEqual('Heimdal');
  //   // expect(wrapper.instance().email).toEqual(e.target.value);
  // });

 
});
