import React from "react";
import PageBanner from "../Components/PageBanner";
import { EN } from "../locale/EN";
import PlacementBanner from "../Components/PlacementBanner";

const Placements = () => {
  return (
    <div>
      <PageBanner
        imgUrl="/assets/Governing-board-banner.png"
        title={EN.placements.PAGE_TITLE}
      />
      <div className="container mx-auto">
        {EN.placements.DATA.map((item) => (
          <PlacementBanner
            batchName={item.BATCH_NAME}
            duration={item.DURATION}
            instituteName={item.INSTITUTE_NAME}
            students={item.STUDENTS}
          />
        ))}
      </div>
    </div>
  );
};

export default Placements;
