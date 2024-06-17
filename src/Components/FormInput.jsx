import React from "react";

const FormInput = ({ label, name, ...otherProps }) => {
  return (
    <div className="flex flex-col mb-5">
      <label htmlFor={name}>{label}</label>
      <input
        className=" bg-transparent border-b-4 border-white"
        name={name}
        {...otherProps}
      />
    </div>
  );
};

export default FormInput;
