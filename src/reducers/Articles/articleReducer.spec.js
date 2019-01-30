import articleReducer from './articleReducer';
import { ACTIONS } from '../../actions/actionTypes';
import MockData from '../../__mocks__/articleMocks';

describe('Test article reducer', () => {
  it('return all articles once GET_ALL_ARTICLES is dispatched', () => {
    const initialState = {
      articles: {
        isLoading: false,
        count: 0,
        rows: [],
      },
    };

    const state = articleReducer(initialState,
      {
        type: ACTIONS.GET_ALL_ARTICLES,
        payload: MockData.articles,
      });
    expect(state).toEqual({
      articles: {
        isLoading: false,
        count: MockData.articles.count,
        rows: MockData.articles.rows,
      },
    });
  });

  it('set loader when articles is loading', () => {
    const initialState = {
      articles: {
        isLoading: false,
        count: 0,
        rows: [],
      },
    };
    const state = articleReducer(initialState,
      {
        type: ACTIONS.SET_LOADER,
      });
    expect(state).toEqual({
      articles: {
        isLoading: true,
        count: 0,
        rows: [],
      },
    });
  });
  it('return default state', () => {
    const initialState = {
      articles: {
        isLoading: false,
        count: 0,
        rows: [],
      },
    };
    const state = articleReducer(initialState,
      {
        type: '',
      });
    expect(state).toEqual({
      articles: {
        isLoading: false,
        count: 0,
        rows: [],
      },
    });
  });
});
