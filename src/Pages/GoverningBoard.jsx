import React, { useEffect, useState } from "react";
import PageBanner from "../Components/PageBanner";
import { EN } from "../locale/EN";
import NoticeSlider from "../Components/NoticeSlider";
import axios from "axios";
import { Endpoints } from "../constants/Endpoints";
import { Helmet } from "react-helmet-async";

const GoverningBoard = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${Endpoints.CMS_URL}/governing-board`);
        setData(res.data.data);
        console.log(res.data.data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  return (
    <>
      <Helmet>
        <title>Meet Our Exceptional Governing Body | EuroTech Maritime</title>
        <meta
          name="description"
          content="Discover the Powerhouse Behind Eurotech Maritime! Get to Know Our Dynamic Governing Body and Their Vision for the Future. Explore their Profiles and Expertise Today!"
        />
        <link
          rel="canonical"
          href="https://eurotechmaritime.org/governing-board"
        />
      </Helmet>
      <div>
        <PageBanner
          imgUrl="/assets/about-banner.png"
          title={EN.governing_board.PAGE_TITLE}
        />
        {data?.map((item) => (
          <section className="p-5 container mx-auto py-14">
            <div className="grid grid-rows-auto lg:grid-cols-4 lg:grid-rows-none bg-[#E8F0FC] p-8 rounded-3xl shadow-md">
              <div className="lg:col-span-1 max-h-[70vw] max-w-[100%] lg:mr-5 justify-left">
                <img
                  src={item?.image_url}
                  alt=""
                  className="rounded-full min-h-[100%] min-w-[100%] lg:max-w-[100%] h-full"
                />
              </div>
              <div className="lg:col-start-2 lg:col-end-5 row-span-2 max-w-[85vw]">
                <h1 className="font-bold text-[30px] md:text-[40px]">
                  {item?.name}
                </h1>
                <p className="text-[#4D4D4D] font-semibold text-[20px] my-3">
                  {item?.designation}
                </p>
                <div
                  className="flex flex-col max-w-[70vw]"
                  dangerouslySetInnerHTML={{
                    __html: item?.description,
                  }}
                />
              </div>
            </div>
          </section>
        ))}
        <div className="mx-auto container my-8 mb-[30px] max-w-[90vw]">
          <NoticeSlider />
        </div>
      </div>
    </>
  );
};

export default GoverningBoard;
