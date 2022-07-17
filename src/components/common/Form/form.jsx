import React, { Component } from "react";
import Input from "../input";

class Form extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
  };

  renderInput = (
    label,
    name,
    placeholder,
    type = "text",
    required = "required"
  ) => {
    return (
      <Input
        label={label}
        name={name}
        type={type}
        placeholder={placeholder}
        required={required}
      />
    );
  };

  renderTextArea = (label, name) => {
    return (
      <>
        <label for={name}>{label}</label>
        <textarea className="form-control" id={name} rows="3" />
      </>
    );
  };

  renderButton = (label) => {
    return <button className="btn-submit">{label}</button>;
  };

  render() {
    return null;
  }
}

export default Form;
