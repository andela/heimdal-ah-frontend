/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import { getArticleById } from './getArticlesByIdActions';
import setToken from '../../config/setToken';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});
const identifier = 1;
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlSWQiOiIyIiwidXNlcklkIjoxLCJlbWFpbCI6InVzZXJAaGVpbWRhbC5jb20ifQ.J7HZ-3c4vgOsLS377n5HNeamfdM4xspSgHvIxAHEJE0';
const article = {};

describe('getArticleById Actions Test Suite', () => {
  beforeEach(() => {
    moxios.install();
    store.clearActions();
  });
  afterEach(() => moxios.uninstall());

  describe('getArticleById Actions', () => {
    setToken(token);
    it('returns GET_ARTICLES_BY_ID_SUCCESS when an article has been retrieved on page load', () => {
      moxios.stubRequest(`${process.env.BASE_URL_PROD}/api/v1/articles/${identifier}`, {
        status: 200,
        response: article,
      });

      const expected = [
        {
          type: 'GET_ARTICLES_BY_ID_SUCCESS',
          payload: article,
        }];

      store.dispatch(getArticleById(identifier)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    it('returns GET_ARTICLES_BY_ID_ERROR when an error occurs when retrieving article on page load', () => {
      moxios.stubRequest(`${process.env.BASE_URL_PROD}/api/v1/articles/${identifier}`, {
        status: 500,
        response: 'Server error',
      });

      const expected = [
        {
          type: 'GET_ARTICLES_BY_ID_ERROR',
          payload: 'Server Error',
        }];

      store.dispatch(getArticleById(identifier)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });
});
