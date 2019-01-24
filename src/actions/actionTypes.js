import keyMirror from 'keymirror';

const ACTIONS = keyMirror({
  RESET_PASSWORD_STATE: null,
  RESET_PASSWORD_SUCCESS: null,
  RESET_PASSWORD_FAILED: null,
  RESET_PASSWORD_ERROR: null,
  UPDATE_PASSWORD_SUCCESS: null,
  UPDATE_PASSWORD_FAILED: null,
  UPDATE_PASSWORD_ERROR: null,
  CREATE_ARTICLE: null,
  CREATE_ARTICLE_ERROR: null,
});


export default ACTIONS;
