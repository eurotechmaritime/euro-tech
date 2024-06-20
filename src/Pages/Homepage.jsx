import React, { useEffect, useRef, useState } from "react";
import {
  FiArrowLeftCircle,
  FiArrowRight,
  FiArrowRightCircle,
  FiSearch,
} from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../constants/routes";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TestimonialElement from "../Components/TestimonialElement";
import NoticeSlider from "../Components/NoticeSlider";
import CourseSliderComponent from "../Components/CourseSliderComponent";
import LoadingOverlay from "react-loading-overlay";
import axios from "axios";
import { Endpoints } from "../constants/Endpoints";
import { Helmet } from "react-helmet-async";

const Homepage = () => {
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState(null);
  const [isActive, setIsActive] = useState(true);
  const navigate = useNavigate();
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };
  const settings2 = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderRef = useRef(null);
  const sliderRef1 = useRef(null);

  function dangerousHTML(c) {
    return { __html: c };
  }

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${Endpoints.CMS_URL}/dashboard`);
        setData(res.data.data);
      } catch (e) {
        console.log(e);
      } finally {
        setIsActive(false);
      }
    })();
  }, []);

  console.log("data", data);
  return (
    <>
      <Helmet>
        <meta
          name="description"
          content="Unlock Your Maritime Future with Eurotech Academy! Explore Courses and Secure Your Spot with Easy Eurotech Course Booking. Join Us Today for a Brighter Maritime Career."
          data-rh="true"
        />
        <link rel="canonical" href="https://eurotechmaritime.org" />
      </Helmet>
      <LoadingOverlay active={isActive} spinner text="Loading your content...">
        <div className="">
          <Slider {...settings}>
            <div>
              {data?.home_slider?.map((item) => (
                <section
                  key={item.id}
                  className="lg:h-[700px] flex justify-center sm:h-[560px] h-[450px]"
                >
                  <img
                    src={`${item.image_url}`}
                    alt="banner"
                    className="w-full h-full object-cover -z-10"
                  />
                  <div className=" container flex flex-col justify-center mx-auto h-full absolute top-5 ">
                    <h1 className="text-white mx-6 font-bold md:max-w-[800px] max-w-[400px] text-3xl md:text-5xl">
                      {item.tag_line}
                    </h1>
                    <div className="relative mt-10 max-w-[90vw] md:max-w-[520px] mx-6 flex justify-evenly bg-white rounded-3xl items-center px-2 md:px-5">
                      <span className="absolute top-2.5 md:top-4 left-2 md:left-4">
                        <FiSearch size="20" strokeWidth="1" />
                      </span>
                      <input
                        className="max-h-[45px] md:max-h-[55px] w-full flex-1 p-5 bg-transparent placeholder:text-black focus-visible:border-0 sm:w-[90%]"
                        placeholder="Search Course..."
                        onChange={(e) => setSearchInput(e.target.value)}
                      />
                      <div>
                        <button
                          className="bg-[#D8272F] p-2 px-2 md:px-4 rounded-2xl text-white whitespace-nowrap text-[12px] md:text-[16px]"
                          onClick={() =>
                            searchInput.length > 0 &&
                            navigate(
                              `${routes.COURSE_BOOKING}?search=${searchInput}`
                            )
                          }
                        >
                          Course Booking
                        </button>
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </div>
            <div className="z-50 !flex !justify-center">
              <video
                autoPlay
                muted
                loop
                className="lg:h-[700px] sm:h-[560px]  brightness-[0.5] h-[450px] w-full object-cover"
              >
                <source src="/helicam 7 sec.mp4" type="video/mp4" />
              </video>
              <div className="container flex flex-col flex-wrap justify-center mx-auto h-full z-10 absolute top-5">
                <h1 className="text-white mx-6 font-bold md:max-w-[800px] max-w-[400px] text-3xl md:text-5xl">
                  Dreamed of having the <br /> super power to choose a <br />
                  dashing career?
                </h1>
                <div className="relative mt-10 max-w-[90vw] md:max-w-[520px] mx-6 flex justify-evenly bg-white rounded-3xl items-center px-2 md:px-5">
                  <span className="absolute top-2.5 md:top-4 left-2 md:left-4">
                    <FiSearch size="20" strokeWidth="1" />
                  </span>
                  <input
                    className="max-h-[45px] md:max-h-[55px] w-full flex-1 p-5 bg-transparent placeholder:text-black focus-visible:border-0 sm:w-[90%]"
                    placeholder="Search Course..."
                    onChange={(e) => setSearchInput(e.target.value)}
                  />
                  <div>
                    <button
                      className="bg-[#D8272F] p-2 px-2 md:px-4 rounded-2xl text-white whitespace-nowrap text-[12px] md:text-[16px]"
                      onClick={() =>
                        searchInput.length > 0 &&
                        navigate(
                          `${routes.COURSE_BOOKING}?search=${searchInput}`
                        )
                      }
                    >
                      Course Booking
                    </button>
                  </div>
                </div>
              </div>
              {/* Your browser does not support the video tag. */}
            </div>
          </Slider>

          <section className="container md:py-10 py-5 md:px-6 mx-auto">
            <NoticeSlider />
          </section>
          <section className="relative container md:px-6 mx-auto">
            <CourseSliderComponent />
            {data?.applyForBooking[0]?.active == 1 && (
              <div className="container py-10 mx-auto">
                <div className="grid grid-cols-2 py-10 my-14">
                  <div className="col-span-2 md:col-span-1">
                    <img src={data?.applyForBooking[0]?.image_url} alt="" />
                  </div>
                  <div className="flex flex-col gap-4 justify-between py-14 col-span-2 md:col-span-1 text-center md:text-start ">
                    <h1 className="text-[#03014C] text-[24px] md:text-[36px] font-semibold">
                      {data?.applyForBooking[0]?.title}
                    </h1>
                    <p className="text-[#464646] font-bold max-w-[450px]">
                      {data?.applyForBooking[0]?.description}.
                    </p>
                    <div>
                      <button
                        onClick={() => navigate(routes.COURSE_BOOKING)}
                        className="bg-[#D8272F] p-2 px-4 rounded-2xl text-white "
                      >
                        Course Booking
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>
          <section className="relative py-5">
            <div
              className="absolute top-0 -z-10 w-full bg-blue-400 min-h-[750px]"
              style={{
                backgroundImage: "url(/assets/Home-group-banner.webp)",
              }}
            />
            <div className="container mx-auto px-3">
              <div className="grid grid-rows-auto md:grid-rows-none md:grid-cols-2 items-center py-10">
                <div className="text-center md:text-start">
                  <h1 className="text-[30px] text-white font-bold leading-[50px]  ">
                    EURO TECH <br />
                    MARITIME ACADEMY, <br />
                    COCHIN
                  </h1>
                </div>
                <div className="text-center md:text-start md:ml-7">
                  <p className="text-[20px] text-white">
                    Euro tech maritime academy, the state of art maritime
                    academy in Kochi, Kerala, South India, provides world class
                    campus facilities and top Professional faculty to students
                    and trainees.
                  </p>
                </div>
              </div>
              <div className="grid grid-rows-auto lg:grid-rows-none lg:grid-cols-4 content-center">
                <div
                  className="md:col-span-2"
                  dangerouslySetInnerHTML={{
                    __html: data?.promoVideo[0]?.video_url,
                  }}
                ></div>
                <div className="lg:col-start-3 lg:col-end-5 lg:mt-0 mt-5 md:ml-7 lg:text-white text-center md:text-start max-w-[95vw]">
                  <h1 className="text-[24px] font-bold">
                    {data?.about[0]?.title}
                  </h1>
                  <p
                    className="py-10  "
                    dangerouslySetInnerHTML={{
                      __html: data?.about[0]?.description.slice(0, 450),
                    }}
                  ></p>
                  <Link
                    to={routes.ABOUT}
                    className="flex gap-3 items-center justify-center md:justify-start "
                  >
                    Know More <FiArrowRight color="red" />
                  </Link>
                </div>
              </div>
            </div>
          </section>
          {data?.landingSection5[0]?.active == 1 && (
            <section className="container mx-auto my-[40px] md:px-0 px-3">
              <div className="grid grid-cols-12 gap-14">
                <div className="md:col-span-6 col-span-12 flex flex-col gap-8 text-[#464646] font-semibold text-center md:text-start max-w-[100vw]">
                  <h1 className="text-[36px] font-semibold text-[#03014C]">
                    {data?.landingSection5[0]?.title}
                  </h1>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data?.landingSection5[0]?.description,
                    }}
                  ></div>
                  <div>
                    <div className="flex py-3 border border-b-0 border-x-0 border-t-gray-400 max-w-[90vw]">
                      <p className="text-[#1550A2] font-weight ">
                        Complete Mandatory e-learning modules and attend
                        Classroom lectures to earn a certificate
                      </p>
                      <FiArrowRightCircle
                        color="#c6131b"
                        size={40}
                        strokeWidth="1"
                      />
                    </div>
                    <div className="flex py-3 border border-b-0 border-x-0 border-t-gray-400 max-w-[90vw]">
                      <p className="text-[#1550A2] font-weight ">
                        Complete Mandatory e-learning modules and attend
                        Classroom lectures to earn a certificate
                      </p>
                      <FiArrowRightCircle
                        color="#c6131b"
                        size={40}
                        strokeWidth="1"
                      />
                    </div>
                  </div>
                  <p>
                    For any clarifications kindly contact on 70250 80044, 70250
                    45000 & 89433 44650 numbers from Monday to Saturday between
                    (09:00 AM to 05:00 PM).
                  </p>
                  <p>PUBLISH DGS ORDER 19 of 2020, 20 of 2020, 36 of 2020</p>
                </div>
                <div className="md:col-span-6 col-span-12">
                  <img
                    src="/assets/DGS-home.png"
                    className="max-w-[100vw] h-[90vw] md:h-[45vw]"
                    alt=""
                  />
                </div>
              </div>
            </section>
          )}
          {data?.landingSection6[0]?.active == 1 && (
            <section className="relative py-20 md:px-0 px-3">
              <div className="container mx-auto relative grid grid-rows-auto grid-cols-none lg:grid-cols-2 lg:grid-rows-2 text-center">
                <div className="lg:row-span-2">
                  <img
                    width="100%"
                    src={data?.landingSection6[0]?.image_url}
                    className="rounded-3xl w-[100%] h-[100%] aspect-auto"
                    alt=""
                  />
                </div>
                <div className="lg:row-span-2 lg:ml-5 mt-5 justify-around max-w-[100vw]">
                  <h1 className="text-[36px] font-bold">
                    {data?.landingSection6[0]?.title}
                  </h1>
                  <p
                    className=" py-14 leading-10 text-[18px]"
                    dangerouslySetInnerHTML={{
                      __html: data?.landingSection6[0]?.description,
                    }}
                  ></p>
                  <div
                    className=" text-white bg-[#03014C] rounded-3xl mx-auto max-w-[90vw] md:max-w-[500px] p-8"
                    dangerouslySetInnerHTML={{
                      __html: data?.landingSection6[0]?.footer_description,
                    }}
                  ></div>
                </div>
              </div>
            </section>
          )}
          <section className="container  mx-auto">
            <div className="relative">
              <div className="">
                <button
                  onClick={() => {
                    sliderRef.current.slickNext();
                    sliderRef1.current.slickNext();
                  }}
                  className="absolute left-1/4 bottom-20 z-40 "
                >
                  <FiArrowLeftCircle
                    color="#c6131b"
                    strokeWidth={1}
                    size={"50"}
                  />
                </button>
                <button
                  onClick={() => {
                    sliderRef.current.slickPrev();
                    sliderRef1.current.slickPrev();
                  }}
                  className="absolute right-1/4 bottom-20 z-40 "
                >
                  <FiArrowRightCircle
                    color="#c6131b"
                    size={"50"}
                    strokeWidth={1}
                  />
                </button>
              </div>
              <div className="bg-[#E8F0FC] pb-10 ">
                <Slider ref={sliderRef} {...settings}>
                  {data?.testimonials?.map((item) => (
                    <TestimonialElement key={item.id} data={item} />
                  ))}
                </Slider>
                <div className="max-w-[500px] mx-auto">
                  <Slider ref={sliderRef1} {...settings2} className="check">
                    {data?.testimonials?.map((item) => (
                      <div
                        key={item.id}
                        className={`flex justify-center items-center mb-10`}
                      >
                        <img
                          src={item.image_url}
                          className={`h-[70px] w-[70px] rounded-full mx-auto `}
                          alt=""
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </div>
          </section>
        </div>
      </LoadingOverlay>
    </>
  );
};
export default Homepage;