import React, { useEffect, useState } from "react";
import PageBanner from "../Components/PageBanner";
import { FiArrowLeft } from "react-icons/fi";
import { routes } from "../constants/routes";
import { useLocation, useNavigate, useParams, useRouteError } from "react-router-dom";
import axios from "axios";
import { Endpoints } from "../constants/Endpoints";
import dayjs from "dayjs";
import { useDispatch, useSelector } from "react-redux";
import { increaseCartCount } from "../redux/ActionCreator";
import { generateUniqueNumber } from "../utils";
import { AiFillCheckCircle } from "react-icons/ai";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { courseSeoData } from "../locale/courseSeoData";

const AboutCourse = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const routeData = location.state;
  // const {ID} = location.state || {};
  // const router = useRouteError()
  const navigate = useNavigate();
  const { id, title } = useParams();
  // const ID = routeData.id;
  const [data, setData] = useState({});
  const profileDetails = useSelector(({ app }) => app.profileDetails);
  const [selectedFile, setSelectedFile] = React.useState(null);
  const [docsArray, setDocsArray] = useState([]);
  const [alreadyUploaded, setAlreadyUploaded] = useState([]);
  const [batchData, setBatchData] = useState([]);
  const [batchesAvail, setBatchesAvail] = useState(true);
  const [open, setOpen] = useState(false);
  const [ID,setID] = useState()

  useEffect(() => {
    if(title){
      let arr = title.split("-")
      let id = arr[arr.length-1];
      setID(Number(id))
    }
  },[title])

  console.log("id",id,routeData)
  // console.log("id",ID)
  console.log("title",title)

  useEffect(() => {
    (async () => {
      if (profileDetails?.token) {
        try {
          const res = await axios.get(
            `${Endpoints.BASE_URL}/documents/fetch/uploaded-by-course?course_id=${ID}`,
            {
              headers: {
                Authorization: `Bearer ${profileDetails.token}`,
              },
            }
          );
          setAlreadyUploaded(res.data.data);
        } catch (e) {
          console.log(e);
        }
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        if(ID === undefined) return;
        const res = await axios.get(
          `${Endpoints.BASE_URL}/courses/fetch/${ID}`
        );
        setData(res.data.data);
      } catch (e) {
        console.log(e, "error with API");
      }
    })();
  }, [ID]);

  useEffect(() => {
    if (data?.documents_required) {
      let docsData = JSON.parse(data?.documents_required);
      setDocsArray(
        docsData?.map((item) => ({
          name: item.name,
          id: item.id,
          isUploaded: false,
        }))
      );
    }
  }, [data]);

  useEffect(() => {
    (async () => {
      try {
        if(!ID) return
        const res = await axios.get(
          `${Endpoints.API_URL}/batches/get/list?course_id=${id}`
        );
        setBatchData(res.data.data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  // e.status hard coded, it is to be changed in future
  useEffect(() => {
    if (
      batchData.some(
        (e) => dayjs().isBefore(e.start_date) && e.status !== "Closed"
      )
    ) {
      if (batchData.some((item) => item.available_seats !== 0)) {
        setBatchesAvail(true);
      } else {
        setBatchesAvail(false);
      }
    } else {
      setBatchesAvail(false);
    }
  }, [batchData]);

  const AddToCart = async () => {
    if (profileDetails.token) {
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
        navigate(routes.COURSE_BOOKING + routes.COURSE_DETAILS);
      } catch (e) {
        console.log(e);
      }
    } else {
      navigate(routes.LOGIN);
    }
  };

  const dateFormatter = (date) => {
    return dayjs(date).format("DD/MM/YYYY");
  };

  const handleSubmit = async (event, el) => {
    event.preventDefault();

    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("course_id", id);
      formData.append("document_id", el.id);
      formData.append("document_name", el.name);
      try {
        const res = await axios({
          method: "post",
          url: "https://api.eurotechmaritime.org/documents/upload/document",
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${profileDetails.token}`,
          },
        });
        if (res.data.statusCode === 200) {
          toast.success("Upload Success");
          let newData = docsArray.map((item) =>
            item.name === el.name
              ? { name: item.name, id: item.id, isUploaded: true }
              : item
          );
          setSelectedFile(null);
          setDocsArray(newData);
        } else {
          toast.error("Upload Failed");
        }
      } catch (error) {
        console.log(error);
      }
    } else {
      toast.warn("Select a file first");
    }
  };

  const handleFileSelect = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  return (
    <>
      <Helmet>
        <title>{courseSeoData?.[id]?.title}</title>
        <meta name="description" content={courseSeoData?.[id]?.meta} />
        <link
          rel="canonical"
          href={`https://eurotechmaritime.org/course-booking/about/${id}/${title}`}
        />
      </Helmet>
      <div>
        <PageBanner
          imgUrl="/assets/Governing-board-banner.png"
          title={data?.title}
          full
        />
        <section className="container mx-auto">
          <div>
            <h1 className="flex items-center text-[20px] md:text-[36px] text-black font-bold gap-4 my-10 md:px-0 px-3">
              <FiArrowLeft onClick={() => navigate(-1)} /> Selected Courses
              Details
            </h1>
          </div>
          <div className="drop-shadow-xl mx-8 md:mx-20">
            <div className=" md:grid md:grid-cols-12 border-b border-b-gray-200 font-semibold">
              <div className="col-span-3 py-4 px-8 bg-[#E8F0FC]">
                Courses Name
              </div>
              <div className="col-span-9 py-4 px-8 bg-white">{data?.title}</div>
            </div>
            <div className="md:grid md:grid-cols-12 border-b border-b-gray-200 font-semibold">
              <div className="col-span-3 py-4 px-8 bg-[#E8F0FC]">
                Courses Type
              </div>
              <div className="col-span-9 py-4 px-8 bg-white">
                {data?.category?.name}
              </div>
            </div>
            <div className="md:grid md:grid-cols-12 border-b border-b-gray-200 font-semibold">
              <div className="col-span-3 py-4 px-8 bg-[#E8F0FC]">
                Courses level
              </div>
              <div className="col-span-9 py-4 px-8 bg-white">
                {data?.category?.primary_category}
              </div>
            </div>
            <div className="md:grid md:grid-cols-12 border-b border-b-gray-200 font-semibold">
              <div className="col-span-3 row-span-2 py-4 px-8 bg-[#E8F0FC]">
                {routeData?.hideBook ? "Batch" : "Batches"}
              </div>
              {routeData?.hideBook ? (
                <div className="col-span-9 py-4 px-8 bg-white">
                  <p className="flex items-center">{routeData.batchData}</p>
                </div>
              ) : (
                <div
                  className={`col-span-9 py-4 px-8 bg-white ${batchesAvail &&
                    "cursor-pointer"}`}
                  onClick={() => setOpen(!open)}
                >
                  {batchesAvail ? (
                    <p className="flex items-center">
                      View Available Batch Dates{" "}
                      {open ? <FaChevronUp /> : <FaChevronDown />}{" "}
                    </p>
                  ) : (
                    <p>No batches available</p>
                  )}
                </div>
              )}
              {!routeData?.hideBook && batchesAvail && (
                <div
                  className={`${
                    open
                      ? "col-start-4 col-span-9 py-4 pt-0 px-8 md:pr-[30%] bg-white"
                      : "hidden"
                  }`}
                >
                  <ul className="list-disc">
                    {batchData.map(
                      (item, index) =>
                        dayjs().isBefore(item.start_date) && (
                          <li key={index} className="inline-block mr-4">
                            {item?.title}
                          </li>
                        )
                    )}
                  </ul>
                </div>
              )}
            </div>
            <div className="md:grid md:grid-cols-12 border-b border-b-gray-200 font-semibold">
              <div className="col-span-3 py-4 px-8 bg-[#E8F0FC]">Duration</div>
              <div className="col-span-9 py-4 px-8 bg-white">
                {data?.duration}
              </div>
            </div>
            <div className="md:grid md:grid-cols-12 border-b border-b-gray-200 font-semibold">
              <div className="col-span-3 py-4 px-8 bg-[#E8F0FC]">
                Description
              </div>
              <div className="col-span-9 py-4 px-8 bg-white">
                {data?.description}
              </div>
            </div>
            <div className="md:grid md:grid-cols-12 font-semibold">
              <div className="col-span-3 py-4 px-8 bg-[#E8F0FC]">
                Eligibility
              </div>
              <div className="col-span-9 py-4 px-8 bg-white">
                {data?.eligibility}
              </div>
            </div>
            {routeData?.hideBook && (
              <div className="md:grid md:grid-cols-12 font-semibold">
                <div className="col-span-3 py-4 px-8 bg-[#E8F0FC]">
                  Documents
                </div>
                <div className="col-span-9 py-4 px-8 bg-white">
                  {docsArray.map((item) => {
                    if (
                      alreadyUploaded.filter(
                        (el) => el.document_name === item.name
                      ).length > 0
                    ) {
                      return (
                        <div>
                          <p className="my-3">{item.name}</p>
                          <div className="flex justify-between">
                            <input
                              type="file"
                              disabled
                              onChange={handleFileSelect}
                            />
                            <AiFillCheckCircle color={"green"} size={30} />
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <form onSubmit={(e) => handleSubmit(e, item)}>
                          <p className="my-3">{item.name}</p>
                          <div className="flex justify-between">
                            <input type="file" onChange={handleFileSelect} />
                            {item.isUploaded ? (
                              <AiFillCheckCircle color={"green"} size={30} />
                            ) : (
                              <input
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                                type="submit"
                                value="Upload File"
                              />
                            )}
                          </div>
                        </form>
                      );
                    }
                  })}
                </div>
              </div>
            )}
          </div>
          <div className="flex justify-end my-10">
            {!routeData?.hideBook && (
              <button
                className={`${!batchesAvail &&
                  "bg-gray-500"} bg-[#1550A2] py-3 px-5 text-white font-bold rounded-xl`}
                onClick={() => {
                  profileDetails.token ? AddToCart() : navigate(routes.LOGIN);
                }}
                disabled={!batchesAvail}
              >
                Book Now
              </button>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutCourse;
