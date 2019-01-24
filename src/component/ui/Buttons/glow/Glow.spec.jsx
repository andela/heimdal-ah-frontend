/* eslint-disable no-undef */
import React from 'react';
import Glow from './Glow';


describe('<Button />', () => {
  it('should render the Glow component', () => {
    const handleGlow = () => {};

    const wrapper = shallow(<Glow handleGlow={handleGlow} />);
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });
});
