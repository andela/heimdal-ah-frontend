import Validator from 'validatorjs';

export const validateSignup = (data) => {
  const rules = {
    username: 'required|min:4|max:30',
    email: 'required|email',
    password: 'required|alpha_num|min:8',
    passwordConfirmation: 'required|alpha_num|min:8|same:password',
  };

  const validation = new Validator(data, rules);

  if (validation.passes()) {
    return null;
  }

  return {
    errors: validation.errors.all(),
  };
};

const validateLogin = (inputs) => {
  const { email, password } = inputs;

  const data = {
    email,
    password,
  };

  const rules = {
    email: 'required',
    password: 'required',
  };

  const validation = new Validator(data, rules);

  if (validation.passes()) {
    return null;
  }

  return {
    errors: validation.errors.all(),
  };
};

export default validateLogin;
