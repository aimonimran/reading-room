import React, { Component } from "react";
import Input from "./../input";

const SearchBox = ({ name, type, placeholder, classname }) => {
  return (
    <Input
      name={name}
      type={type}
      placeholder={placeholder}
      classname={classname}
    />
  );
};

export default SearchBox;
