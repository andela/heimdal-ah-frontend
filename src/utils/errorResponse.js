import { setErrors } from '../actions/errorActions';

const errorResponse = ({
  dispatch, request, response, errors,
}) => {
  if (response.status === 400) {
    return dispatch(setErrors(response.data.errors));
  }
  if (response.status === 404) {
    return dispatch(setErrors({ mainError: response.data.message }));
  }
  if (response.status === 409) {
    return dispatch(
      setErrors({
        mainError: response.data.message,
      }),
    );
  }
  if (response.status === 500) {
    return dispatch(
      setErrors({
        mainError: 'An error occured, please try again in a moment',
      }),
    );
  }
  if (errors.message) {
    return dispatch(
      setErrors({ mainError: 'A network error occured, please try again in a moment' }),
    );
  }
  if (request) {
    return dispatch(
      setErrors({
        mainError: 'An error occured, and no response was recieved',
      }),
    );
  }

  return dispatch(
    setErrors({
      mainError:
        'Something went wrong, please try again. If you continue to see this message, please send email us at help@heimdal.com',
    }),
  );
};

export default errorResponse;
