import React, { useEffect, useState } from "react";
import PageBanner from "../Components/PageBanner";
import ProfilePageHeading from "../Components/ProfilePageHeading";
import { Endpoints } from "../constants/Endpoints";
import axios from "axios";
import BatchCard from "../Components/BatchCard";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { routes } from "../constants/routes";
import dayjs from "dayjs";
import { Helmet } from "react-helmet-async";

const Batches = () => {
  const [data, setData] = useState([]);
  const location = useLocation();
  const routeData = location.state;

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${Endpoints.BASE_URL}/batches/get/list?course_id=${routeData.id}`
        );
        setData(res.data.data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);
  const navigate = useNavigate();
  const profileDetails = useSelector(({ app }) => app.profileDetails);

  const submitBatchData = async (id) => {
    try {
      const res = await axios.put(
        `${Endpoints.BASE_URL}/api/courses/linkBatch`,
        {
          candidate_id: profileDetails?.id, //candidate id
          course_id: routeData.id, //course id
          requested_batch_id: id,
          cart_id: routeData.cartId,
        }
      );
      navigate(routes.COURSE_BOOKING + routes.COURSE_DETAILS);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <Helmet>
        <title>Batches</title>
        <link rel="canonical" href="https://eurotechmaritime.org/batches" />
      </Helmet>
      <div>
        <PageBanner
          imgUrl="/assets/Governing-board-banner.png"
          title="Batches"
        />
        <div className="container mx-auto py-8">
          <ProfilePageHeading text="Available Batch Details" />
          <div>
            <h3 className="text-[#03014C] text-[24px] font-bold">
              {routeData?.title}
            </h3>
            <div className="md:grid md:grid-cols-3">
              {/* item.status hard coded, need to be changed in future */}
              {data.map(
                (item, index) =>
                  dayjs().isBefore(item?.start_date) &&
                  item.status !== "Closed" &&
                  item.available_seats !== 0 && (
                    <BatchCard
                      key={index}
                      availableSeats={item?.available_seats}
                      id={item.id}
                      rac={item?.rac}
                      title={item?.title}
                      seats={item?.seats}
                      isEnabled={item?.is_enabled}
                      onClick={
                        item?.availableSeats === 0 && item?.rac === 0
                          ? (id) => {
                              return id;
                            }
                          : (id) => submitBatchData(id)
                      }
                    />
                  )
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Batches;
