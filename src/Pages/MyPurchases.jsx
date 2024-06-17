import React, { useEffect, useState } from "react";
import PageBanner from "../Components/PageBanner";
import axios from "axios";
import { Endpoints } from "../constants/Endpoints";
import { useSelector } from "react-redux";
import ProfilePageHeading from "../Components/ProfilePageHeading";
import dayjs from "dayjs";
import { useNavigate } from "react-router-dom";
import { routes } from "../constants/routes";
import { Helmet } from "react-helmet-async";

const PurchasedItem = ({ data }) => {
  const date = dayjs(data?.date).format("DD/MM/YYYY");
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col md:flex-row bg-white drop-shadow-xl p-5 border my-5"
      onClick={() =>
        navigate(`${routes.COURSE_BOOKING}/${data.slug}`, {
          state: { hideBook: true },
        })
      }
    >
      <div className=" flex flex-col justify-center mr-4">
        <img src={data?.course_img_url} className="h-[130px] my-auto " alt="" />
      </div>
      <div className="flex md:gap-14 w-full justify-between">
        <div className=" text-gray-500 ">
          <p className="text-[#03014C] font-bold">{data?.coursename}</p>
          {/*<p className="text-[14px] font-bold ">Tutor Name</p>*/}
          <div className="flex flex-col md:flex-row text-[14px] my-2 mt-0 md:gap-5">
            <p className="">
              Order ID: <span className="font-bold">{data?.order_id}</span>
            </p>
            <p>
              Purchase date : - <span className="font-bold">{date}</span>
            </p>
          </div>
          <div className="flex text-[14px] my-2 mt-0 gap-5">
            <p className="">
              Batch name: <span className="font-bold">{data?.Batchname}</span>
            </p>
            <p>
              Fees : - <span className="font-bold"> ₹{data?.fees}</span>
            </p>
          </div>
          <div>
            <p>
              Status : - <span className="font-bold">{data?.status}</span>{" "}
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-between"></div>
      </div>
    </div>
  );
};

const MyPurchases = () => {
  const profileDetails = useSelector(({ app }) => app.profileDetails);
  const [data, setData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${Endpoints.API_URL}courses/candidate-orders/list`,
          {
            headers: {
              Authorization: `Bearer ${profileDetails.token}`,
            },
          }
        );
        setData(res.data?.resultMessage?.data);
        console.log(res.data?.resultMessage?.data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <>
      <Helmet>
        <title>Payments</title>
        <link
          rel="canonical"
          href="https://eurotechmaritime.org/my-purchases"
        />
      </Helmet>
      <div>
        <PageBanner
          imgUrl="/assets/Governing-board-banner.png"
          title="Batches"
        />
        <section className="container mx-auto mb-20">
          <div>
            <ProfilePageHeading text="My Purchases" />
          </div>
          {data?.length === 0 ? (
            <h1 className="text-center font-bold my-14 text-[36px] ">
              No Enrolled courses found
            </h1>
          ) : (
            <div>
              {data?.map((item) => (
                <PurchasedItem data={item} />
              ))}
            </div>
          )}
        </section>
      </div>
    </>
  );
};

export default MyPurchases;
