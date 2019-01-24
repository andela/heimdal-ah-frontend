import axios from 'axios';
import { FOLLOW_USER, GET_ALL_FOLLOWERS, UNFOLLOW_USER } from './actionTypes';

// const token = window.localStorage.getItem('access-token');
// const paramsId = window.localStorage.getItem('followerId');
// const followedId = parseInt(paramsId, 10);
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjEsInVzZXJuYW1lIjoid2FsZSIsInJvbGVJZCI6MSwiaWF0IjoxNTQ4MzAzNDM5LCJleHAiOjE1NDgzODk4Mzl9.8UP-fhrGZXRUXn-xghL_gh89SBN_bO8bif1J3NM1NB0';

export const getAllFollowers = () => (dispatch) => {
  axios({
    method: 'get',
    url: 'https://heimdal-ah-staging.herokuapp.com/api/v1/users/followers',
    headers: { 'access-token': token },
  })
    .then((followData) => {
      console.log('axios=> get menu', followData);
      dispatch({
        type: GET_ALL_FOLLOWERS,
        payload: followData.data,
      });
    }).catch(err => console.log(err));
};

export const followUser = followedId => (dispatch) => {
  axios({
    method: 'post',
    url: `https://heimdal-ah-staging.herokuapp.com/api/v1/users/${followedId}/follow`,
    headers: { 'access-token': token },
  })
    .then((followData) => {
      console.log('axios=> get menu', followData);
      dispatch({
        type: FOLLOW_USER,
        // payload: followData.data,
        payload: { message: followData.data.message, followedId },
      });
    }).catch(err => console.log(err));
};

export const unfollowUser = followedId => (dispatch) => {
  axios({
    method: 'post',
    url: `https://heimdal-ah-staging.herokuapp.com/api/v1/users/${followedId}/unfollow`,
    headers: { 'access-token': token },
  })
    .then((followData) => {
      console.log('axios=> get menu', followData);
      dispatch({
        type: UNFOLLOW_USER,
        // payload: followData.data,
        payload: { message: followData.data.message, followedId },
      });
    }).catch(err => console.log(err));
};
