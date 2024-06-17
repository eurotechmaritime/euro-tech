import React, { useState } from "react";

const AwardCard = ({ title, image, content }) => {
  const [hover, setHover] = useState(false);
  return (
    <div>
      <div
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className=" min-h-[200px] w-[290px] shadow-xl mb-10 border rounded-2xl relative flex  bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        {/*<div className="h-[220px] max-h-[300px] w-[290px] absolute rounded-2xl" />*/}
        <div
          className={`${
            hover
              ? " transform   transition-all duration-500 ease-in w-[260px] min-h-[200px] p-4 "
              : "h-[120px] transform w-[10px] flex flex-col justify-center  "
          } bg-red-800 bg-opacity-80  rounded-2xl  m-3  text-white mt-[120px]`}
        >
          <h1 className="min-w-[250px] font-bold drop-shadow-lg text-[15px]">
            {title}
          </h1>
          <p
            className={` ${
              hover ? "block" : "hidden"
            } min-w-[240px] text-[10px]`}
            style={{ lineHeight: "20px" }}
          >
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AwardCard;
