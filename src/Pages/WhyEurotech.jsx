import React, { useEffect, useState } from "react";
import PageBanner from "../Components/PageBanner";
import { EN } from "../locale/EN";
import HighlightBox from "../Components/HighlightBox";
import axios from "axios";
import { Endpoints } from "../constants/Endpoints";
import { Helmet } from "react-helmet-async";

const WhyEurotech = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${Endpoints.CMS_URL}/why-eurotech`);
        setData(res.data.data[0]);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Discover 'Why Eurotech maritime ' for Your Maritime Career!
        </title>
        <meta
          name="description"
          content="Explore 'Why Eurotech' and embark on a maritime journey of excellence. Find out how Eurotech Maritime Institute sets new standards in maritime education, career opportunities, and industry innovation. Click to uncover your future at Eurotech!"
        />
        <link
          rel="canonical"
          href="https://eurotechmaritime.org/why-eurotech"
        />
      </Helmet>
      <div>
        <PageBanner
          imgUrl="/assets/about-banner.png"
          title={EN.why_eurotech.PAGE_TITLE}
        />
        <section className="container mx-auto p-10">
          <h1 className="text-[36px] font-bold mb-3">{data?.title}</h1>
          <p className="text-[18px]">{EN.why_eurotech.CONTENT}</p>
          <div className="grid grid-rows-auto lg:grid-cols-3 gap-4 my-10">
            <HighlightBox
              image="/assets/Why-placeholder-1.png"
              text={EN.why_eurotech.HIGHLIGHT_1}
            />
            <HighlightBox
              image="/assets/why-placeholder-2.png"
              text={EN.why_eurotech.HIGHLIGHT_2}
            />
            <HighlightBox
              image="/assets/why-placeholder-3.png"
              text={EN.why_eurotech.HIGHLIGHT_3}
            />
          </div>
        </section>
        <section className="bg-[#1550a2] p-10">
          <div className=" container mx-auto grid grid-rows-auto lg:grid-cols-3 items-center">
            <div className="lg:col-span-2">
              <ul>
                {EN.why_eurotech.POINTS_LIST.map((item, index) => (
                  <li className="flex items-center gap-5 m-3 text-white">
                    <div className="h-[15px] w-[15px] bg-white rounded" />
                    <p key={index}>{item}</p>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mx-auto lg:mx-0">
              <img
                src="/assets/why-points-image.png"
                className="h-[594/2px] w-full lg:h-full"
                alt="why-eurotech"
              />
            </div>
          </div>
        </section>
        <section className="py-10 mb-10">
          <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">
            <div className="bg-[#CDE0F4] p-10">
              <h1 className="mb-5 text-[#03014C] text-[32px] font-bold">
                {data?.title}
              </h1>
              <div dangerouslySetInnerHTML={{ __html: data?.description }} />
            </div>
            <div className="bg-[#CDE0F4] p-10">
              <h1 className="mb-5 text-[#03014C] text-[32px] font-bold">
                {EN.why_eurotech.BOX1_HEADING}
              </h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: EN.why_eurotech.BOX1_CONTENT,
                }}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default WhyEurotech;
