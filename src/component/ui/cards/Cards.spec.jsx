/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import ArticleCardVertical from './ArticleCardVertical';
import ArticleCardHorizontal from './ArticleCardHorizontal';
import BookmarksCards from './BookmarksCards';


describe('<ArticleCardVertical />', () => {
  it('should render the Article card coreectly', () => {
    const wrapper = shallow(<ArticleCardVertical />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Render <ArticleCardVertical />', () => {
  it('it should render RootModal component', () => {
    const container = shallow(<ArticleCardVertical />);
    expect(container.length).toBe(1);
  });
});

describe('<ArticleCardHorizontal />', () => {
  it('should render the Article card coreectly', () => {
    const wrapper = shallow(<ArticleCardHorizontal />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Render <ArticleCardHorizontal />', () => {
  it('it should render RootModal component', () => {
    const container = shallow(<ArticleCardHorizontal />);
    expect(container.length).toBe(1);
  });
});

describe('<BookmarksCards />', () => {
  it('should render the Article card coreectly', () => {
    const wrapper = shallow(<BookmarksCards />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Render <BookmarksCards />', () => {
  it('it should render RootModal component', () => {
    const container = shallow(<BookmarksCards />);
    expect(container.length).toBe(1);
  });
});
