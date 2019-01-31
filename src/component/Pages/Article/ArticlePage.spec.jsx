/* eslint-disable no-undef */
import React from 'react';
import toJson from 'enzyme-to-json';
import { shallow } from 'enzyme';
import ArticleListPage from './ArticleListPage';

describe('Mount Article page', () => {
  it('should render the article page', () => {
    const tree = shallow(<ArticleListPage />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
