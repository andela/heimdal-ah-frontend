import keyMirror from 'keymirror';

export const ACTIONS = keyMirror({
  OPEN_MODAL: null,
  CLOSE_MODAL: null,
  SET_CURRENT_USER: null,
  SET_CURRENT_USER_FAIL: null,
  LOGOUT_USER: null,
  RESET_PASSWORD_STATE: null,
  RESET_PASSWORD_SUCCESS: null,
  RESET_PASSWORD_FAILED: null,
  RESET_PASSWORD_ERROR: null,
  UPDATE_PASSWORD_SUCCESS: null,
  UPDATE_PASSWORD_FAILED: null,
  UPDATE_PASSWORD_ERROR: null,
});
