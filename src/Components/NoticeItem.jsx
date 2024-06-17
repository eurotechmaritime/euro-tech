import React, { useState } from "react";
import dayjs from "dayjs";

const NoticeItem = ({data}) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="px-5 py-5 m-2 min-[1280px]:m-2 md:my-5 my-2 grid auto-rows-auto items-center rounded-2xl shadow-xl relative md:min-w-[330px] min-h-[330px] md:min-h-[330px]"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`${
          hover &&
          "flip-vertical-fwd  border-r-[10px] border-0 border-[#84b5f5] shadow-xl shadow-[#84b5f5]"
        }  rounded-2xl  w-full h-full absolute left-10 -ml-10 `}
      />
      <p className="text-[16px] text-red-500 font-semibold">{data?.title}</p>
      <h1 className="md:text-[20px] text-[18px] font-bold text-black">
        {data?.description}
      </h1>
      <p className="text-[16px] text-blue-800 font-semibold">{dayjs(data?.date).format("DD MMMM YYYY")}</p>
    </div>
  );
};

export default NoticeItem;
