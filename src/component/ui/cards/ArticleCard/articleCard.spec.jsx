/* eslint-disable no-undef */
import React from 'react';
import ArticleCard from './ArticleCard';

const articleWithoutSomeProperties = {
  body: 'Lorem ipsum detur atetur Lorem',
  user: {
    id: 1,
    profile: {
      username: 'wale',
    },
  },
  likes: [],
  comments: [],
  createdAt: '2019-01-25T00:19:58.726Z',
  id: 17,
  slug: 'What-a-wonderful-world-to-live-u87ctga',
  userId: 1,
  title: 'What a wonderful world to live',
  description: 'This describes a world that is wonderful',
};

const articleWithAllProperties = {
  body: 'Lorem ipsum detur atetur Lorem',
  user: {
    id: 1,
    profile: {
      username: 'wale',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR0UbLajYfsrOhMGIXZBFegzgqKRidwkbGyx8KLdRefF5ZtQLE',
    },

  },
  tags: [{ tagName: 'react' }],
  likes: [],
  comments: [],
  createdAt: '2019-01-25T00:19:58.726Z',
  image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR0UbLajYfsrOhMGIXZBFegzgqKRidwkbGyx8KLdRefF5ZtQLE',
  id: 17,
  slug: 'What-a-wonderful-world-to-live-u87ctga',
  userId: 1,
  title: 'What a wonderful world to live',
  description: 'This describes a world that is wonderful',
};

describe('The Article Card Test Suite', () => {
  describe('The Article Card without some properties', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = shallow((
        <ArticleCard {...articleWithoutSomeProperties} />
      ));
    });

    it('should render <ArticleCard /> Component if tags, image and profile image are missing', () => {
      expect(wrapper).toHaveLength(1);
      expect(wrapper.find(ArticleCard)).toBeDefined();
    });
  });

  describe('The Article Card with all properties', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = shallow((
        <ArticleCard {...articleWithAllProperties} />
      ));
    });

    it('should render <ArticleCard /> Component if all properties are supplied', () => {
      expect(wrapper).toHaveLength(1);
      expect(wrapper.find(ArticleCard)).toBeDefined();
    });
  });
});
