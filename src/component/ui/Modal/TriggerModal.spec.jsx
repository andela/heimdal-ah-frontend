/* eslint-disable no-undef */
import React from 'react';
import toJson from 'enzyme-to-json';
import ModalButton from './Index';

describe('Render <ModalButton />', () => {
  it('it should render ModalButton component', () => {
    const container = shallow(<ModalButton />);
    expect(container.length).toBe(1);
  });

  it('should match the snapshot', () => {
    const tree = shallow(<ModalButton />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
