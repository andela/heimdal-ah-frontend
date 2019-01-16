/* eslint-disable no-undef */
import React from 'react';
import Rating from './Rating';

describe('Render <Rating />', () => {
  it('it should render Rating component', () => {
    const container = shallow(<Rating />);
    expect(container.length).toBe(1);
  });

  it('it should render classname', () => {
    const classname = 'rate';
    const wrapper = shallow(<Rating className={classname} />);
    expect(wrapper.prop('className')).toEqual(classname);
  });

  it('it should render className in i tag', () => {
    const component = shallow(<Rating />);
    expect(component.find('i').at(0).hasClass('fa fa-star'));
  });
});
