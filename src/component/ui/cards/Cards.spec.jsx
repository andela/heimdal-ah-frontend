/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import ArticleCard1 from './ArticleCard1';
import ArticleCard2 from './ArticleCard2';
import BookmarksCards from './BookmarksCards';


describe('<ArticleCard1 />', () => {
  it('should render the Article card coreectly', () => {
    const wrapper = shallow(<ArticleCard1 />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<ArticleCard2 />', () => {
  it('should render the Article card coreectly', () => {
    const wrapper = shallow(<ArticleCard2 />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('<BookmarksCards />', () => {
  it('should render the Article card coreectly', () => {
    const wrapper = shallow(<BookmarksCards />);
    expect(wrapper).toMatchSnapshot();
  });
});
