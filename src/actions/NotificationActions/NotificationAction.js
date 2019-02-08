/* eslint-disable func-names */
import socketIOClient from 'socket.io-client';
import { ACTIONS } from '../actionTypes';
import ActionResponse from '../actionResponse';
import instance from '../../config/http';

/**
 * Set Loading action which shows before comments are fetched
 * @return {function} retuns the action type
 */
export function loading() {
  return {
    type: ACTIONS.NOTIFICATION_LOADER,
  };
}

/**
 * PUT to subscribe to a Notification action using axios and dispatches the data
 * @param {integer} identifer - The article id
 * @param {object} response - the data return from after a successful axios request
 * @param {object} error - If there is an error from the request
 * @return {function} dispatches either the response or the error.
 */
export function subscribeToNotification() {
  return function (dispatch) {
    dispatch(loading());
    return instance.put('/users/notifications')
      .then((response) => {
        dispatch(ActionResponse(ACTIONS.SUBSCRIBE_TO_NOTIFICATION, response.data));
      }).catch((error) => {
        dispatch(ActionResponse(ACTIONS.GET_ERRORS, error.response));
      });
  };
}

/**
 * Get a User Profile action using axios and dispatches the data
 * @param {string} username - The username
 * @param {object} response - the data return from after a successful axios request
 * @param {object} error - If there is an error from the request
 * @return {function} dispatches either the response or the error.
 */
export function checkSubscription(username) {
  return function (dispatch) {
    dispatch(loading());
    return instance.get(`/profiles/${username}`)
      .then((response) => {
        dispatch(ActionResponse(ACTIONS.CHECK_SUBSCRIPTION, response.data.profile));
      }).catch((error) => {
        dispatch(ActionResponse(ACTIONS.GET_ERRORS, error.response));
      });
  };
}

/**
 * Get an User Notification(s) action using axios and dispatches the data
 * @param {integer} identifer - The user id
 * @param {object} response - the data return from after a successful axios request
 * @param {object} error - If there is an error from the request
 * @return {function} dispatches either the response or the error.
 */
export function getUserNotification(identifier) {
  return function (dispatch) {
    dispatch(loading());
    return instance.get(`users/${identifier}/notifications`)
      .then((response) => {
        dispatch(ActionResponse(ACTIONS.GET_USER_NOTIFICATION, response.data));
      }).catch((error) => {
        dispatch(ActionResponse(ACTIONS.GET_ERRORS, error.response));
      });
  };
}

/**
 * Get an User Notification(s) action using axios and dispatches the data
 * @param {integer} userId - The user id
 * @param {integer} notificationId - The notification id
 * @param {object} response - the data return from after a successful axios request
 * @param {object} error - If there is an error from the request
 * @return {function} dispatches either the response or the error.
 */
export function toggleNotificationRead(userId, notificationId) {
  return function (dispatch) {
    dispatch(loading());
    return instance.put(`/users/${userId}/${notificationId}/notifications`)
      .then(() => {
        dispatch(ActionResponse(ACTIONS.TOGGLE_NOTIFICATION_READ, notificationId));
      }).catch((error) => {
        dispatch(ActionResponse(ACTIONS.GET_ERRORS, error.response));
      });
  };
}
/**
 * Get an User Notification(s) action using axios and dispatches the data
 * @param {integer} userId - The user id
 * @param {integer} notificationId - The notification id
 * @param {object} response - the data return from after a successful axios request
 * @param {object} error - If there is an error from the request
 * @return {function} dispatches either the response or the error.
 */
export function getNewNotification() {
  return function (dispatch) {
    const socket = socketIOClient(process.env.BASE_URL_PROD);
    socket.on('NOTIFICATION_CREATED', (data) => {
      dispatch(ActionResponse(ACTIONS.USER_INSTANT_NOTIFICATION, data));
    });
  };
}
