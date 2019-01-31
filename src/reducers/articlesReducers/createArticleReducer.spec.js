import createArticle from './createAriticleReducer';

describe('CreateArticle Reducers Test Suite', () => {
  it('returns status fAILURE when some feilds are left empty ', () => {
    const initialState = {
      title: '',
      body: '',
    };
    const state = createArticle(initialState,
      {
        type: 'CREATE_ARTICLE_ERROR',
        payload: 'No Field Should Be Left Empty',
      });
    expect(state).toEqual({
      body: null, payload: 'No Field Should Be Left Empty', status: 'FAILURE', title: null,
    });
  });

  it('returns status SUCCESS when payload has values', () => {
    const initialState = {
      title: '',
      body: '',
    };
    const payload = {
      message: 'Article successfully created', title: 'good days ahead', body: 'good days ahead', status: 201,
    };
    const state = createArticle(initialState,
      {
        type: 'CREATE_ARTICLE',
        payload,
      });
    expect(state).toEqual({
      body: 'good days ahead', payload, status: 'SUCCESS', title: 'good days ahead',
    });
  });

  it('returns status SUCCESS when payload has values', () => {
    const initialState = {
      title: '',
      body: '',
    };
    const state = createArticle(initialState,
      {
        type: '',
        payload: '',
      });
    expect(state).toEqual({ body: '', title: '' });
  });
});
