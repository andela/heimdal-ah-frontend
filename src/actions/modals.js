import { HIDE_MODAL } from './actionTypes';

export const hideModal = () => dispatch => dispatch({
  type: HIDE_MODAL,
});

export const showModal = () => dispatch => dispatch({
  type: HIDE_MODAL,
});

export const removeModal = () => (dispatch) => {
  dispatch(hideModal());
};
