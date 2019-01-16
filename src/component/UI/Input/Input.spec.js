/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import Input from './Input';

describe('<Input />', () => {
  const formData = {
    search: {
      element: 'input',
      className: 'search-input',
      value: '',
      config: {
        name: 'search',
        type: 'text',
        placeholder: 'Search....',
      },
    },
  };

  it('should render the Button component', () => {
    const wrapper = shallow(<Input formDetails={formData} />);
    expect(wrapper.length).toBe(1);
  });
});
