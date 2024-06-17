import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import axios from "axios";
import { Endpoints } from "../constants/Endpoints";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { routes } from "../constants/routes";
import { decreaseCartCount } from "../redux/ActionCreator";

const CourseDetailItem = ({ data, batches }) => {
  console.log(data, "data");
  const dispatch = useDispatch();
  const profileDetails = useSelector(({ app }) => app.profileDetails);
  const [batchData, setBatchData] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `${Endpoints.BASE_URL}/batches/get/list?course_id=${data.course_id}`
      );
      setBatchData(res.data.data || []);
    })();
  }, [data.course_id]);

  const removeItem = async () => {
    try {
      await axios.delete(
        `${Endpoints.BASE_URL}/cart/remove-course-from-cart`,
        {
          headers: {
            Authorization: `Bearer ${profileDetails.token}`,
          },
          data: { cart_id: data.id },
        }
      );
      dispatch(decreaseCartCount());
      window.location.reload();
    } catch (e) {
      console.log(e);
    }
  };

  const batchDetail = batches.find((e) => e.course_id === data.course_id);
  const navigate = useNavigate();

  const isHTML = (str) => {
    const doc = new DOMParser().parseFromString(str, 'text/html');
    return Array.from(doc.body.childNodes).some(node => node.nodeType === 1);
  };

  const renderEligibilityContent = () => {
    const eligibilityContent = data?.course?.eligibility;
    if (!eligibilityContent) return null;

    if (isHTML(eligibilityContent)) {
      return (
        <span className="text-[12px] md:text-[16px]" dangerouslySetInnerHTML={{ __html: eligibilityContent }} />
      );
    }

    return <span className="text-[12px] md:text-[16px]">{eligibilityContent}</span>;
  };

  return (
    <div className="flex md:flex-row flex-col bg-white drop-shadow-xl p-5">
      <div className="flex flex-col justify-center mr-4">
        <img
          src={data?.course?.cover_image_url}
          className="h-[130px] my-auto"
          alt=""
        />
      </div>
      <div className="flex flex-col md:flex-row gap-14 w-full justify-between">
        <div className="text-gray-500">
          <p className="text-[#03014C] font-bold">{data?.course?.title}</p>
          <p className="text-[14px] leading-[20px]">
            {data?.course?.description}
          </p>
          <div className="flex flex-col text-[14px] my-2 mt-0 gap-1">
            <p>
              <span className="font-bold">Duration: -{" "}</span>
              <span>{data?.course?.duration} Day</span>
            </p>
            <p className="">
              <span className="font-bold">Eligibility: -{" "}</span>
              {renderEligibilityContent()}
            </p>
          </div>
          <div className="flex gap-5">
            {/* <div className="text-[12px] text-[#6aa8ff] flex items-center justify-end gap-1">
              <FaStar /> 5.0
            </div>
            <div className="text-[12px] whitespace-nowrap font-semibold">
              33,098 Rating
            </div> */}
          </div>
          <div className="flex gap-5 my-3">
            <button
              className="bg-[#CDE0F4] text-black font-semibold px-6 py-1 rounded-xl"
              onClick={removeItem}
            >
              Remove
            </button>
            {/* <button className="bg-[#CDE0F4] text-black font-semibold px-6 py-1 rounded-xl">
              Save for later
            </button> */}
          </div>
        </div>
        <div className="flex flex-col justify-between">
          {data?.batch_name ? (
            <button
              className="bg-[#CDE0F4] flex items-center gap-3 text-black font-semibold px-6 py-1 rounded-xl whitespace-nowrap"
              onClick={() =>
                navigate(routes.BATCHES, {
                  state: {
                    cartId: data?.id,
                    id: data?.course_id,
                    title: data?.course?.title,
                  },
                })
              }
            >
              {data?.batch_name}
            </button>
          ) : (
            <button
              onClick={() =>
                navigate(routes.BATCHES, {
                  state: {
                    cartId: data?.id,
                    id: data?.course_id,
                    title: data?.course?.title,
                  },
                })
              }
              className="bg-[#CDE0F4] flex items-center gap-3 text-black font-semibold px-6 py-1 rounded-xl whitespace-nowrap"
            >
              Select Batch
            </button>
          )}
          <div className="text-[#03014C] text-end font-bold mb-10">
            ₹{data?.amount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetailItem;
