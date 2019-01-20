/* eslint-disable no-undef */
import React from 'react';
import toJson from 'enzyme-to-json';
import ModalH from './ModalH';

describe('Render <ModalH />', () => {
  it('it should render ModalH component', () => {
    const container = shallow(<ModalH />);
    expect(container.length).toBe(1);
  });

  it('should match the snapshot', () => {
    const tree = shallow(<ModalH />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
