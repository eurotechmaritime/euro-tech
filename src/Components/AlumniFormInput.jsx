import React from "react";

const AlumniFormInput = ({ label, className }) => {
  return (
    <div className={`${className} my-4`}>
      <label className="text-[22px] font-semibold block mb-2">{label}</label>
      <input className="h-[64px] bg-white p-5 w-full" />
    </div>
  );
};

export default AlumniFormInput;
