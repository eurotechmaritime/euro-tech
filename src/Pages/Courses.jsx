import React from "react";
import PageBanner from "../Components/PageBanner";
import { EN } from "../locale/EN";
import CoursesComponent from "../Components/CoursesComponent";
import { Helmet } from "react-helmet-async";

const Courses = () => {
  return (
    <>
      <Helmet>
        <title>
          Maritime Career with Eurotech: Easy Eurotech Course Booking | Browse
          Our Courses List
        </title>
        <meta
          name="description"
          content="Ready to set sail on a rewarding maritime journey? Explore Eurotech's comprehensive courses list and book your spot with ease! Elevate your career today!"
        />
        <link
          rel="canonical"
          href="https://eurotechmaritime.org/courses-list"
        />
      </Helmet>
      <div>
        <PageBanner
          imgUrl="/assets/Governing-board-banner.png"
          title={EN.courses.PAGE_TITLE}
        />
        <CoursesComponent />
      </div>
    </>
  );
};

export default Courses;
