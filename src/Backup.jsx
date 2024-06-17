import React, { useRef } from "react";
import { FiArrowLeft, FiArrowRight, FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../constants/routes";
import CoursesItem from "../Components/CoursesItem";
import NoticeItem from "../Components/NoticeItem";
import { BsFillSquareFill } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import TestimonialElement from "../Components/TestimonialElement";

const Homepage = () => {
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderRef = useRef(null);

  const navigate = useNavigate();
  return (
    <div className="overflow-x-hidden">
      <section
        className="h-[700px] bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url(/assets/Home-hero-banner.png)",
        }}
      >
        <div className="container mx-auto h-full flex flex-col justify-center ">
          <h1 className="text-white text-[48px] font-bold ">
            Dreamed of having the <br /> super power to choose a <br />
            dashing career?
          </h1>
          
          <div className="relative mt-10 ">
            <input
              className="max-h-[55px] border border-slate-300 p-5 bg-transparent min-w-[320px] placeholder:text-white"
              placeholder="Search Course..."
            />
            <span className="absolute top-3 left-[275px] ">
              <FiSearch size="25" color="#ffffff80" />
            </span>
          </div>
        </div>
      </section>
      <section className="relative">
        <div className="absolute top-0 -z-10 w-full bg-blue-400 h-[300px]" />
        <div className="container mx-auto py-10 ">
          <div className="flex justify-between items-center py-5 ">
            <div className="flex gap-10">
              <button
                onClick={() => navigate(routes.COURSES)}
                className="bg-[#1550A2] text-white p-5"
              >
                Pre Sea Courses
              </button>
              <button
                onClick={() => navigate(routes.COURSES)}
                className="border border-black p-5"
              >
                Post Sea Courses
              </button>
            </div>
            <div>
              <Link to={routes.COURSES} className="flex items-center gap-3">
                View Courses <FiArrowRight color="red" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-5">
            <CoursesItem />
            <CoursesItem />
            <CoursesItem />
            <CoursesItem />
          </div>
          <div
            className="h-[400px] w-full flex flex-col justify-center p-10 my-14"
            style={{
              backgroundImage: "url(/assets/Home-apply-now-banner.png)",
            }}
          >
            <h1 className="text-[36px] text-white font-bold">
              Apply Now For <br /> Booking Right Courses <br /> For You
            </h1>
            <div>
              <button
                onClick={() => navigate(routes.COURSE_BOOKING)}
                className="bg-[#1550A2] p-3 text-white mt-4"
              >
                Book Course
              </button>
            </div>
          </div>
          <div>
            <div className="flex justify-between">
             
              <h1 className="font-bold text-black text-[36px]">
                Latest Updates & Notices
              </h1>
              <Link className="flex items-center gap-3" to={routes.GALLERY}>
                View All <FiArrowRight color="red" />
              </Link>
            </div>
            <div className="grid grid-cols-4 gap-5 my-8">
              <NoticeItem />
              <NoticeItem />
              <NoticeItem />
              <NoticeItem />
            </div>
          </div>
        </div>
      </section>
      <section className="relative py-10">
        <div
          className="absolute top-0 -z-10 w-full bg-blue-400 min-h-[700px]"
          style={{
            backgroundImage: "url(/assets/Home-group-banner.webp)",
          }}
        />
        <div className="container mx-auto">
          <div className="grid grid-cols-12 py-10">
            <div className="col-span-5">
              <h1 className="text-[30px] text-white font-bold max-w-[380px] leading-[50px] ">
                EURO TECH <br />
                MARITIME ACADEMY, <br />
                COCHIN
              </h1>
            </div>
            <div className="col-span-7">
              <p className="text-[20px] text-white pr-14">
                Euro tech maritime academy, the state of art maritime academy in
                Kochi, Kerala, South India, provides world class campus
                facilities and top Professional faculty to students and
                trainees.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12 gap-14">
            <div className="col-span-8">
              <img src="/assets/Euro-hq.png" className="h-[560px] w-full" />
            </div>
            <div className="col-span-4 text-white pr-10">
              <h1 className="text-[24px] font-bold">About Eurotech</h1>
              <p className="py-10">
                Euro Tech Maritime Academy is globally recognized as being a
                centre for excellence for Maritime training. All the courses
                conducted at our college are approved by the Directorate General
                of Shipping, Government of India. We are conducting whole range
                of Pre-Sea including b Tech in Marine Engineering, Post Sea and
                Competency courses at this campus.
              </p>
              <Link to={routes.ABOUT} className="flex items-center gap-3">
                Know More <FiArrowRight color="red" />
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto">
        <div className="grid grid-cols-12 gap-14 ">
          <div className="col-span-4">
            <img
              src="/assets/Why-placeholder-1.png"
              className="h-[400px] w-[410px]"
            />
          </div>
          <div className="col-span-8 flex flex-col gap-8">
            <h1 className="text-[36px] font-bold">
              Dgs Approved Courses On Virtual Mode
            </h1>
            <p>
              In view of COVID-19, Directorate General of Shipping has
              introduced a 3 tier process for effective training for the
              seafarers.
            </p>
            <ul>
              <li className="flex items-center gap-3">
                <BsFillSquareFill color="#1550A2" />
                DGs e-learning module
              </li>
              <li className="flex items-center gap-3">
                <BsFillSquareFill color="#1550A2" />
                Virtual class
              </li>
              <li className="flex items-center gap-3">
                <BsFillSquareFill color="#1550A2" />
                Online exit exam
              </li>
              <li className="flex items-center gap-3">
                <BsFillSquareFill color="#1550A2" />
                For enrolling for DG Shipping E-Learning Module
              </li>
            </ul>
            <p>
              Please log on to DG Shipping website or following link, and follow
              the steps given to enroll into the e-learning classes. Upon
              registration for the e-learning module you may kindly book your
              course online through Eurotech Maritime Academy website. Click
              here for DGS e-learning Site
            </p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-14 my-14 ">
          <div className="col-span-5 ">
            <p className="py-10 pr-10">
              Note :<br />
              1. For Live Online(Virtual) classes attendance is mandatory.
              <br />
              2. You need to have good internet connectivity to attend the live
              classes.
              <br />
              3. The practical session of Virtual Classes to be completed upon
              normalcy at the campus the course is booked. <br />
              4. Course Dates are tentative and subject to change as per
              government order.
            </p>
            <div className="bg-[#1550A2] text-white py-14 px-10">
              <p className="text-[22px] border-b-2 pb-6 ">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Aperiam, cum dolor doloribus dolorum ducimus enim libero minima
              </p>
              <p className="text-[22px] border-b-2 py-6">
                nam, natus necessitatibus nemo nostrum possimus repellat
                reprehenderit rerum sequi sint tempora totam.
              </p>
              <p className="pt-6">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad
                aliquid amet consequatur cum deleniti doloremque harum ipsam
                quasi sit tenetur? Alias corporis dolorum eaque enim magnam quae
                quos suscipit voluptate?
              </p>
            </div>
          </div>
          <div className=" col-span-7 ">
            <img
              src="/assets/Home-student-photo.png"
              className="h-[830px] w-full"
              alt=""
            />
          </div>
        </div>
      </section>
      <section className="bg-[#1550A2] relative py-20 ">
        <div className=" absolute bg-white h-[150px]  w-full top-0 left-1/3 " />
        <div className=" absolute bg-[#EF1E28] h-[150px] w-full bottom-0 right-2/3 " />
        <div className=" relative container mx-auto grid grid-cols-12 gap-14 ">
          <div className="col-span-5">
            <img src="/assets/Home-admission.png" alt="" />
          </div>
          <div className="col-span-7">
            <h1 className="text-[36px] font-bold">Admissions List 2022</h1>
            <p className="text-white py-14 leading-10 text-[18px]">
              Certificate Course for Maritime Catering ( CCMC ) <br />
              General Purpose Rating Course ( GP ) <br />
              B-TECH Electro-Technical Officer ( ETO )
              <br />
              Orientation Courses for Catering Personnel ( OCCP )
            </p>
            <div className=" text-[#1550A2] bg-[#CDE0F4] max-w-[500px] p-8">
              <p className="font-bold text-[20px]">
                FOR ADMISSIONS PLEASE CONTACT{" "}
              </p>
              <p className="my-6 font-bold">
                8943344650, 7025080044, 7025045000, +91 484 2340099, +91 484
                2337611
              </p>
              <p>
                Email :{" "}
                <span className="font-bold">
                  admission@eurotechmaritime.org
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="container mx-auto py-20">
        <div className="grid grid-cols-12 gap-10 ">
          <div className="col-span-7">
            <div className="flex justify-between mb-8">
              <h1 className="text-[40px] text-[#03014C] font-bold">
                Let’s hear <br />
                What they says
              </h1>
              <div className="">
                <button
                  onClick={() => sliderRef.current.slickNext()}
                  className="px-10 py-5 bg-[#1550A2] mx-5 "
                >
                  <FiArrowLeft color="white" size={"30"} />
                </button>
                <button
                  onClick={() => sliderRef.current.slickPrev()}
                  className="px-10 py-5 bg-[#1550A2] ml-5"
                >
                  <FiArrowRight color="white" size={"30"} />
                </button>
              </div>
            </div>
            <Slider ref={sliderRef} {...settings}>
              <TestimonialElement />
              <TestimonialElement />
              <TestimonialElement />
              <TestimonialElement />
              <TestimonialElement />
            </Slider>
          </div>
          <div className="col-span-5 p-20">
            <img
              src="/assets/Affiliates.png"
              alt=""
              className="m-auto w-full"
            />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Homepage;
