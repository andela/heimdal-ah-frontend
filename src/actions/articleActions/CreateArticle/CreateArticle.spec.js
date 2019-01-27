// import configureMockStore from 'redux-mock-store';
// import thunk from 'redux-thunk';
// import moxios from 'moxios';
// import articleActions from './createArticleActions';

// const middlewares = [thunk];
// const mockStore = configureMockStore(middlewares);
// const store = mockStore({});
// const articleDetails = {
//   title: 'a good day',
//   body: 'Config will be merged with an order of precedence. The order is library defaults found in lib/defaults.js, then defaults property of the instance, and finally config argument for the request. The latter will take precedence over the former. Here',
//   description: 'lorem ipum ',
// };
// const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlciI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.R4ccooDjMNPtMwse0AioMBVfYrbDh8h86S4RL5N8XD4';

// describe('create an Article Actions Test Suite', () => {
//   beforeEach(() => {
//     moxios.install();
//     store.clearActions();
//   });
//   afterEach(() => moxios.uninstall());

//   describe('Reset Password Actions', () => {
//     moxios.stubRequest(`${process.env.BASE_URL_PROD}/api/v1/articles`, {
//       headers: { 'access-token': token },
//     }, {
//       status: 201,
//       response: { ...articleDetails },
//     });

//     const expected = [
//       {
//         type: 'ACTIONS.CREATE_ARTICLE',
//         payload: { message: 'Article successfully created' },
//       }];

//     store.dispatch(articleActions(articleDetails)).then(() => {
//       expect(store.getActions()).toEqual(expected);
//     });
//   });
// });
