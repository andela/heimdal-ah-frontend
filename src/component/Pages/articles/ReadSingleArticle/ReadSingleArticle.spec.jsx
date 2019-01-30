/* eslint-disable no-undef */
import React from 'react';
import { ReadSingleArticle } from './ReadSingleArticle';
import ReadSingleArticlePresentation from './ReadSingleArticlePresentation';
import ReadSingleArticleError from './ReadSingleArticleError';


describe('Single Article Component Test Suite', () => {
  describe('<ReadSingleArticle />', () => {
    it('should render the ReadSingleArticle component', () => {
      const match = {
        params: {
          slug: 'hello',
        },
      };
      const actions = {
        getArticleById: () => {},
      };
      const wrapper = shallow(<ReadSingleArticle match={match} actions={actions} />);
      expect(wrapper.length).toBe(1);
      expect(wrapper).toMatchSnapshot();
    });
  });
  describe('<ReadSingleArticlePresentation />', () => {
    it('should render the ReadSingleArticlePresentation component', () => {
      const wrapper = shallow(<ReadSingleArticlePresentation />);
      expect(wrapper.length).toBe(1);
      expect(wrapper).toMatchSnapshot();
    });
  });

  describe('<ReadSingleArticlePresentationError />', () => {
    it('should render the ReadSingleArticleError component', () => {
      const wrapper = shallow(<ReadSingleArticleError />);
      expect(wrapper.length).toBe(1);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
