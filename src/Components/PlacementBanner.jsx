import React from "react";

const PlacementStudentCard = ({ image, name }) => {
  return (
    <div className="mb-5">
      <img src="/assets/Placement-placeholder.png" alt="" />
      <p className="mt-5 font-semibold">{name}</p>
    </div>
  );
};

const PlacementBanner = ({ batchName, instituteName, duration, students }) => {
  return (
    <div className="container mx-auto my-14">
      <div className="bg-[#E8F0FC] p-10">
        <h1 className="text-[30px] font-bold">{batchName}</h1>
        <h1 className="text-[36px] text-[#215899] font-bold ">
          {instituteName}
        </h1>
        <h1 className="text-[#464646] text-[20px] font-bold">{duration}</h1>
      </div>
      <div className="bg-[#ACCDEE] grid grid-cols-4 p-10 ">
        {students.map((item) => (
          <PlacementStudentCard name={item.NAME} image={item.IMAGE} />
        ))}
      </div>
    </div>
  );
};

export default PlacementBanner;
