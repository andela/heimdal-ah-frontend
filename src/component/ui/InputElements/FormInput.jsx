import React from 'react';

const FormInput = (props = {}) => {
  const {
    errors, name, username, type, classname, placeholder, onChange,
  } = props;
  // console.log(errors);
  return (
    <div className="form-group">
      <input
        name={name}
        value={username}
        type={type}
        className={classname}
        placeholder={placeholder}
        onChange={onChange}
      />
      {errors[name] && errors[name].constructor === Object && (
        <small className="text-danger h5">{errors[name].msg}</small>
      )}
      {errors[name] && errors[name].constructor === Array && (
        <small className="text-danger h5">{errors[name]}</small>
      )}
    </div>
  );
};

export default FormInput;
