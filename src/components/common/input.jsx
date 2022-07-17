import React from "react";

const Input = ({ label, name, ...rest }) => {
  return (
    <div className="form-group my-2">
      <label htmlFor={name}>{label}</label>
      <input {...rest} className="form-control" id={name} name={name} />
    </div>
  );
};

export default Input;
