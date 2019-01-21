/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import resetPassword from './resetPasswordActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});
const userEmail = {
  email: 'email@email.com',
};

describe('ResetPassword Actions Test Suite', () => {
  beforeEach(() => {
    moxios.install();
    store.clearActions();
  });
  afterEach(() => moxios.uninstall());

  describe('Reset Password Actions', () => {
    it('returns RESET_PASSWORD_SUCCESS when an email has been successfully sent to the user to reset his password', () => {
      moxios.stubRequest(`${process.env.BASE_URL_PROD}/api/v1/password/forget`, {
        status: 200,
        response: 'Email was sent successfully',
      });

      const expected = [{ type: 'START_LOADING', payload: 'Loading...' },
        { type: 'STOP_LOADING', payload: 'Loading Finished' },
        {
          type: 'RESET_PASSWORD_SUCCESS',
          payload: 'Email was sent successfully',
        }];

      store.dispatch(resetPassword(userEmail.email)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });

    it('returns RESET_PASSWORD_ERROR when an error occurs when a user tries to reset his password', () => {
      moxios.stubRequest(`${process.env.BASE_URL_PROD}/api/v1/password/forget`, {
        status: 500,
        response: 'Server error',
      });

      const expected = [{ type: 'START_LOADING', payload: 'Loading...' },
        { type: 'STOP_LOADING', payload: 'Loading Finished' },
        {
          type: 'RESET_PASSWORD_ERROR',
          payload: 'Server error',
        }];

      store.dispatch(resetPassword(userEmail.email)).then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    });
  });
});
