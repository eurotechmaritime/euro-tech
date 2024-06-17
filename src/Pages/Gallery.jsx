import React, { useEffect, useState } from "react";
import PageBanner from "../Components/PageBanner";
import { EN } from "../locale/EN";
import GalleryItem from "../Components/GalleryItem";
import axios from "axios";
import { Endpoints } from "../constants/Endpoints";

const Gallery = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${Endpoints.CMS_URL}/gallery`);
        setData(res.data.data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <div>
      <PageBanner
        imgUrl="/assets/Gallery-banner.png"
        title={EN.gallery_page.PAGE_TITLE}
      />
      <section className="container mx-auto py-10">
        <h1 className="text-[36px] font-bold text-[#03014C] py-4">
          {EN.gallery_page.HEADING_2}
        </h1>
        <div className="flex justify-center gap-10 flex-wrap my-10">
          {data?.map((item) => (
            <GalleryItem src={item?.image_url} title="Campus" />
          ))}
        </div>
      </section>
      <section className="container mx-auto py-10">
        <h1 className="text-[36px] font-bold text-[#03014C] py-4">
          {EN.gallery_page.HEADING_1}
        </h1>
        <div className="pb-10">
          <div className="">
            <div
              className=""
              dangerouslySetInnerHTML={{ __html: EN.gallery_page.CONTENT_1_1 }}
            />
          </div>
          <div
            className="mt-5"
            dangerouslySetInnerHTML={{ __html: EN.gallery_page.CONTENT_1_2 }}
          />
          <div className="py-10 flex justify-center ">
            <img
              src="/assets/Why-placeholder-1.png"
              alt=""
              className="h-full rounded-3xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
