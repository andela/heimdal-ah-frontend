/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import updateArticle from './updateArticlesActions';
import setToken from '../../config/setToken';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});
const identifier = 1;
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlSWQiOiIyIiwidXNlcklkIjoxLCJlbWFpbCI6InVzZXJAaGVpbWRhbC5jb20ifQ.J7HZ-3c4vgOsLS377n5HNeamfdM4xspSgHvIxAHEJE0';
const article = {};
const title = 'This is a title';
const body = 'This is the article body';
const description = 'This is a title';

describe('getArticleById Actions Test Suite', () => {
  beforeEach(() => {
    moxios.install();
    store.clearActions();
  });
  afterEach(() => moxios.uninstall());

  describe('updateArticles Actions', () => {
    setToken(token);
    it('returns UPDATE_ARTICLES_SUCCESS when an article has been updated', () => {
      moxios.stubRequest(`${process.env.BASE_URL_PROD}/api/v1/articles/${identifier}`, {
        status: 200,
        response: article,
      });

      const expected = [
        {
          type: 'UPDATE_ARTICLES_SUCCESS',
          payload: article,
        }];

      store.dispatch(updateArticle(title, body, description, identifier)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    it('returns UPDATE_ARTICLES_ERROR when an error occurs when updating an article', () => {
      moxios.stubRequest(`${process.env.BASE_URL_PROD}/api/v1/articles/${identifier}`, {
        status: 500,
        response: 'Server error',
      });

      const expected = [
        {
          type: 'UPDATE_ARTICLES_ERROR',
          payload: 'Server Error',
        }];

      store.dispatch(updateArticle(title, body, description, identifier)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });
});
