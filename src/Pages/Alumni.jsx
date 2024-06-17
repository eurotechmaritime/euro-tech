import React from "react";
import PageBanner from "../Components/PageBanner";
import { EN } from "../locale/EN";
import AlumniFormInput from "../Components/AlumniFormInput";
import BlueButton from "../Components/BlueButton";
import { routes } from "../constants/routes";
import { useNavigate } from "react-router-dom";

const Alumni = () => {
  const navigate = useNavigate();
  return (
    <div>
      <PageBanner
        imgUrl="/assets/Governing-board-banner.png"
        title={EN.alumni.PAGE_TITLE}
      />
      <div className="container mx-auto bg-[#E8F0FC] p-14 my-14">
        <h1 className="text-[#215899] text-[36px] font-bold">
          {EN.alumni.HEADING_1}
        </h1>
        <AlumniFormInput label={EN.alumni.FIELD_1} />
        <div className="grid grid-rows-auto grid-cols-none md:grid-cols-2 md:gap-10">
          <AlumniFormInput label={EN.alumni.FIELD_2} />
          <AlumniFormInput label={EN.alumni.FIELD_3} />
        </div>
        <AlumniFormInput label={EN.alumni.FIELD_4} />
        <h6 className="text-[22px] font-semibold block mb-2">
          {EN.alumni.SUB_HEADING}
        </h6>
        <div className="grid grid-rows-auto grid-cols-none md:grid-cols-12 md:gap-10">
          <AlumniFormInput label={EN.alumni.FIELD_5} className="md:col-span-5" />
          <AlumniFormInput label={EN.alumni.FIELD_6} className="md:col-span-5" />
          <AlumniFormInput label={EN.alumni.FIELD_7} className="md:col-span-2" />
        </div>
        <AlumniFormInput label={EN.alumni.FIELD_8} />
        <AlumniFormInput label={EN.alumni.FIELD_9} />
        <div className="my-3 flex justify-end">
          <BlueButton onClick={() => navigate(routes.HOME)}>Submit</BlueButton>
        </div>
      </div>
    </div>
  );
};

export default Alumni;
