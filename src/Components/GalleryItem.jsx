import React from "react";

const GalleryItem = ({ src, title }) => {
  return (
    <div className="relative max-w-[290px] min-w-[290px] max-h-[242px] rounded-3xl ">
      <img
        className="rounded-3xl max-w-[290px] min-w-[290px] max-h-[242px] "
        src={src}
        alt=""
      />
      <div className="absolute bg-[#8FABCC] bottom-0 w-full rounded-b-3xl ">
        <p className="text-white text-center my-3 font-bold">{title}</p>
      </div>
    </div>
  );
};

export default GalleryItem;
