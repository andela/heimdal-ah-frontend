/* eslint-disable no-undef */
// import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
import mockData from '../../__mocks__/replyMocks';
import { getCommentReplies, postCommentReplies, deleteCommentReplies } from './ReplyAction';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});
// const mock = new MockAdapter(axiosInstance, { delayResponse: 500 });

describe('Comment action test', () => {
  let commentId;
  let replyId;
  beforeEach(() => {
    moxios.install();
    commentId = 1;
    replyId = 1;
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should return all article replies', () => {
    const expectedResult = [
      {
        replies: mockData.commentReplies,
        type: 'GET_COMMENT_REPLY',
      },
    ];
    moxios.stubRequest(`${process.env.BASE_URL_PROD}/api/v1/comments/${commentId}/reply`, {
      status: 200,
      response: {
        replies: mockData.commentReplies,
      },
    });

    store.dispatch(getCommentReplies()).then(() => {
      expect(store.getActions()).toEqual(expectedResult);
    });
  });

  it('should post an article comment', () => {
    const expectedResult = [
      {
        replies: mockData.commentReplies,
        type: 'POST_COMMENT_REPLY',
      },
    ];

    const data = {
      content: 'test',
    };

    const { content } = data;
    const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi0vy78dpTwN1MmTO-b9Pl-vSsNzMKUi0y_hhIsHsRcfqYsydi';

    moxios.stubRequest(`${process.env.BASE_URL_PROD}/api/v1/comments/${commentId}/reply`, { content });

    store.dispatch(postCommentReplies(commentId, data, imageUrl)).then(() => {
      expect(store.getActions()).toEqual(expectedResult);
    });
  });

  it('should archive an article comment', () => {
    const expectedResult = [
      {
        replies: mockData.commentReplies,
        type: 'ARCHIVE_COMMENT_REPLY',
      },
    ];

    moxios.stubRequest(`${process.env.BASE_URL_PROD}/api/v1/comments/${commentId}/reply/${replyId}`, {
      status: 200,
    });

    store.dispatch(deleteCommentReplies(commentId, replyId)).then(() => {
      expect(store.getActions()).toEqual(expectedResult);
    });
  });
});
