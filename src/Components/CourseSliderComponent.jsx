import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { Endpoints } from "../constants/Endpoints";
import { EN } from "../locale/EN";
import CoursesItem from "./CoursesItem";
import Slider from "react-slick";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";

const CourseSliderComponent = ({ limit }) => {
  const [preSea, setPreSea] = useState([]);
  const [postSea, setPostSea] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const [rawData, setRawData] = useState(null);

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: tabIndex === 0 ? preSea.length > 4 ? 4 :  preSea?.length : postSea.length > 4 ? 4 : postSea?.length,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: tabIndex === 0 ? preSea.length > 3 ? 3 :  preSea?.length : postSea.length > 3 ? 3  : postSea?.length,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: tabIndex === 0 ? preSea.length > 2 ? 2 :  preSea?.length : postSea.length > 2 ? 2 : postSea?.length,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sliderRef = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${Endpoints.BASE_URL}/courses/listing`);
        setRawData(res.data.data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  useEffect(() => {
    const allArrays = [];

    for (const key in rawData) {
      if (Array.isArray(rawData[key])) {
        allArrays.push(...rawData[key]);
      }
    }

     console.log(allArrays, "AllArrays");
    allArrays.length > 0 && console.log(allArrays.filter(
        (item) => item.category.primary_category == "Post Sea Course"
    ), "meow")
    let postSeaItems =  allArrays.length > 0 && allArrays.filter(
      (item) => item?.category?.is_primary == 0 ? item?.category?.primary_category == "Post Sea Course" : item?.category?.name == "Post Sea Course"
    );
    let preSeaItems = allArrays.filter(
      (item) =>item?.category?.is_primary == 0 ? item?.category?.primary_category == "Pre Sea Course" : item?.category?.name == "Pre Sea Course"
    );

    setPostSea(postSeaItems || []);
    setPreSea(preSeaItems);
  }, [rawData]);

  return (
    <div className="mx-5 my-14">
      <div className="flex justify-between gap-10 mt-10">
        <div className="flex gap-10">
          <h2
            className={`${tabIndex === 0 && "font-bold"} cursor-pointer`}
            onClick={() => setTabIndex(0)}
          >
            {EN.courses.HEADING_1}
          </h2>
          <h2
            className={`${tabIndex === 1 && "font-bold"} cursor-pointer`}
            onClick={() => setTabIndex(1)}
          >
            {EN.courses.HEADING_2}
          </h2>
        </div>
        {tabIndex === 0 && preSea?.length > 4 && (
          <div className="flex gap-3 items-center">
            <FiArrowLeftCircle
              color="gray"
              size={35}
              strokeWidth="1"
              onClick={() => sliderRef.current.slickPrev()}
            />
            <FiArrowRightCircle
              color="#c6131b"
              size={50}
              strokeWidth="1"
              onClick={() => sliderRef.current.slickNext()}
            />
          </div>
        )}
        {tabIndex === 1 && postSea?.length > 4 && (
          <div className="flex gap-3 items-center">
            <FiArrowLeftCircle
              color="gray"
              size={35}
              strokeWidth="1"
              onClick={() => sliderRef.current.slickPrev()}
            />
            <FiArrowRightCircle
              color="#c6131b"
              size={50}
              strokeWidth="1"
              onClick={() => sliderRef.current.slickNext()}
            />
          </div>
        )}
      </div>
      <p className="text-[15px] text-[#464646] font-semibold my-8">
        Practical training & personalized, education Programme for developing
        efficient mariners.
      </p>
      <div className="">
          <Slider ref={sliderRef} {...settings}>
            { tabIndex=== 0 ? preSea?.slice(0, limit).map((item, index) => (
              <CoursesItem
                key={index}
                index={index}
                className="mx-5"
                title={item.title}
                data={item}
              />
            )) :postSea?.slice(0, limit).map((item, index) => (
                <CoursesItem
                    key={index}
                    index={index}
                    className="mx-5"
                    title={item.title}
                    data={item}
                />
            )) }
          </Slider>
      </div>
    </div>
  );
};

export default CourseSliderComponent;
