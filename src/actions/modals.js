import { HIDE_MODAL, SHOW_MODAL, TOGGLE_MODAL } from './actionTypes';

export const hideModal = () => ({
  type: HIDE_MODAL,
});

export const showModal = () => dispatch => dispatch({
  type: SHOW_MODAL,
});

export const toggleModal = () => dispatch => dispatch({
  type: TOGGLE_MODAL,
});
