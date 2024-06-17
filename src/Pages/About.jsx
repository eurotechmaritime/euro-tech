import React, { useEffect, useState } from "react";
import { EN } from "../locale/EN";
import PageBanner from "../Components/PageBanner";
import { Link } from "react-router-dom";
import { routes } from "../constants/routes";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import NoticeItem from "../Components/NoticeItem";
import axios from "axios";
import { Endpoints } from "../constants/Endpoints";
import NoticeSlider from "../Components/NoticeSlider";
import { Helmet } from "react-helmet-async";

const About = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${Endpoints.CMS_URL}/about`);
        setData(res.data.data[0]);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <>
      <Helmet>
        <title>Explore Euro Tech Maritime Academy | About Us</title>
        <meta
          name="description"
          content="Discover the essence of Euro Tech Maritime Academy's legacy and commitment in our 'About Us' section. Dive into a world of maritime excellence and innovation. Join us on this journey today"
        />
        <link
          rel="canonical"
          href={"https://eurotechmaritime.org" + routes.ABOUT}
        />
      </Helmet>
      <div>
        <PageBanner
          imgUrl="/assets/about-banner.png"
          title={EN.about_us.PAGE_TITLE}
        />
        <section className="p-10 container mx-auto">
          <div className=" py-10 gap-14">
            <div>
              <h1 className="font-bold text-[40px] mb-8">{data?.title}</h1>
              <div
                className="flex flex-col gap-5"
                dangerouslySetInnerHTML={{ __html: data?.description }}
              />
            </div>
          </div>
        </section>
        <section
          style={{
            backgroundImage: "url(/assets/About-us-2.png)",
          }}
          className="grid grid-cols-2 bg-no-repeat object-cover"
        ></section>
        <section className="mx-auto container p-8 py-0">
          {data?.footer_about && (
            <div className="bg-[#03014c] p-5 rounded-3xl">
              <p
                className="text-white"
                dangerouslySetInnerHTML={{ __html: data?.footer_about }}
              ></p>
            </div>
          )}
        </section>
        <section className="container mx-auto py-10 px-10">
          <NoticeSlider />
        </section>
      </div>
    </>
  );
};

export default About;
