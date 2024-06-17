import React, { useEffect, useState } from "react";
import PageBanner from "../Components/PageBanner";
import ProfilePageHeading from "../Components/ProfilePageHeading";
import axios from "axios";
import { Endpoints } from "../constants/Endpoints";
import { useDispatch, useSelector } from "react-redux";
import MyCourseItem from "../Components/MyCourseItem";
import { useParams } from "react-router-dom";
import { updateCartCount } from "../redux/ActionCreator";
import LoadingOverlay from "react-loading-overlay";
import { Helmet } from "react-helmet-async";

const MyCourses = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const profileDetails = useSelector(({ app }) => app.profileDetails);
  const { orderId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    (async () => {
      try {
        //order redirect loading
        if (orderId) {
          setIsLoading(true);
          axios
            .get(`${Endpoints.API_URL}hylo/order-status/${orderId}`, {
              headers: {
                Authorization: `Bearer ${profileDetails.token}`,
              },
            })
            .then(async (res) => {
              console.log(res);
              setIsLoading(false);
              if (res.data.status) {
                window.location.assign("/my-courses");
              }
            })
            .catch((err) => {
              setIsLoading(false);
              window.location.assign("/my-courses");
              console.log(err);
            });
        }

        //Normal loading
        const cartRes = await axios.get(`${Endpoints.BASE_URL}/cart/get-cart`, {
          headers: {
            Authorization: `Bearer ${profileDetails.token}`,
          },
        });
        dispatch(updateCartCount(cartRes.data.data.cart.length));

        const res = await axios.get(
          `${Endpoints.BASE_URL}/courses/registered-courses/list`,
          {
            headers: {
              Authorization: `Bearer ${profileDetails.token}`,
            },
          }
        );
        setData(res.data.data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return orderId ? (
    <>
      <Helmet>
        <title>My Courses</title>
        <link
          rel="canonical"
          href={"https://eurotechmaritime.org/my-courses/" + orderId}
        />
      </Helmet>
      <LoadingOverlay active={isLoading} spinner text="Please wait...">
        <div>
          <PageBanner
            imgUrl="/assets/Governing-board-banner.png"
            title="My Courses"
          />
          <section className="container mx-auto mb-20">
            <ProfilePageHeading text="My Courses" />
            {data?.length > 0 ? (
              data?.map((item) => <MyCourseItem data={item} />)
            ) : (
              <h1 className="text-center font-bold my-14 text-[36px] ">
                No Enrolled courses found
              </h1>
            )}
          </section>
        </div>
      </LoadingOverlay>
    </>
  ) : (
    <>
      <Helmet>
        <title>My Courses</title>
        <link rel="canonical" href="/my-courses" />
      </Helmet>
      <div>
        <PageBanner
          imgUrl="/assets/Governing-board-banner.png"
          title="My Courses"
        />
        <section className="container mx-auto mb-20">
          <ProfilePageHeading text="My Courses" />
          {data?.length > 0 ? (
            data?.map((item) => <MyCourseItem data={item} />)
          ) : (
            <h1 className="text-center font-bold my-14 text-[36px] ">
              No Enrolled courses found
            </h1>
          )}
        </section>
      </div>
    </>
  );
};

export default MyCourses;
