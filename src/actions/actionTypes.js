import keyMirror from 'keymirror';

export const NEW_ACTION = '';

export const ACTIONS = keyMirror({
  RESET_PASSWORD_STATE: null,
  RESET_PASSWORD_SUCCESS: null,
  RESET_PASSWORD_FAILED: null,
  RESET_PASSWORD_ERROR: null,
  UPDATE_PASSWORD_SUCCESS: null,
  UPDATE_PASSWORD_FAILED: null,
  UPDATE_PASSWORD_ERROR: null,
  SET_CURRENT_USER: null,
  FOLLOW_USER: null,
  UNFOLLOW_USER: null,
  GET_ALL_FOLLOWERS: null,
});
