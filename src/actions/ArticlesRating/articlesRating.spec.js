/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import articlesRating from './articlesRating';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('ResetPassword Actions Test Suite', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => moxios.uninstall());

  describe('articlesRating Actions', () => {
    const articleId = 1;
    it('returns ARTICLES_RATING_SUCCESS when an article is rated', () => {
      moxios.stubRequest(`${process.env.BASE_URL_PROD}/api/v1/ratings/articles/${articleId}`, {
        status: 201,
        response: 5,
      });

      const expected = [
        {
          type: 'ARTICLES_RATING_SUCCESS',
          payload: 5,
        }];

      store.dispatch(articlesRating(5, 1)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    it('returns ARTICLES_RATING_ERROR when an error occurs when a user tries to rate an article', () => {
      moxios.stubRequest(`${process.env.BASE_URL_PROD}/api/v1/ratings/articles/${articleId}`, {
        status: 500,
        response: 'Server error',
      });

      const expected = [
        {
          type: 'ARTICLES_RATING_ERROR',
          payload: 'Server error',
        }];

      store.dispatch(articlesRating(5, 1)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });
});
