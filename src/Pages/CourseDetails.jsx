import React, { useEffect, useState } from "react";
import { FiArrowLeft } from "react-icons/fi";
import CourseDetailItem from "../Components/CourseDetailItem";
import PageBanner from "../Components/PageBanner";
import PriceDetailsBox from "../Components/PriceDetailsBox";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import BlueButton from "../Components/BlueButton";
import { Endpoints } from "../constants/Endpoints";
import { useDispatch, useSelector } from "react-redux";
import { routes } from "../constants/routes";
import { updateCartCount } from "../redux/ActionCreator";
import { Helmet } from "react-helmet-async";

const CourseDetails = () => {
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });
  const navigate = useNavigate();
  const [cartData, setCartData] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);
  const [update, setUpdate] = useState(false);
  const profileDetails = useSelector(({ app }) => app.profileDetails);
  const dispatch = useDispatch();
  const [batchList, setBatchList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${Endpoints.API_URL}courses/candidate-courses/list`,
          {
            headers: {
              Authorization: `Bearer ${profileDetails.token}`,
            },
          }
        );
        setBatchList(res.data.data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${Endpoints.BASE_URL}/cart/get-cart`, {
          headers: {
            Authorization: `Bearer ${profileDetails.token}`,
          },
        });
        setTotalAmount(res.data.data.totalAmount);
        setCartData(res.data.data.cart);
        dispatch(updateCartCount(res.data.data.cart.length));
      } catch (e) {
        console.log(e);
      }
    })();
  }, [update]);

  useEffect(() => {
    console.log("batches",batchList, cartData);
  }, [batchList, cartData]);

  return (
    <>
      <Helmet>
        <title>Cart</title>
        <link
          rel="canonical"
          href="https://eurotechmaritime.org/course-booking/details"
        />
      </Helmet>
      <div>
        <PageBanner
          imgUrl="/assets/Governing-board-banner.png"
          title="Course Booking"
        />
        <section className="container mx-auto px-2 md:px-0">
          <div>
            <h1 className="flex items-center text-[20px] md:text-[36px] text-black font-bold gap-4 my-10">
              <FiArrowLeft onClick={() => navigate(routes.COURSE_BOOKING)} />{" "}
              Selected Courses Details
            </h1>
          </div>
          {cartData?.length > 0 ? (
            <div className="bg-[#E8F0FC] p-5 mb-14">
              <h3 className="text-[#1550A2] text-[20px] font-semibold p-4">
                Course Details
              </h3>
              <div className="flex flex-col gap-5">
                {cartData?.map((item) => (
                  <CourseDetailItem data={item} batches={batchList} />
                ))}
              </div>
              <h3 className="text-[#1550A2] text-[20px] font-semibold p-4">
                Price Details
              </h3>
              <PriceDetailsBox totalAmount={totalAmount} />
              <p className="text-[#D8272F] my-5">
                Note: Please Ensure That Your Recent Photograph & Signature Are
                Uploaded And Visible In The Seafarer`S Profile. If Not, Please
                Re Uploads Them At The Earliest.
              </p>
              <div className="flex flex-col gap-3 md:flex-row justify-end">
                <BlueButton onClick={() => navigate(-1)}>
                  Take another course
                </BlueButton>
                <BlueButton
                  onClick={() =>
                    navigate(routes.COURSE_BOOKING + routes.COURSE_TERMS)
                  }
                >
                  Proceed to Payment
                </BlueButton>
              </div>
            </div>
          ) : (
            <h1 className="text-black text-[40px] font-bold my-14 text-center">
              No Courses Selected
            </h1>
          )}
        </section>
      </div>
    </>
  );
};

export default CourseDetails;
