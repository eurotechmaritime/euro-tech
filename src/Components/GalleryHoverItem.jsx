import React, { useState } from "react";

const GalleryHoverItem = () => {
  const [showBanner, setShowBanner] = useState(false);
  return (
    <div
      className="relative"
      onMouseEnter={() => setShowBanner(true)}
      onMouseLeave={() => setShowBanner(false)}
    >
      {showBanner && (
        <div className=" absolute w-full h-full bg-blue-500/75 p-10 opacity-0.5">
          <div className="border border-white border-2 h-full flex justify-center items-center">
            <h1 className="text-white text-[24px] font-bold ">HOSTEL</h1>
          </div>
        </div>
      )}
      <img src="/assets/Why-placeholder-1.png" className="w-full" alt="" />
    </div>
  );
};

export default GalleryHoverItem;
