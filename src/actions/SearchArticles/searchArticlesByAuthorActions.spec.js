/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import searchArticlesByAuthor from './searchArticlesByAuthorActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('searchArticlesByAuthor Actions Test Suite', () => {
  beforeEach(() => {
    moxios.install();
    store.clearActions();
  });
  afterEach(() => moxios.uninstall());

  describe('searchArticlesByAuthor Actions', () => {
    it('returns SEARCH_ARTICLES_BY_AUTHOR_SUCCESS when an article is returned based on author search params', () => {
      moxios.stubRequest(`${process.env.BASE_URL_PROD}/api/v1/articles_search/author?author=segun&offset=0&size=1`, {
        status: 200,
        response: [{}],
      });

      const expected = [
        {
          type: 'SEARCH_ARTICLES_BY_AUTHOR_SUCCESS',
          payload: [{}],
        }];

      store.dispatch(searchArticlesByAuthor('segun', 0, 1)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    it('returns SEARCH_ARTICLES_BY_AUTHOR_FAILED when there is no author for an article', () => {
      moxios.stubRequest(`${process.env.BASE_URL_PROD}/api/v1/articles_search/author?author=ERX4512&offset=0&size=1`, {
        status: 404,
        response: 'Sorry, no articles found matching your search parameters',
      });

      const expected = [
        {
          type: 'SEARCH_ARTICLES_BY_AUTHOR_FAILED',
          payload: 'Sorry, no articles found matching your search parameters',
        }];

      store.dispatch(searchArticlesByAuthor('ERX4512', 0, 1)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    it('returns SEARCH_ARTICLES_BY_AUTHOR_ERROR when there is an error searching for article by an author', () => {
      moxios.stubRequest(`${process.env.BASE_URL_PROD}/api/v1/articles_search/author?author=ERX4512&offset=0&size=1`, {
        status: 500,
        response: 'Server error',
      });

      const expected = [
        {
          type: 'SEARCH_ARTICLES_BY_AUTHOR_ERROR',
          payload: 'Server error',
        }];

      store.dispatch(searchArticlesByAuthor('ERX4512', 0, 1)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });
});
