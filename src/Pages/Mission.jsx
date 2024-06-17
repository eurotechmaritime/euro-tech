import React, { useEffect, useState } from "react";
import PageBanner from "../Components/PageBanner";
import { EN } from "../locale/EN";
import { Endpoints } from "../constants/Endpoints";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const Mission = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${Endpoints.CMS_URL}/mission-vision`);
        setData(res.data.data[0]);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <>
      <Helmet>
        <title>Eurotech Maritime - Unveiling Our Mission and Vision</title>
        <meta
          name="description"
          content="Discover Eurotech Maritime's bold mission and visionary goals. Join us on a journey to excellence in the maritime industry. Explore our mission and vision here!"
        />
        <link
          rel="canonical"
          href="https://eurotechmaritime.org/mission-vision"
        />
      </Helmet>
      <div>
        <PageBanner
          imgUrl="/assets/about-banner.png"
          title={EN.mission_vision.PAGE_TITLE}
        />
        <div className="container mx-auto flex flex-col py-10 gap-10">
          <div className="ml-2">
            <h1 className="text-[#03014C] text-[36px] font-bold mb-5">
              {EN.mission_vision.HEADING_1}
            </h1>
            <div
              className="[&>ul>li]:list-disc [&>ul>li]:my-5 [&>ul>li]:ml-10"
              dangerouslySetInnerHTML={{ __html: data?.mission }}
            />
          </div>
          <div className="ml-2">
            <h1 className="text-[#03014C] text-[36px] font-bold mb-5">
              {EN.mission_vision.HEADING_2}
            </h1>
            <div
              className="[&>ul>li]:list-disc [&>ul>li]:my-5 [&>ul>li]:ml-10 "
              dangerouslySetInnerHTML={{ __html: data?.vision }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Mission;
