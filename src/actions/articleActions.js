import { ACTIONS } from './actionTypes';
import errorResponse from '../utils/errorResponse';
import axiosInstance from '../config/http';
import { toggleLoader } from './loaderActions';

export const reportArticle = (reportData = {}, toggleModal, flashMessage) => (dispatch) => {
  const { articleId } = reportData;
  axiosInstance
    .post(`/articles/${articleId}/reports`, reportData)
    .then(() => {
      dispatch(toggleLoader());
      flashMessage();
      setTimeout(() => {
        dispatch(() => {
          toggleModal();
          return {
            type: ACTIONS.TOGGLE_MODAL,
          };
        });
      }, 200);
    })
    .catch((errors = {}) => {
      const { response = {}, request } = errors;

      const data = {
        dispatch,
        request,
        response,
        errors,
      };
      dispatch(toggleLoader());
      return errorResponse(data);
    });
};
