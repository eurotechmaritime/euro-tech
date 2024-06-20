import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { routes } from "../constants/routes";

const CoursesItem = ({ title, data, className, index }) => {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  ///  this will be the upgrade
//   function sanitizeURL(url) {
//     // Allow only alphabets (both cases), dashes, and hyphens
//     return url.replace(/[^a-zA-Z0-9-]/g, '-').toLowerCase();
// }
  const formattedTitle = data.slug.replace(/\s+/g, "-").toLowerCase(); //this is  used previously
  // const formattedTitle = sanitizeURL(data.title) // this will be the upgraded
  console.log("data",data)
  return (
    <div
      onClick={() =>
        navigate(
          // `${routes.COURSE_BOOKING}/${formattedTitle}`,{ state: { id: data.id } } //this will be a new upgrade
          // `${routes.COURSE_BOOKING}${routes.ABOUT}/${data.id}/${formattedTitle}`,
          `${routes.COURSE_BOOKING}/${formattedTitle}-${data.id}`,
          { state: { id: data.id } }  // this is previous code
        )
      }
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="flex flex-col items-center justify-center"
    >
      <div
        className="max-w-[250px] md:min-w-[95%] md:max-h-[200px] bg-no-repeat bg-cover md:min-h-[200px] min-h-[180px] min-w-[95%] flex items-end relative rounded-2xl cursor-pointer"
        style={{
          backgroundImage: `url(${
            data?.cover_image_url
              ? data?.cover_image_url
              : "/assets/course-icons-1.png"
          })`,
        }}
      >
        {/* {!hover && (
          <div className="max-w-[250px] min-w-[250px] max-h-[200px] min-h-[200px] absolute bg-black/40 rounded-2xl" />
        )} */}
        {/* <div className="transform w-[10px] bg-red-800 bg-opacity-80 transition-[width] duration-500 ease-in hover:w-full rounded-2xl m-3"> */}
          {/* <h1 className="min-w-[230px] mb-8 text-white font-bold p-3">
            {title || "Some Random information"}
          </h1> */}
        {/* </div> */}
      </div>
      <h1 className="min-w-[230px] cursor-pointer text-center font-bold p-2">
            {title || "Some Random information"}
          </h1>
      {/* {hover && ( */}
        {/* <p className="text-[12px] cursor-pointer leading-5 max-w-[250px] min-w-[250px]">
          {data?.description?.slice(0, 90)}
          {data?.description?.length > 100 && (
            <span className="text-red-500  ">&nbsp;Read more...</span>
          )}
        </p> */}
      {/* )} */}
    </div>
  );
};

export default CoursesItem;
