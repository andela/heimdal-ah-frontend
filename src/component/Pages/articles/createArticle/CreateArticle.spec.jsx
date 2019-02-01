import React from 'react';
// import sinon from 'sinon';
import CreateArticles from './CreateArticles';


describe('Create Articles', () => {
  describe('<CreateArticles />', () => {
    it('should match the Create article component', () => {
      const wrapper = shallow(<CreateArticles />);
      expect(wrapper.length).toBe(1);
      expect(wrapper).toMatchSnapshot();
    });
  });
});
