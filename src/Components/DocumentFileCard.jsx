import React from "react";
import { GrDocument } from "react-icons/gr";

const DocumentFileCard = ({ documentName, link }) => {
  return (
    <div className="my-10">
      <GrDocument size={60} />
      <p>{documentName}</p>
      <div className="flex">
        <a
          className="bg-[#1550A2] text-white font-bold p-2 px-4 rounded-xl mr-3"
          href={link}
          target="_blank"
        >
          View File
        </a>
      </div>
    </div>
  );
};

export default DocumentFileCard;
