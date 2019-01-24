import axios from 'axios';
import { ACTIONS } from '../actionTypes';


const updateArticle = (title, body) => (dispatch) => {
  return axios.post('https://fast-food-fast-food.herokuapp.com/api/v1/auth/signup', {
    title,
    body,
    headers: {
      'access-token': '',
    },
  })
    .then((data) => {
      if (data.status === 200) {
        dispatch({
          type: ACTIONS.UPDATE_ARTICLE_SUCCESS,
          payload: data,
        });
        // const token = response.data.data.token;
        // setAccessToken(token);
      }
    }).catch((error) => {
      console.log(error.response.data);
      dispatch({
        type: ACTIONS.UPDATE_ARTICLE_ERROR,
        payload: error.response.data,
      });
    });
};

export default updateArticle;
