/* eslint-disable no-dupe-keys */
/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import jwt from 'jsonwebtoken';
import { ACTIONS } from '../actionTypes';
import login from './signin';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('Login Action', () => {
  beforeEach(() => moxios.install());
  afterEach(() => moxios.uninstall());
  const loginData = {
    email: 'peter@mail.com',
    password: '12345dde',
  };
  const token = 'hggfdgAFFG.ljgghghghhPOUm_KI';

  it('creates SET_CURRENT_USER when login action is succesful', (done) => {
    moxios.stubRequest(`${process.env.BASE_URL_PROD}/auth/login`, {
      status: 200,
      response: 'Login was succesful',
    });

    const expected = [{
      type: ACTIONS.SET_CURRENT_USER,
      user: jwt.decode(token),
    }];
    store.dispatch(login(loginData))
      .then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    done();
  });

  it('creates SET_CURRENT_USER_FAIL when login is not successful', (done) => {
    moxios.stubRequest(`${process.env.BASE_URL_PROD}/auth/login`, {
      status: 404,
      response: 'Login unsuccessful',
    });

    const expected = [{
      type: ACTIONS.SET_CURRENT_USER_FAIL,
      error: 'Login unsuccessful',
    }];
    store.dispatch(login(loginData))
      .then(() => {
        expect(store.getActions()).toEqual(expected);
      });
    done();
  });
});
