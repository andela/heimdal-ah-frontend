import React from 'react';

const FormInput = (props = {}) => {
  const {
    errors = {}, name, username, type, classname, placeholder, onChange,
  } = props;

  return (
    <div className="form-group">
      <input
        autoComplete="off"
        name={name}
        value={username}
        type={type}
        className={classname}
        placeholder={placeholder}
        onChange={onChange}
      />
      {errors[name] && errors[name].constructor === Object && (
        <small className="text-danger small">{errors[name].msg}</small>
      )}
      {errors[name] && errors[name].constructor === Array && (
        <small className="text-danger small">{errors[name]}</small>
      )}
    </div>
  );
};

export default FormInput;
