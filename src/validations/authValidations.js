import Validator from 'validatorjs';

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

  const isValid = false;

  if (validation.passes()) {
    return {
      isValid: false,
    };
  }

  const errors = validation.errors.all();

  return {
    isValid,
    errors,
  };
};
export default validateLogin;
