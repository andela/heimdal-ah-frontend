// import axios from 'axios';
import { ACTIONS } from './actionTypes';
import errorResponse from '../utils/errorResponse';
import axiosInstance from '../utils/axiosInstance';

export const flashToasterMsg = msg => ({
  type: ACTIONS.FLASH_SUCCESS_MSG,
  payload: msg,
});

export const reportArticle = (reportData = {}, history) => (dispatch) => {
  const { articleId } = reportData;
  console.log(axiosInstance.defaults.headers.common);
  axiosInstance
    .post(`/articles/${articleId}/reports`, reportData)
    .then(() => {
      const msg = 'You have succesfully reported an article';
      dispatch(flashToasterMsg(msg));

      // return history.push(`/articles/${articleId}`);
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
      return errorResponse(data);
    });
};
