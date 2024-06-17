import React, { useEffect, useState } from "react";
import axios from "axios";
import { EN } from "../locale/EN";
import { Endpoints } from "../constants/Endpoints";
import CoursesItem from "./CoursesItem";

const CoursesComponent = ({ limit }) => {
  const [preSea, setPreSea] = useState([]);
  const [postSea, setPostSea] = useState([]);
  const [tabIndex, setTabIndex] = useState(0);
  const [rawData, setRawData] = useState(null);

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

    console.log(allArrays);
    let postSea = allArrays.filter((item) =>
      item?.category?.is_primary === 0
        ? item?.category?.primary_category === "Post Sea Course"
        : item?.category?.name === "Post Sea Course"
    );
    let preSea = allArrays.filter((item) =>
      item?.category?.is_primary === 0
        ? item?.category?.primary_category === "Pre Sea Course"
        : item?.category?.name === "Pre Sea Course"
    );

    setPostSea(postSea);
    setPreSea(preSea);
  }, [rawData]);

  return (
    <div className="container mx-auto my-14 px-3">
      <div className="flex gap-10 my-10">
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
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {tabIndex === 0
          ? preSea
              ?.slice(0, limit)
              .map((item, index) => (
                <CoursesItem
                  index={index}
                  title={item.title}
                  key={index}
                  data={item}
                />
              ))
          : postSea
              ?.slice(0, limit)
              .map((item, index) => (
                <CoursesItem
                  index={index}
                  title={item.title}
                  data={item}
                  key={index}
                />
              ))}
      </div>
    </div>
  );
};

export default CoursesComponent;
