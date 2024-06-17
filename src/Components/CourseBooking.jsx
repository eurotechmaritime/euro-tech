import React, { useEffect, useState } from "react";
import PageBanner from "./PageBanner";
import Input from "./Input";
import CourseAccordian from "./CourseAccordian";
import axios from "axios";
import { useNavigate, useSearchParams } from "react-router-dom";
import { routes } from "../constants/routes";
import { Endpoints } from "../constants/Endpoints";
import { processData } from "../utils";
import CourseAccordianItem from "./CourseAccordianItem";
import { useDispatch, useSelector } from "react-redux";
import { updateCartCount } from "../redux/ActionCreator";
import { Helmet } from "react-helmet-async";

const CourseBooking = () => {
  const [data, setData] = useState([]);
  const [searchParams] = useSearchParams();
  const [searchInput, setSearchInput] = useState(
    searchParams.get("search") || ""
  );
  const [flatData, setFlatData] = useState([]);
  const profileDetails = useSelector(({ app }) => app.profileDetails);
  const count = useSelector(({ app }) => app.cartCount);
  const dispatch = useDispatch();

  const cartCount = useSelector(({ app }) => app.cartCount);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${Endpoints.BASE_URL}/courses/listing`);
        let formatted = processData(res.data.data);
        setData(formatted);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  function flattenData(arr) {
    let result = [];
    for (let item of arr) {
      result = [
        ...result,
        ...item.data.map((t) => ({ ...t, title: t.title.toLowerCase() })),
      ];
    }
    return result;
  }

  useEffect(() => {
    (async () => {
      if (profileDetails.token) {
        try {
          const res = await axios.get(`${Endpoints.BASE_URL}/cart/get-cart`, {
            headers: {
              Authorization: `Bearer ${profileDetails.token}`,
            },
          });

          dispatch(updateCartCount(res.data.data.cart.length));
        } catch (e) {
          console.log(e);
        }
      }
    })();
  }, []);

  useEffect(() => {
    if (searchInput.length > 0) {
      let results = flattenData(data).filter((t) =>
        t.title.includes(searchInput.toLowerCase())
      );
      setFlatData(results);
    }
  }, [searchInput, searchParams.get("search"), data]);

  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Course Booking</title>
        <link
          rel="canonical"
          href="https://eurotechmaritime.org/course-booking"
        />
      </Helmet>
      <div>
        <PageBanner
          imgUrl="/assets/Governing-board-banner.png"
          title="Course Booking"
        />
        <section className="container mx-auto my-10 md:px-0 px-3">
          <div className="grid grid-cols-12">
            <Input
              className=" col-span-12 md:col-span-6"
              placeholder="Search Course..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <div className="col-span-3" />
            <div className="col-span-12 md:col-span-3 mt-3  md:mt-0 ">
              {cartCount > 0 && (
                <button
                  className="bg-[#1550A2] text-white p-5 py-3 rounded-xl"
                  onClick={() =>
                    navigate(routes.COURSE_BOOKING + routes.COURSE_DETAILS)
                  }
                >
                  View Selected Courses
                </button>
              )}
            </div>
          </div>
          {searchInput.length === 0 && (
            <div className="flex gap-10 my-14 ">
              <h3 className="text-[20px] font-bold">Courses</h3>
              <h3 className="text-[20px]">Package Courses</h3>
            </div>
          )}
          <div>
            {searchInput.length > 0 ? (
              <>
                {flatData?.length > 0 ? (
                  flatData?.map((item) => <CourseAccordianItem data={item} />)
                ) : (
                  <div className="flex justify-center ">
                    <h1 className="md:text-[50px] text-[30px] font-bold my-20">
                      No Courses Found with matching name
                    </h1>
                  </div>
                )}
              </>
            ) : (
              data?.map((item) => (
                <CourseAccordian title={item.name} courses={item.data} />
              ))
            )}
          </div>
          <div className="text-[#03014C] text-center my-14">
            <h1 className="text-[36px] font-bold mb-5">Instructions</h1>
            <ul className="text-[24px]">
              <li>1. Don’t use Back/Forward/Refresh button.</li>
              <li>
                2. Course Registration will be made only after successful
                payment.
              </li>
              <li>3. All banks Debit/Credit cards acceptable.</li>
            </ul>
          </div>
        </section>
      </div>
    </>
  );
};

export default CourseBooking;
