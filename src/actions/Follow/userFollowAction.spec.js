/* eslint-disable no-undef */
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import axios from 'axios';
import sinon from 'sinon';
import { ACTIONS } from '../actionTypes';
import * as apiRequests from './userFollowAction';
import mockData from '../../__mocks__/fileMocks';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

describe('User Follow Actions Test', () => {
  describe('get All Followers', () => {
    it('should return all the followers data as an object', () => {
      const expectedFollowers = mockData.FollowersResponse.allFollowers.data;
      const mockGetRequest = sinon.stub(axios, 'get').resolves({ data: 'some data' });
      const expectedAction = [
        {
          type: ACTIONS.GET_ALL_FOLLOWERS,
          followers: expectedFollowers,
        },
      ];

      store.dispatch(apiRequests.getAllFollowers()).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
      mockGetRequest.restore();
    });


    it('It should follow a user', () => {
      const followerId = 1;
      const expectedFollowers = mockData.FollowersResponse.allFollowers.data;
      const mockPostRequest = sinon.stub(axios, 'post').resolves({ data: { message: 'some message', followedId: 1 } });
      const expectedAction = [
        {
          type: ACTIONS.FOLLOW_USER,
          followers: expectedFollowers,
        },
      ];

      store.dispatch(apiRequests.followUser(followerId)).then(() => {
        expect(store.getActions()).toEqual(expectedAction);
      });
      mockPostRequest.restore();
    });
  });
  it('It should unfollow a user', () => {
    const followerId = 1;
    const expectedFollowers = mockData.FollowersResponse.allFollowers.data;
    const mockPostRequest = sinon.stub(axios, 'post').resolves({ data: { message: 'some message', followedId: 1 } });
    const expectedAction = [
      {
        type: ACTIONS.FOLLOW_USER,
        followers: expectedFollowers,
      },
    ];

    store.dispatch(apiRequests.unfollowUser(followerId)).then(() => {
      expect(store.getActions()).toEqual(expectedAction);
    });
    mockPostRequest.restore();
  });
});
