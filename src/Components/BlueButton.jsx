import React from "react";

const BlueButton = ({ children, onClick, disabled, ...otherProps }) => {
  return (
    <button
      onClick={onClick}
      {...otherProps}
      className={` ${
        disabled && "opacity-30"
      } bg-[#1550A2] py-3 px-5 text-white font-bold rounded-xl mx-3`}
    >
      {children}
    </button>
  );
};

export default BlueButton;
