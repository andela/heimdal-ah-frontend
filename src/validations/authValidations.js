import Validator from 'validatorjs';

const validateLoginInput = (input) => {
  const { email, password } = input;

  const data = {
    email,
    password,
  };

  const rules = {
    email: 'required|email',
    password: 'required|alpha_num',
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

export default validateLoginInput;
