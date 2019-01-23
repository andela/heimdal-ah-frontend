/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react';

import Layout from './Layout';

describe.only('shallow testing', () => {
  it('should test the component if it renders Header', () => {
    const wrapper = shallow(<Layout />);
    const header = wrapper.find('Header');
    expect(header.length).toEqual(1);
  });

  it('renders children when passed in', () => {
    const wrapper = shallow((
      <Layout>
        <div className='container' />
      </Layout>
    ));
    expect(wrapper.contains(<div className='container' />)).toBe(true);
  });
});
