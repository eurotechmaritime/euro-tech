import React from "react";
import dayjs from "dayjs";
import { routes } from "../constants/routes";
import { useNavigate } from "react-router-dom";

const MyCourseItem = ({ data }) => {
  const date = dayjs(data?.date).format("DD/MM/YYYY");
  const navigate = useNavigate();
  return (
    <div
      className="flex md:flex-row flex-col bg-white drop-shadow-xl p-5 border my-5 cursor-pointer"
      onClick={() =>
        navigate(
          `${routes.COURSE_BOOKING}/${data.slug}`,
          {
            state: { hideBook: true, batchData: data.batch_name, id: data.id },
          }
        )
      }
    >
      <div className=" flex flex-col justify-center mr-4">
        <img
          src={data?.cover_image_url}
          className="h-[130px] my-auto "
          alt=""
        />
      </div>
      <div className="flex md:gap-14 w-full justify-between">
        <div className=" text-gray-500 ">
          <p className="text-[#03014C] font-bold mt-5 md:mt-0">{data?.title}</p>
          <p className="text-[14px] leading-[24px]">{data?.description}</p>
          {/*<p className="text-[14px] font-bold ">Tutor Name</p>*/}
          <div className="flex text-[14px] my-2 mt-0 gap-5">
            <p className="">
              Duration: <span className="font-bold">{data?.duration} Day</span>
            </p>
            <p>
              start date : - <span className="font-bold">{date}</span>
            </p>
          </div>
          {/* <div className="flex gap-5 ">
            <div className="text-[12px] text-[#6aa8ff] flex items-center justify-end gap-1">
              <FaStar /> 5.0
            </div>
            <div className="text-[12px] whitespace-nowrap font-semibold">
              33,098 Rating
            </div>
          </div> */}
        </div>
        <div className="flex flex-col justify-between"></div>
      </div>
    </div>
  );
};

export default MyCourseItem;
