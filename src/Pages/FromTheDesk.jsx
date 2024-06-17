import React, { useEffect, useState } from "react";
import PageBanner from "../Components/PageBanner";
import { EN } from "../locale/EN";
import axios from "axios";
import { Endpoints } from "../constants/Endpoints";
import { Helmet } from "react-helmet-async";

const FromTheDesk = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${Endpoints.CMS_URL}/desk-principle`);
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
          Empowering Maritime Excellence: Principal's Message | EuroTech
          Maritime
        </title>
        <meta
          name="description"
          content="Discover a compelling 'Principal's Message' on EuroTech Maritime's journey towards maritime excellence. Join us in shaping the future of the industry. Click to read now!"
        />
        <link
          rel="canonical"
          href="https://eurotechmaritime.org/principal-message"
        />
      </Helmet>
      <div>
        <PageBanner
          imgUrl="/assets/About-bg-image.png"
          title={EN.principal_desk.PAGE_TITLE}
        />
        <div className="bg-[#E8F0FC] container mx-auto p-12 my-12 rounded-2xl shadow-md">
          <div>
            <h1 className="text-[#03014C] font-bold text-[36px]">
              {data?.title}
            </h1>
            <h3 className="text-[#03014C]  text-[24px] mt-3 mb-5">
              {data?.designation}
            </h3>
            <div className="float-left mr-4">
              <img
                className="rounded-full w-[280px] h-[280px] inline-block"
                src={data?.image_url}
                alt=""
              />
            </div>
            <div>
              <p
                className="font-semibold"
                dangerouslySetInnerHTML={{ __html: data?.description }}
              ></p>
            </div>
          </div>
          {/* <div
          className="[&>p]:mb-5 font-semibold "
          dangerouslySetInnerHTML={{ __html: EN.principal_desk.CONTENT_2 }}
        /> */}
        </div>
      </div>
    </>
  );
};

export default FromTheDesk;
