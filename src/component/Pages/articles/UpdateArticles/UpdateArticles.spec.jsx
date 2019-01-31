/* eslint-disable no-undef */
import React from 'react';
import sinon from 'sinon';
import UpdateArticlesPresentation from './UpdateArticlesPresentation';
import { UpdateArticles } from './UpdateArticles';
import getArticlesById from '../../../../actions/articleActions/getArticlesByIdActions';
import updateArticles from '../../../../actions/articleActions/updateArticlesActions';
import setToken from '../../../../config/setToken';

describe('Update Articles Component Test Suite', () => {
  describe('<UpdateArticlesPresentation />', () => {
    it('should render the UpdateArticlesPresentation component', () => {
      const wrapper = shallow(<UpdateArticlesPresentation />);
      expect(wrapper.length).toBe(1);
      expect(wrapper).toMatchSnapshot();
    });

    it('should render the PasswordReset component', () => {
      // eslint-disable-next-line react/no-children-prop
      const wrapper = shallow(<UpdateArticles updateArticlesStatus='SUCCESS' body='body' title='title' children={() => { }} actions={() => 'clicked me'} />);
      expect(wrapper.length).toBe(1);
      expect(wrapper).toMatchSnapshot();
    });

    it('should handle submit events', () => {
      // eslint-disable-next-line react/no-children-prop
      const wrapper = shallow(<UpdateArticles updateArticlesStatus='SUCCESS' body='body' title='title' children={() => { }} actions={() => 'clicked me'} />);
      const updatedTitle = 'updatedTitle';
      const updatedText = 'updatedText';
      const description = 'updatedTitle';
      const identifier = 1;
      const e = { preventDefault: () => { } };

      wrapper.instance().onHandleSubmit(e);
      expect(sinon.stub(jest.fn(wrapper.instance().props.actions(updateArticles(updatedTitle, updatedText, description, identifier)))))
        .not.toHaveBeenCalled();
    });

    it('should handle change events', () => {
      // eslint-disable-next-line react/no-children-prop
      const wrapper = shallow(<UpdateArticles updateArticlesStatus='SUCCESS' body='body' title='title' children={() => { }} actions={() => 'clicked me'} />);
      //   const e = { target: { name: 'email', value: 'Heimdal' }, preventDefault: () => {} };
      expect(wrapper.state().updatedTitle).toEqual('');
      expect(wrapper.state().updatedText).toEqual('');
      wrapper.instance().onHandleText('article text');
      wrapper.instance().onHandleTitle('article title');
      expect(wrapper.instance().state.updatedText).toEqual('article text');
      expect(wrapper.instance().state.updatedTitle).toEqual('article title');
    });

    it('should get article by id', () => {
      // eslint-disable-next-line react/no-children-prop
      const wrapper = shallow(<UpdateArticles updateArticlesStatus='SUCCESS' body='body' title='title' children={() => { }} actions={() => { }} />);
      const identifier = 1;
      localStorage.setItem('access-token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlSWQiOiIyIiwidXNlcklkIjoxLCJlbWFpbCI6InVzZXJAaGVpbWRhbC5jb20ifQ.J7HZ-3c4vgOsLS377n5HNeamfdM4xspSgHvIxAHEJE0');
      const token = localStorage.getItem('access-token');
      setToken(token);
      wrapper.instance().componentDidMount();
      expect(jest.fn(getArticlesById(identifier)).mock.calls.length).toBe(0);
    });
  });
});
