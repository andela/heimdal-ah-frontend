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
    {props.errors.name && <em>{props.errors.name}</em>}
  </div>
);

export default FormInput;
