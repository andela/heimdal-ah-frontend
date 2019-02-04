/* eslint-disable react/no-children-prop */
/* eslint-disable no-undef */
import React from 'react';
import { SearchArticles } from './SearchArticles';

describe('Render <SearchArticles />', () => {
  const wrapper = shallow(<SearchArticles children={() => { }} actions={() => { }} articlesByAuthorStatus='SUCCESS' articlesByTitleStatus='SUCCESS' articlesByTagsStatus='SUCCESS' />);
  it('it should render  ArticleRating component', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });

//   it('it should simulate change event', () => {
//     const spy = jest.spyOn(SearchArticles.prototype, 'onHandleChange');
//     console.log(wrapper.find('input'));
//     wrapper.find('input').at(0).simulate('change');
//     expect(spy).toHaveBeenCalled();
//   });
});
