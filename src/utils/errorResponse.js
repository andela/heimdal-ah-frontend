import { setErrors } from '../actions/errorActions';

const errorResponse = ({
  dispatch, request, response, errors,
}) => {
  if (response.status === 400) {
    dispatch(setErrors(response.data.errors));
  }
  if (response.status === 409) {
    dispatch(
      setErrors({
        mainError: response.data.message,
      }),
    );
  }
  if (response.status === 500) {
    dispatch(
      setErrors({
        mainError: 'An error occured, please try again in a moment',
      }),
    );
  }
  if (errors.message) {
    dispatch(setErrors());
  }
  if (request) {
    dispatch(
      setErrors({
        mainError: 'An error occured, and no response was recieved',
      }),
    );
  } else {
    dispatch(
      setErrors({
        mainError:
          'Something went wrong, please try again. If you continue to see this message, please send email us at help@heimdal.com',
      }),
    );
  }
};

export default errorResponse;
