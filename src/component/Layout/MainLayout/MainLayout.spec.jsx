/* eslint-disable no-undef */
import React from 'react';
import { MainLayout } from './MainLayout';
import Header from '../../ui/header/Header';
import Footer from '../../ui/footer/Footer';

describe('The Layout Component Test Suite', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(
      <MainLayout>
        <div className="test" />
      </MainLayout>,
    );
  });

  it('should render <MainLayout /> Component', () => {
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find(MainLayout)).toBeDefined();
  });

  it('should render exactly one <Header /> component', () => {
    expect(wrapper.find(Header)).toHaveLength(1);
  });

  it('it should render exactly one <Footer /> component', () => {
    expect(wrapper.find(Footer)).toHaveLength(1);
  });

  it('should render children exactly once', () => {
    expect(wrapper.contains(<div className="test" />)).toEqual(true);
    expect(wrapper.find('.test')).toHaveLength(1);
  });
});
