import React, { useEffect, useState } from "react";
import axios from "axios";
import { Endpoints } from "../constants/Endpoints";
import PageBanner from "../Components/PageBanner";
import { Helmet } from "react-helmet-async";

const TNC = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${Endpoints.CMS_URL}/tnc`);
        console.log(res.data);
        setData(res.data.data[0]);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <>
      <Helmet>
        <title>Disclaimer</title>
        <link rel="canonical" href="https://eurotechmaritime.org/disclaimer" />
      </Helmet>
      <div className="">
        <PageBanner
          imgUrl="/assets/Governing-board-banner.png"
          title="Disclaimer"
        />
        <div className="container">
          <div
            className=" text-[30px] fw-bold m-5"
            dangerouslySetInnerHTML={{ __html: data?.disclaimer }}
          />
        </div>
      </div>
    </>
  );
};

export default TNC;
