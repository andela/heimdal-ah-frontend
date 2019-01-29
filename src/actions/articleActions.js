// import axios from 'axios';
import { ACTIONS } from './actionTypes';
import errorResponse from '../utils/errorResponse';
import axiosInstance from '../utils/axiosInstance';
import { toggleLoader } from './loaderActions';
import { toggleModal } from './modalActions';

export const flashToasterMsg = msg => ({
  type: ACTIONS.FLASH_SUCCESS_MSG,
  payload: msg,
});

export const reportArticle = (reportData = {}) => (dispatch) => {
  const { articleId } = reportData;
  axiosInstance
    .post(`/articles/${articleId}/reports`, reportData)
    .then(() => {
      const msg = 'You have succesfully reported an article';
      dispatch(flashToasterMsg(msg));
      dispatch(toggleLoader());
      return dispatch(toggleModal());
    })
    .catch((errors = {}) => {
      console.log(errors);
      console.log(errors.request);
      console.log(errors.response);

      const { response = {}, request } = errors;

      const data = {
        dispatch,
        request,
        response,
        errors,
      };
      dispatch(toggleLoader());
      dispatch(toggleModal());
      return errorResponse(data);
    });
};
