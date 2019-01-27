/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import getArticlesRating from './getArticlesRating';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('getArticlesRating Actions Test Suite', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => moxios.uninstall());

  describe('articlesRating Actions', () => {
    const articleId = 1;
    it('returns GET_ARTICLES_RATING_SUCCESS when an articles rating is retrieved', () => {
      moxios.stubRequest(`${process.env.BASE_URL_PROD}/api/v1/articles/${articleId}`, {
        status: 200,
        response: [{ stars: 4, userId: 1 }, { stars: 5, userId: 2 }],
      });

      const expected = [
        {
          type: 'GET_ARTICLES_RATING_SUCCESS',
          payload: [{ stars: 4, userId: 1 }, { stars: 5, userId: 2 }],
        }];

      store.dispatch(getArticlesRating(1)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    it('returns GET_ARTICLES_RATING_ERROR when an error occurs duering retrieving articles rating', () => {
      moxios.stubRequest(`${process.env.BASE_URL_PROD}/api/v1/ratings/articles/${articleId}`, {
        status: 500,
        response: 'Server error',
      });

      const expected = [
        {
          type: 'GET_ARTICLES_RATING_ERROR',
          payload: 'Server error',
        }];

      store.dispatch(getArticlesRating(1)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });
});
