import { HIDE_MODAL, SHOW_MODAL } from './actionTypes';

export const hideModal = () => ({
  type: HIDE_MODAL,
});

export const showModal = () => dispatch => dispatch({
  type: SHOW_MODAL,
});
