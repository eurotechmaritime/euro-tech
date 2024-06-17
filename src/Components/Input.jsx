import React, { forwardRef } from "react";

const Input = forwardRef(
  ({ label, className, required, ...otherProps }, ref) => {
    return (
      <div className={className}>
        <label htmlFor="">
          {label}&nbsp;
          {required && <span className="text-red-600">*</span>}
        </label>
        <input
          ref={ref}
          required={required}
          {...otherProps}
          className="border rounded-xl max-h-[50px] md:p-6 p-3 w-full"
        />
      </div>
    );
  }
);

export default Input;
