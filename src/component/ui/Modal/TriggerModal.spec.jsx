/* eslint-disable no-undef */
import React from 'react';
import toJson from 'enzyme-to-json';
import TriggerModal from './TriggerModal';

describe('Render <TriggerModal />', () => {
  it('it should render TriggerModal component', () => {
    const container = shallow(<TriggerModal />);
    expect(container.length).toBe(1);
  });

  it('should match the snapshot', () => {
    const tree = shallow(<TriggerModal />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
