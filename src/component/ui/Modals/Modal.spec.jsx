/* eslint-disable no-undef */
import React from 'react';
import toJson from 'enzyme-to-json';
import RootModal from './RootModal';

describe('Render <RootModal />', () => {
  it('it should render RootModal component', () => {
    const container = shallow(<RootModal />);
    expect(container.length).toBe(1);
  });

  it('should match the snapshot', () => {
    const tree = shallow(<RootModal />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
