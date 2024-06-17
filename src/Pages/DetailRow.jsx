import React from "react";

const DetailRow = ({ name, children, value }) => {
  return (
    <div className="grid grid-cols-12 border-b border-b-gray-200 font-semibold">
      <div className="col-span-3 py-4 px-8 bg-[#E8F0FC]">{name}</div>
      <div className="col-span-9 py-4 px-8 bg-white">
        {value}
        {children}
      </div>
    </div>
  );
};

export default DetailRow;
