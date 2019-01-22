/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';
import ArticleCardVertical from './ArticleCardVertical';
import ArticleCardHorizontal from './ArticleCardHorizontal';
import BookmarksCards from './BookmarksCards';


const article = 'Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum psum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicingsit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur adipisicing Lorem ipsum psum dolor sit amet consectetur adipisicing Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur adipisicing  dolor sit amet consectetur';
const articleImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR0UbLajYfsrOhMGIXZBFegzgqKRidwkbGyx8KLdRefF5ZtQLE';
const userName = 'Henry Henry Henry Henry';
const userImage = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR0UbLajYfsrOhMGIXZBFegzgqKRidwkbGyx8KLdRefF5ZtQLE';
const title = 'Lorem ipsum dolor';
const commentCount = ' 10';
const updatedTime = '5 mins';
describe('<ArticleCardVertical />', () => {
  it('should render the Article card coreectly', () => {
    const wrapper = shallow(
      <ArticleCardVertical
        article={article}
        articleImage={articleImage}
        articleTitle={title}
        userImage={userImage}
        username={userName}
        commentCount={commentCount}
        updatedTime={updatedTime}
      />,
    );
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
    const wrapper = shallow(<ArticleCardHorizontal
      article={article}
      articleImage={articleImage}
      articleTitle={title}
      userImage={userImage}
      username={userName}
      commentCount={commentCount}
      updatedTime={updatedTime}
    />);
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
    const wrapper = shallow(<BookmarksCards
      article={article}
      articleImage={articleImage}
      articleTitle={title}
      userImage={userImage}
      username={userName}
      commentCount={commentCount}
      updatedTime={updatedTime}
    />);
    expect(wrapper).toMatchSnapshot();
  });
});

describe('Render <BookmarksCards />', () => {
  it('it should render RootModal component', () => {
    const container = shallow(<BookmarksCards />);
    expect(container.length).toBe(1);
  });
});
