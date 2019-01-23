const errorResponse = ({
  dispatch, request, response, errors, SET_ERRORS,
}) => {
  if (response.status === 400) {
    return dispatch({
      type: SET_ERRORS,
      payload: response.data.errors,
    });
  }
  if (response.status === 409) {
    return dispatch({
      type: SET_ERRORS,
      payload: { mainError: response.data.message },
    });
  }
  if (response.status === 500) {
    return dispatch({
      type: SET_ERRORS,
      payload: { mainError: 'An error occured, please try again in a moment' },
    });
  }
  if (errors.message) {
    return dispatch({
      type: SET_ERRORS,
      payload: { mainError: errors.message },
    });
  }
  if (request) {
    return dispatch({
      type: SET_ERRORS,
      payload: { mainError: 'An error occured, and no response was recieved' },
    });
  }
  return dispatch({
    type: SET_ERRORS,
    payload: {
      mainError:
        'Something went wrong, please try again. If you continue to see this message, please send email us at help@heimdal.com',
    },
  });
};

export default errorResponse;
