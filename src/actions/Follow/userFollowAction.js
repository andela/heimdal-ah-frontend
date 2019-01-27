/* eslint-disable func-names */
import instance from '../../config/http';
import { ACTIONS } from '../actionTypes';
import ActionResponse from '../actionResponse';

/**
 * @returns getAllFollowers object
 */
export function getAllFollowers() {
  return function (dispatch) {
    return instance.get('/users/followers')
      .then((response) => {
        dispatch(ActionResponse(ACTIONS.GET_ALL_FOLLOWERS, response.data));
      }).catch((error) => {
        dispatch(ActionResponse(ACTIONS.GET_ALL_FOLLOWERS, 'Server error', error));
      });
  };
}

/**
 * @param {object} followedId recives folllowId this.props
 * @returns object
 */
export function followUser(followedId) {
  return function (dispatch) {
    return instance.post(`/users/${followedId}/follow`)
      .then((response) => {
        dispatch(ActionResponse(ACTIONS.FOLLOW_USER, {
          message: response.data.message, followedId,
        }));
      });
  };
}

/**
 * @param {object} followedId recives folllowId this.props
 * @returns object
 */
export function unfollowUser(followedId) {
  return function (dispatch) {
    return instance.post(`/users/${followedId}/unfollow`)
      .then((response) => {
        dispatch(ActionResponse(ACTIONS.UNFOLLOW_USER, {
          message: response.data.message, followedId,
        }));
      });
  };
}
