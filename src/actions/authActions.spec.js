/* eslint-disable no-undef */

import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { setAuthUser } from './authActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('The authActions Test Suite', () => {
  beforeEach(() => {
    store.clearActions();
  });

  it('should setup setAuthUser action object', () => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoid2FsZSIsImVtYWlsIjoiYWRtaW5AaGVpbWRhbC5jb20iLCJpbWFnZSI6Imh0dHBzOi8vaGFyZHdhcmVtYXNzaXZlLmNvbS9zaXRlcy9kZWZhdWx0L2ZpbGVzL2F2YXRhci91c2Vycy9pYW5fc3F1YXJlX3Byb2ZpbGVfcGljdHVyZS5qcGciLCJyb2xlSWQiOjEsImlhdCI6MTU0ODg0Nzc0NiwiZXhwIjoxNTQ4OTM0MTQ2fQ.N1nhO504ulvWphRaiJ8iz78OysDM0XFfzQTxpqne-3E';
    const action = setAuthUser(token);

    expect(action).toEqual({
      type: 'SET_AUTH_USER',
      payload: {
        userId: 1,
        username: 'wale',
        email: 'admin@heimdal.com',
        image: 'https://hardwaremassive.com/sites/default/files/avatar/users/ian_square_profile_picture.jpg',
        roleId: 1,
        iat: 1548847746,
        exp: 1548934146,
      },
    });
  });
});
