import React, { useEffect, useState } from "react";
import PageBanner from "../Components/PageBanner";
import ProfilePageHeading from "../Components/ProfilePageHeading";
import axios from "axios";
import BatchCard from "../Components/BatchCard";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";

const MyBatches = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  const profileDetails = useSelector(({ app }) => app.profileDetails);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          "https://api.eurotechmaritime.org/api/candidate/selectedBatches/list",
          {
            headers: {
              Authorization: `Bearer ${profileDetails.token}`,
            },
          }
        );

        setData(res.data?.resultMessage?.data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <>
      <Helmet>
        <title>My Batches</title>
        <link rel="canonical" href="https://eurotechmaritime.org/my-batches" />
      </Helmet>
      <div>
        <PageBanner
          imgUrl="/assets/Governing-board-banner.png"
          title="Batches"
        />
        <div className="container mx-auto py-8 mb-10">
          <ProfilePageHeading text="Available Batch Details" />
          <div>
            <div className="grid grid-cols-3">
              {data?.map((item) => (
                <p>{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyBatches;
