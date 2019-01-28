import { ACTIONS } from './actionTypes';


export const openModal = modal => ({
  type: ACTIONS.OPEN_MODAL,
  modal: {
    type: null,
    show: false,
  },
});

export const closeModal = modal => ({
  type: ACTIONS.CLOSE_MODAL,
  modal: {
    type: null,
    show: false,
  },
});
