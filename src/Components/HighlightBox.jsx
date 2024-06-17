import React from "react";

const HighlightBox = ({ image, text }) => {
  return (
    <div
      className="h-[320px] w-[100%] md:w-[100%] border relative mx-auto bg-no-repeat bg-cover bg-center"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div
        className=" left-0 right-0 mx-6 absolute bottom-6 bg-blend-multiply p-4 px-8 "
        style={{
          backgroundColor: "rgba(136,0,0,0.7)",
        }}
      >
        <p className="text-white text-[16px] text-center font-bold">{text}</p>
      </div>
    </div>
  );
};

export default HighlightBox;
