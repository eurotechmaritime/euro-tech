import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const ProfilePageHeading = ({ text }) => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#EFF5FF] p-4 px-6 flex items-center rounded drop-shadow my-6 gap-4">
      <FiArrowLeft
        color="#022236"
        size="25"
        stroke-width="3"
        className="cursor-pointer"
        onClick={() => navigate(-1)}
      />
      <h3 className="text-[20px] text-[#022236] font-bold">{text}</h3>
    </div>
  );
};

export default ProfilePageHeading;
