/* eslint-disable no-undef */
import React from 'react';
import ArticleLoader from './ArticleLoader';

describe('The Article Loader Test Suite', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow((
      <ArticleLoader />
    ));
  });

  it('should render <ArticleLoader /> Component', () => {
    expect(wrapper).toHaveLength(1);
    expect(wrapper.find(ArticleLoader)).toBeDefined();
  });
});
