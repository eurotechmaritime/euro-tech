import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import CourseAccordianItem from "./CourseAccordianItem";

const CourseAccordian = ({ title, courses }) => {
  const [open, setOpen] = useState(false);
  return (
    <div className="my-8" onClick={() => setOpen(!open)}>
      <div className="bg-[#eff5ff] flex justify-between items-center rounded border px-5 py-3 drop-shadow">
        <h1 className="text-[18px] text-[#03014C] font-bold ">{title}</h1>
        {open ? (
          <FaChevronUp onClick={() => setOpen(!open)} />
        ) : (
          <FaChevronDown onClick={() => setOpen(!open)} />
        )}
      </div>
      {open && (
        <>
          {courses.map((item) => (
            <CourseAccordianItem data={item} />
          ))}
        </>
      )}
    </div>
  );
};

export default CourseAccordian;
