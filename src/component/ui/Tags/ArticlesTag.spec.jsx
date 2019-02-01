/* eslint-disable no-undef */
import React from 'react';
import ArticleTag from './ArticlesTag';

describe('<ArticleTag />', () => {
  it('should render the Button component', () => {
    const wrapper = shallow(<ArticleTag />);
    expect(wrapper.length).toBe(1);
  });
});
