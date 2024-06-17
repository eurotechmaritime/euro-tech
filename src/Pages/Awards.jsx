import React, { useEffect, useState } from "react";
import { EN } from "../locale/EN";
import PageBanner from "../Components/PageBanner";
import AwardCard from "../Components/AwardCard";
import axios from "axios";
import { Endpoints } from "../constants/Endpoints";
import { Helmet } from "react-helmet-async";

const Awards = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${Endpoints.CMS_URL}/awards`);
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
        <title>
          Explore the Eurotech Maritime Awards - Join the Maritime Elite!
        </title>
        <meta
          name="description"
          content="Discover the prestigious Eurotech Maritime Awards, where excellence meets the sea. Explore the finest achievements in the maritime industry and be part of the elite circle. Join us for a celebration of excellence and innovation. 🏆⚓ Visit now!"
        />
        <link rel="canonical" href="https://eurotechmaritime.org/awards" />
      </Helmet>
      <div>
        <PageBanner
          imgUrl="/assets/about-banner.png"
          title={EN.awards.PAGE_TITLE}
        />
        <section className="container mx-auto  my-10">
          {/*<h1 className="text-[36px] font-bold text-[#03014C] py-4">Awards</h1>*/}
          <p
            className="[&>h1]:text-[36px] [&>h1]:font-bold [&>h1]:text-[#03014C] [&>h1]:py-4 px-3 md:px-0"
            dangerouslySetInnerHTML={{
              __html: data?.awards[0]?.award_description,
            }}
          ></p>
          <div className="flex justify-center flex-wrap gap-10 p-14">
            {data?.awardsItems?.map((item) => (
              <AwardCard
                title={item?.title}
                content={item?.description}
                image={item?.image_url}
              />
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default Awards;
