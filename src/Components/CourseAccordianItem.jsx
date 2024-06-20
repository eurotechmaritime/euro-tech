import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { routes } from "../constants/routes";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { Endpoints } from "../constants/Endpoints";
import { increaseCartCount } from "../redux/ActionCreator";
import { toast } from "react-toastify";

const CourseAccordianItem = ({ data }) => {
  const navigate = useNavigate();
  const profileDetails = useSelector(({ app }) => app.profileDetails);
  const count = useSelector(({ app }) => app.cartCount);
  const [batches, setBatches] = useState([]);
  const dispatch = useDispatch();
  const formattedTitle = data.slug.replace(/\s+/g, "-").toLowerCase();

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(
          `${Endpoints.BASE_URL}/batches/get/list?course_id=${data.id}`
        );
        setBatches(res.data.data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const AddToCart = async () => {
    if (profileDetails.token && batches.length > 0) {
      try {
        const res = await axios.post(
          `${Endpoints.BASE_URL}/cart/add-cart`,
          {
            course_id: data.id,
            category_id: data.category_id,
          },
          {
            headers: {
              Authorization: `Bearer ${profileDetails.token}`,
            },
          }
        );
        dispatch(increaseCartCount());
        toast.success(
          "Course added to the cart. Please visit 'View Selected Courses' for the checkout"
        );
      } catch (e) {
        console.log(e);
      }
    } else if (batches.length === 0) {
      toast.error("Sorry. There is no available batches for this course");
    } else {
      navigate(routes.LOGIN);
    }
  };

  return (
    <div className="flex md:flex-row flex-col bg-white drop-shadow-xl p-5 my-8 ">
      <div className=" flex flex-col justify-center mr-4">
        <img
          src={data?.cover_image_url}
          className="h-[130px] min-w-[170px] my-auto "
          alt=""
        />
      </div>
      <div className="w-full">
        <div className="flex flex-col md:flex-row  md:gap-10  justify-between">
          <div className=" text-gray-500 ">
            <p className="text-[#03014C] font-bold">{data?.title}</p>
            <p className="text-[14px] leading-[20px]">{data?.description}</p>
            {/*<p className="text-[14px] font-bold ">Tutor Name</p>*/}
            <p className="text-[14px] -mt-2">
              Duration: <span className="font-bold">{data?.duration}</span>
            </p>
          </div>
          <div className="flex flex-col justify-between py-4">
            {/* <div>
              <div className="text-[12px] text-[#6aa8ff] flex items-center justify-end gap-1">
                <FaStar /> 5.0
              </div>
              <div className="text-[12px] whitespace-nowrap font-semibold">
                33,098 Rating
              </div>
            </div> */}
            <div className="text-[#03014C] font-bold">₹{data?.fees}</div>
          </div>
        </div>
        <div className="flex justify-end gap-6">
          <button
            className="bg-[#1550a2] p-2 px-6 rounded-xl text-white font-bold"
            onClick={AddToCart}
          >
            Select
          </button>
          <button
            onClick={() =>
              navigate(
                // `${routes.COURSE_BOOKING}${routes.COURSE_ABOUT}/${data.id}/${formattedTitle}`,
                `${routes.COURSE_BOOKING}/${formattedTitle}-${data.id}`,
                { state: { id: data.id } }
              )
            }
            className="bg-[#1550a2] p-2 px-6 rounded-xl text-white font-bold"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseAccordianItem;
