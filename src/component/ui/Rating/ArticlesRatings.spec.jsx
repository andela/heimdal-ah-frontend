/* eslint-disable no-undef */
import React from 'react';
import { ArticlesRating } from './ArticlesRating';

describe('Render <ArticleRating />', () => {
  const wrapper = shallow(<ArticlesRating actions={() => { }} getratingstatus='SUCCESS' status='SUCCESS' />);
  it('it should render  ArticleRating component', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
  });

  it('it should simulate click event', () => {
    const spy = jest.spyOn(ArticlesRating.prototype, 'onHandleSubmit');
    wrapper.find('button').at(0).simulate('click');
    expect(spy).toHaveBeenCalled();
  });

  it('should have font awesome class', () => {
    expect(wrapper.find('i').at(0).hasClass('fa fa-star star'));
  });
});
