import React from "react";

const TestimonialElement = ({ data }) => {
  console.log(data);
  return (
    <div className="p-20 text-[#03014C] text-center">
      <div>
        <h1 className="text-[32px] font-bold mb-10">{data.title}</h1>
        <p className="max-w-[650px] mx-auto">{data.description}</p>
      </div>
      <div className="mt-10">
        <div>
          <h3 className="text-[32px] font-bold">{data.name}</h3>
          <p>{data.designation}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialElement;
