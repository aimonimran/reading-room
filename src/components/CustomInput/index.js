import React from "react";

const CustomInput = ({
  fieldKey = "",
  type = "text",
  title = "",
  required = true,
  handleOnChange,
}) => {
  const onChange = (e) => {
    if (handleOnChange) {
      handleOnChange(fieldKey, e.target.value);
    }
  };
  return (
    <>
      <label htmlFor={fieldKey}>
        {title}
        {required && <span style={{ color: "red" }}>*</span>}
      </label>
      <input
        className="form-control"
        type={type}
        id={fieldKey}
        name={fieldKey}
        required={required}
        onChange={onChange}
      />
    </>
  );
};

export default CustomInput;
