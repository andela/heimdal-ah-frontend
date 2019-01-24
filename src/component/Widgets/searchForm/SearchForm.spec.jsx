/* eslint-disable no-undef */
import React from 'react';
import SearchForm from './SearchForm';

describe('<Button />', () => {
  it('should render the Button component', () => {
    const wrapper = shallow(<SearchForm />);
    expect(wrapper.length).toBe(1);
  });
});
