/* eslint-disable no-undef */
import React from 'react';
// import sinon from 'sinon';
import { ReportArticle } from './Index';
import LoadingSpinner from '../../loadingSpinners/LoadingSpinner';
import MainError from '../../errors/MainError';

describe('The ReportArticle Component Test Suite', () => {
  let wrapper;
  beforeAll(() => {
    wrapper = shallow(<ReportArticle toggle={() => {}} articleId={5} actions={() => {}} />);
  });
  it('should render the SignupFrom component', () => {
    expect(wrapper.length).toBe(1);
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find(ReportArticle)).toBeDefined();
  });

  it('should render exactly one form tag', () => {
    expect(wrapper.find('form')).toHaveLength(1);
  });

  it('it should render exactly one <LoadingSpinner /> component', () => {
    expect(wrapper.find(LoadingSpinner)).toHaveLength(1);
  });

  it('it should render exactly one <MainError /> component', () => {
    expect(wrapper.find(MainError)).toHaveLength(1);
  });

  //= ========

  it('should handle input change event for context', () => {
    const event = {
      target: { name: 'context', value: 'henry is a very good boy' },
      preventDefault: () => {},
    };

    wrapper.instance().onChange(event);
    expect(wrapper.state().context).toEqual('henry is a very good boy');
    expect(wrapper.instance().state.context).toEqual(event.target.value);
  });

  it('should handle input change event for reportType', () => {
    const event = { target: { name: 'reportType', value: 'spam' }, preventDefault: () => {} };

    wrapper.instance().onChange(event);
    expect(wrapper.state().reportType).toEqual('spam');
    expect(wrapper.instance().state.reportType).toEqual(event.target.value);
  });

  it('should call the handleArticleReport', () => {
    const event = { preventDefault: () => {} };

    wrapper.instance().handleArticleReport(event);
    expect(wrapper.state().reportType).toEqual('spam');
  });
});
