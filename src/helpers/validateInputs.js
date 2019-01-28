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

export const validateLogin = (input) => {
  const { email, password } = input;

  const data = {
    email,
    password,
  };

  const rules = {
    email: 'required|email',
    password: 'required',
  };

  const validation = new Validator(data, rules);

  const isValid = false;

  if (validation.passes()) {
    return {
      isValid: true,
    };
  }

  const errors = validation.errors.all();

  return {
    isValid,
    errors,
  };
};
