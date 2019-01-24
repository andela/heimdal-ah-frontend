import axios from 'axios';
import ACTIONS from '../actionTypes';
import ActionResponse from '../actionResponse';


const articleActions = articleDetails => (dispatch) => {
  const {
    title,
    body,
    description,
  } = articleDetails;

  console.log(body, '==================');

  return axios.post('https://heimdal-ah-staging.herokuapp.com/api/v1/articles', {
    title,
    body,
    description,
  }, {
    headers: {
      'access-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsInVzZXJuYW1lIjoiam9obiIsInJvbGVJZCI6MiwiaWF0IjoxNTQ4MzA2NTM5LCJleHAiOjE1NDgzOTI5Mzl9.y12-awPcMxiOaNR2W8YCAcbwUmwf7PdCsMLuhXkGRIU',
    },
  }).then((data) => {
    const payload = { message: 'Article successfully created', data };
    if (data.status === 201) {
      dispatch(ActionResponse(ACTIONS.CREATE_ARTICLE, payload));
    }
  }).catch((error) => {
    if (error.response.status === 400) {
      dispatch(ActionResponse(ACTIONS.CREATE_ARTICLE_ERROR, { message: 'No Field Should Be Left Empty', status: 400 }));
    }
    if (error.response.status === 500) {
      dispatch(ActionResponse(ACTIONS.CREATE_ARTICLE_ERROR, { message: 'Sever Error', status: 500 }));
    }
  });
};

export default articleActions;
