import React, { useEffect } from "react";
import { FiChevronRight } from "react-icons/fi";
import { Link } from "react-router-dom";

const ProfileLinks = ({ text, link, onClick, button }) => {
  useEffect(() => {});
  return (
    <>
      {button ? (
        <button
          onClick={onClick}
          className=" w-full bg-[#EFF5FF] p-4 px-6 flex justify-between items-center rounded drop-shadow my-6"
        >
          <h3 className="text-[20px] text-[#022236] font-bold">{text}</h3>
          <FiChevronRight color="gray" size="25" />
        </button>
      ) : (
        <Link
          to={link}
          onClick={onClick}
          className="bg-[#EFF5FF] p-4 px-6 flex justify-between items-center rounded drop-shadow my-6"
        >
          <h3 className="text-[20px] text-[#022236] font-bold">{text}</h3>
          <FiChevronRight color="gray" size="25" />
        </Link>
      )}
    </>
  );
};

export default ProfileLinks;
