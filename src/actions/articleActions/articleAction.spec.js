// import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
// import axiosInstance from '../../utils/axiosInstance';
import { getArticlesByPage } from './articles';
import mockData from '../../__mocks__/articleMocks';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});
// const mock = new MockAdapter(axiosInstance, { delayResponse: 500 });

describe('Article action test', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });
  it('should return all articles', () => {
    const expectedResult = [
      {
        articles: mockData.articles,
        type: 'GET_ARTICLES_BY_PAGE',
      },
    ];
    moxios.stubRequest(`${process.env.BASE_URL_PROD}/api/v1/articles`, {
      status: 200,
      response: {
        articles: mockData.articles,
      },
    });

    store.dispatch(getArticlesByPage()).then(() => {
      expect(store.getActions()).toEqual(expectedResult);
    });
  });
});
