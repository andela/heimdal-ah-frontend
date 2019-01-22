import React from 'react';

const FormInput = props => (
  <div className="form-group">
    <input
      name={props.name}
      value={props.username}
      type={props.type}
      className={props.classname}
      placeholder={props.placeholder}
      onChange={props.onChange}
    />
    <em className="text-danger h5">{props.errors && props.errors[props.name]}</em>
  </div>
);

export default FormInput;
