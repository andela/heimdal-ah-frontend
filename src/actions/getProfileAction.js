import axios from 'axios';
import { GET_ALL_PROFILE } from './actionTypes';

export const getAllProfile = () => (dispatch) => {
  axios
    .get('https://heimdal-ah-staging.herokuapp.com/api/v1/users')
    .then((profileData) => {
      console.log('axios=> get menu', profileData);
      dispatch({
        type: GET_ALL_PROFILE,
        payload: profileData.data,
      });
    }).catch(err => console.log(err));
};
