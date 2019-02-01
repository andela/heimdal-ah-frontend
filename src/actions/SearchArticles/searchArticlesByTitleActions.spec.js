/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import searchArticlesByTitle from './searchArticlesByTitleActions';

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
    it('returns SEARCH_ARTICLES_BY_TITLE_SUCCESS when an article is returned based on title search params', () => {
      moxios.stubRequest(`${process.env.BASE_URL_PROD}/api/v1/articles_search/title?title=This&offset=0&size=1`, {
        status: 200,
        response: {},
      });

      const expected = [
        {
          type: 'SEARCH_ARTICLES_BY_TITLE_SUCCESS',
          payload: {},
        }];

      store.dispatch(searchArticlesByTitle('This', 0, 1)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    it('returns SEARCH_ARTICLES_BY_TITLE_FAILED when there is no title for an article', () => {
      moxios.stubRequest(`${process.env.BASE_URL_PROD}/api/v1/articles_search/title?title=Thiz&offset=0&size=1`, {
        status: 404,
        response: 'Sorry, no articles found matching your search parameters',
      });

      const expected = [
        {
          type: 'SEARCH_ARTICLES_BY_TITLE_FAILED',
          payload: 'Sorry, no articles found matching your search parameters',
        }];

      store.dispatch(searchArticlesByTitle('Thiz', 0, 1)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    it('returns SEARCH_ARTICLES_BY_TITLE_ERROR when there is an error searching for article by title', () => {
      moxios.stubRequest(`${process.env.BASE_URL_PROD}/api/v1/articles_search/title?title=This&offset=0&size=1`, {
        status: 500,
        response: 'Server error',
      });

      const expected = [
        {
          type: 'SEARCH_ARTICLES_BY_TITLE_ERROR',
          payload: 'Server error',
        }];

      store.dispatch(searchArticlesByTitle('This', 0, 1)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });
});
