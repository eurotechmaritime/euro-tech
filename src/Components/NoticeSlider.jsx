import React, {useEffect, useRef, useState} from "react";
import NoticeItem from "./NoticeItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import { FiArrowLeftCircle, FiArrowRightCircle } from "react-icons/fi";
import {Endpoints} from "../constants/Endpoints";
import axios from "axios";

const NoticeSlider = () => {
  const [data , setData ] = useState([])
  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: data?.length < 4 ? data.length : 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
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
        // eslint-disable-next-line no-undef
        const res = await axios.get(`${Endpoints.CMS_URL}/dashboard`);
        console.log(res.data?.data?.latestUpdates, "Data from dashboard api")
        setData(res.data?.data?.latestUpdates);
      } catch (e) {
        console.log(e);
      }
    })();
  }, [])


  return (
    <div>
      <div className="flex justify-between mx-3">
        <h1 className="font-bold text-black  text-[24px] md:text-[36px]">
          Latest Updates & Notices
        </h1>
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
      </div>
      <Slider ref={sliderRef} {...settings}>
        {data?.map( (item, index) => <NoticeItem key={index} data={item} />)}
      </Slider>
    </div>
  );
};

export default NoticeSlider;
