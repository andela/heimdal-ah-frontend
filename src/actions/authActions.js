import axios from 'axios';
import { signupEndpoint } from '../apiEndpoints';

export const signupUser = (signupData = {}, history) => (dispatch) => {
  axios
    .post(signupEndpoint, signupData)
    .then((data) => {
      console.log('=============', data, '=============');
      // if (data.success) {
      //   const isAuthenticated = true;
      //   const { userToken } = data;
      //   const { userId, role } = data.createdUser;
      //   const name = data.createdUser.fullname;

      //   localStorage.setItem('userToken', userToken);
      //   localStorage.setItem('userId', userId);
      //   localStorage.setItem('fullname', name);
      //   localStorage.setItem('role', role);

      //   dispatch({
      //     type: SET_AUTH_USER,
      //     payload: {
      //       isAuthenticated,
      //       userId,
      //       userToken,
      //       role,
      //       fullname: name,
      //     },
      //   });

      //   return history.push('/users/foods');
      // }
      // return dispatch({
      //   type: SET_ERRORS,
      //   payload: [...data.errors],
      // });
    })
    .catch((errors) => {
      console.log('=============', errors, '=============');
      console.log('=============', errors.response.data, '=============');

      // dispatch({
      //   type: SET_ERRORS,
      //   payload: [{ msg: 'A network error occured tried again' }],
      // });
    });
};
