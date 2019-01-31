/* eslint-disable no-undef */
// import React from 'react';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';
// import axiosInstance from '../../utils/axiosInstance';
import mockData from '../../__mocks__/commentMocks';
import { getArticleComment, postArticleComment, deleteArticleComment } from './CommentActions';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});
// const mock = new MockAdapter(axiosInstance, { delayResponse: 500 });

describe('Comment action test', () => {
  beforeEach(() => {
    moxios.install();
  });
  afterEach(() => {
    moxios.uninstall();
  });

  it('should return all article comments', () => {
    const expectedResult = [
      {
        comments: mockData.comment,
        type: 'GET_ARTICLE_COMMENT',
      },
    ];
    moxios.stubRequest(`${process.env.BASE_URL_PROD}/api/v1/articles/1/comments`, {
      status: 200,
      response: {
        comments: mockData.comments,
      },
    });

    store.dispatch(getArticleComment()).then(() => {
      expect(store.getActions()).toEqual(expectedResult);
    });
  });

  it('should post an article comment', () => {
    const expectedResult = [
      {
        comments: mockData.comment,
        type: 'POST_ARTICLE_COMMENT',
      },
    ];

    const data = {
      content: 'test',
      isPrivate: false,
    };

    const { content, isPrivate } = data;
    const identifier = 1;
    const imageUrl = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi0vy78dpTwN1MmTO-b9Pl-vSsNzMKUi0y_hhIsHsRcfqYsydi';

    moxios.stubRequest(`${process.env.BASE_URL_PROD}/api/v1/articles/${identifier}/comments`, { content, isPrivate });

    store.dispatch(postArticleComment(identifier, data, imageUrl)).then(() => {
      expect(store.getActions()).toEqual(expectedResult);
    });
  });

  it('should archive an article comment', () => {
    const expectedResult = [
      {
        comments: mockData.comment,
        type: 'ARCHIVE_COMMENT',
      },
    ];

    const commentId = 1;
    const articleId = 1;
    moxios.stubRequest(`${process.env.BASE_URL_PROD}/api/v1/articles/${articleId}/comments/${commentId}`, {
      status: 200,
    });

    store.dispatch(deleteArticleComment(articleId, commentId)).then(() => {
      expect(store.getActions()).toEqual(expectedResult);
    });
  });
});
