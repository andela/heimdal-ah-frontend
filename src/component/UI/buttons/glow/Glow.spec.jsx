/* eslint-disable no-undef */
import React from 'react';
import Glow from './Glow';

describe('<Button />', () => {
  it('should render the Glow component', () => {
    const wrapper = shallow(<Glow />);
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});
