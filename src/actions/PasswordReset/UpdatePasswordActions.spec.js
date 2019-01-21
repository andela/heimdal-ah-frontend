/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import updatePassword from './updatePasswordActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});
const newPassword = {
  password: 'Abcdefgh123456789@@',
  confirmpassword: 'Abcdefgh123456789@@',
};
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlciI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.R4ccooDjMNPtMwse0AioMBVfYrbDh8h86S4RL5N8XD4';


describe('UpdatePassword Actions Test Suite', () => {
  beforeEach(() => {
    moxios.install();
    store.clearActions();
  });
  afterEach(() => moxios.uninstall());

  describe('Reset Password Actions', () => {
    it('returns UPDATE_PASSWORD_SUCCESS when a user successfully updates his password', () => {
      moxios.stubRequest(`${process.env.BASE_URL_PROD}/api/v1/password/reset/${token}`, {
        status: 200,
        response: 'password update was successful',
      });

      const expected = [
        {
          type: 'UPDATE_PASSWORD_SUCCESS',
          payload: 'password update was successful',
        }];

      store.dispatch(updatePassword(token, newPassword)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    it('returns UPDATE_PASSWORD_ERROR when an error occurs during updating users password', () => {
      moxios.stubRequest(`${process.env.BASE_URL_PROD}/api/v1/password/reset/${token}`, {
        status: 500,
        response: 'Server error',
      });

      const expected = [
        {
          type: 'UPDATE_PASSWORD_ERROR',
          payload: 'Server error',
        }];

      store.dispatch(updatePassword(token, newPassword)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });
});
