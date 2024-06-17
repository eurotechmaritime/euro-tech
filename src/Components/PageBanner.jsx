import React, { forwardRef } from "react";

const PageBanner = forwardRef(({ imgUrl, title, phone, full }, ref) => {
  return (
    <div
      className=" h-[300px] md:min-h-[500px] md:h-[500px] flex items-end bg-no-repeat object-fill bg-cover"
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
      ref={ref}
    >
      <div className="container mx-auto mb-10">
        <h1
          className={`text-white font-bold text-[25px] md:text-[50px] p-5  ${!full &&
            "max-w-[700px]"}`}
        >
          {title}
        </h1>
        {phone && (
          <p className="text-white font-bold px-5 max-w-[700px]">{phone}</p>
        )}
      </div>
    </div>
  );
});

export default PageBanner;
