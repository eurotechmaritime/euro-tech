import React, { useEffect, useRef, useState } from "react";
import PageBanner from "../Components/PageBanner";
import { FiArrowLeft } from "react-icons/fi";
import { EN } from "../locale/EN";
import { useNavigate } from "react-router-dom";
import BlueButton from "../Components/BlueButton";
import { routes } from "../constants/routes";
import axios from "axios";
import { Endpoints } from "../constants/Endpoints";
import { useDispatch, useSelector } from "react-redux";
import { updateCartCount } from "../redux/ActionCreator";
import { toast } from "react-toastify";
import LoadingOverlay from "react-loading-overlay";

const CourseTerms = () => {
  const navigate = useNavigate();
  const profileDetails = useSelector(({ app }) => app.profileDetails);
  const [cartData, setCartData] = useState([]);
  const [tnc, setTnc] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);
  const [isPaymentProcessing, setIsPaymentProcessing] = useState(false);
  const dispatch = useDispatch();
  const loading = useRef(null);
  const [isPopUp, setIsPopUp] = useState(false);
  const popUp = useRef(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${Endpoints.CMS_URL}/tnc`);
        setTnc(res.data.data[0]);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${Endpoints.BASE_URL}/cart/get-cart`, {
          headers: {
            Authorization: `Bearer ${profileDetails.token}`,
          },
        });
        setTotalAmount(res.data.data.totalAmount);
        setCartData(res.data.data.cart);
        dispatch(updateCartCount(res.data.data.cart.length));
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const clearCart = async () => {
    try {
      const res = await axios.delete(`${Endpoints.BASE_URL}/cart/remove-cart`, {
        headers: {
          Authorization: `Bearer ${profileDetails.token}`,
        },
      });
      dispatch(updateCartCount(0));
      // setUpdate(!update);
    } catch (e) {
      console.log(e);
    }
  };

  const updatePayment = async (data) => {
    const res = await axios.post(
      "https://api.eurotechmaritime.org/razorpay/store-payment",
      {
        payload: {
          payment: {
            entity: {
              id: data.razorpay_payment_id,
              order_id: data.razorpay_order_id,
              status: "captured",
              method:
                "upi or card or any other payment method selected by user",
            },
          },
        },
      }
    );
  };

  const handlePopUp = (e) => {
    e.preventDefault();
    setIsPopUp(true);
    popUp.current?.scrollIntoView({
      behaviour: "smooth",
      block: "center",
      inline: "start",
    });
  };

  const initiatePayment = async () => {
    // e.preventDefault();
    setIsPopUp(false);
    loading.current?.scrollIntoView({ behaviour: "smooth" });
    setIsPaymentProcessing(true);

    for (let i = 0; i < cartData.length; i++) {
      if (cartData[i].batch_id === null) {
        setIsPaymentProcessing(false);
        toast.error("Please select batch for courses");
        return; // exit the loop after the first match is found
      }
    }

    if (profileDetails.token) {
      const params = {
        amount: JSON.stringify(totalAmount),
        id: profileDetails.id,
        customer_name: profileDetails.full_name,
        customer_mobile: profileDetails.phone,
        customer_email: profileDetails.email,
        currency: "INR",
        sms_notify: false,
        email_notify: false,
        partial_payment: true,
        additional_field1: "",
        additional_field2: "",
        redirect_url: "https://eurotechmaritime.org/my-courses",
      };

      axios
        .post(`${Endpoints.API_URL}hylo/create-order`, params, {
          headers: {
            Authorization: `Bearer ${profileDetails.token}`,
          },
        })
        .then((res) => {
          setIsPaymentProcessing(false);

          if (res.data.status) {
            const paymentData = JSON.parse(res?.data?.data);
            if (paymentData?.status === "APPROVED") {
              window.location.replace(paymentData?.short_url);
            }
          }
          if (!res.data.status && res.data.statusCode === 202) {
            toast.error(
              "Unfortunately, no seats available for the batch selected. Please restart the course selection process"
            );
          } else {
            console.log(res.data);
          }
        })
        .catch((err) => {
          console.log(err);
        });

      // try {
      // const options = {
      //   amount: res.data.data.rp_order_id,
      //   currency: "INR",
      //   name: "EuroTech",
      //   description: "Payment for purchase",
      //   order_id: res.data.data.rp_order_id,
      //   handler: function (response) {
      //     if (response.razorpay_signature) {
      //       updatePayment(response);
      //       clearCart();
      //       navigate(routes.HOME);
      //       toast.info('Please upload the required documents in my courses page.');
      //     }
      //   },
      // };

      // const paymentObject = new window.Razorpay(options);
      // paymentObject.open();
      // } catch (e) {
      //   console.log(e);
      // }
    } else {
      navigate("/login");
    }
  };

  const CourseTR = ({ name, eligibility }) => {
    return (
      <tr className="">
        <td className="p-5 py-5">{name}</td>
        <td className=" py-5">{eligibility}</td>
      </tr>
    );
  };

  return (
    <LoadingOverlay
      active={isPaymentProcessing}
      spinner
      text="Please wait... Processing"
    >
      <div>
        <PageBanner
          imgUrl="/assets/Governing-board-banner.png"
          title="Course Booking"
          ref={popUp}
        />
        <section className="container mx-auto">
          <div>
            <h1 className="flex items-center text-[36px] text-black font-bold gap-4 my-10">
              <FiArrowLeft onClick={() => navigate(-1)} /> Terms & Conditions
            </h1>
          </div>
          <div>
            <div
              ref={loading}
              className=" text-[30px] fw-bold m-5"
              dangerouslySetInnerHTML={{ __html: tnc?.tnc }}
            />
            {/* <div dangerouslySetInnerHTML={{ __html: EN.courseTerms }} />
            <div className="my-8">
              <table className="table-fixed w-full bg-white font-semibold drop-shadow-xl">
                <thead className="bg-[#E8F0FC] h-[80px]">
                  <tr className="">
                    <th className="px-5 text-start">No. of Courses</th>
                    <th className=" text-start">Discount Per Course</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border ">
                    <td className="p-5 py-3">0-5</td>
                    <td>N/A</td>
                  </tr>
                  <tr className="border ">
                    <td className="p-5 py-3">6-5</td>
                    <td>Rs 500 For Every Course</td>
                  </tr>
                  <tr className="border ">
                    <td className="p-5 py-3">16-25</td>
                    <td>Rs 1000 For Every Course</td>
                  </tr>
                  <tr className="border ">
                    <td className="p-5 py-3">26-30</td>
                    <td>Rs 1500 For Every Course</td>
                  </tr>
                  <tr className="border ">
                    <td className="p-5 py-3">31-35</td>
                    <td>Rs 2000 For Every Course</td>
                  </tr>
                  <tr className="border ">
                    <td className="p-5 py-3">36 And Above</td>
                    <td>Rs 3000 For Every Course</td>
                  </tr>
                </tbody>
              </table>
              <p className="text-[#D8272F] text-[14px]">
                ** The Above Slab Is Not Applicable For The Courses For Which
                Fees Is Less Than Rs.4000/-
              </p>
            </div>
            <div className="my-8">
              <table className="table-fixed w-full bg-white drop-shadow-xl">
                <thead className="bg-[#E8F0FC] h-[80px]">
                  <tr className="">
                    <th className="px-5 text-start">Course Name</th>
                    <th className=" text-start">Eligibility</th>
                  </tr>
                </thead>
                <tbody className="font-semibold">
                  {cartData?.map((item) => (
                    <CourseTR
                      name={item?.course?.title}
                      eligibility={item?.course?.eligibility}
                    />
                  ))}
                </tbody>
              </table>
            </div> */}
            <form onSubmit={handlePopUp}>
              <div className="flex flex-col gap-6  font-semibold">
                <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    className="h-[20px] w-[20px]"
                    required
                  />
                  <span>Yes,I am eligible for this course .</span>
                </div>
                <div className="flex items-center gap-3  font-semibold">
                  <input
                    type="checkbox"
                    className="h-[20px] w-[20px]"
                    required
                  />
                  <span>I have read & agree to the terms of service.</span>
                </div>
              </div>
              <div className="flex justify-end gap-10 my-14 mb-20">
                <BlueButton onClick={() => navigate(routes.COURSE_BOOKING)}>
                  Take another course
                </BlueButton>
                <BlueButton type="submit">Proceed to Payment</BlueButton>
              </div>
            </form>
          </div>
        </section>
        {/* alert pop-up */}
        <div
          className={`${
            isPopUp ? "flex" : "hidden"
          } absolute  justify-center items-center top-0 left-0 bg-opacity-50 bg-black h-screen w-full`}
        >
          <div className="flex flex-col justify-between min-h-[50%] min-w-[50%] bg-[#f1f3f4] rounded-md">
            <div className="flex flex-col justify-center items-center flex-1 md:flex-row gap-10 p-10">
              <div className="max-w-[200px] max-h-[200px]">
                <img
                  src="/assets/payment-alert.png"
                  alt="alert"
                  className="w-full h-auto"
                />
              </div>
              <div className="flex flex-col flex-1 justify-center gap-4 items-center text-center font-bold">
                <p>
                  <p className="inline text-red-600">IMPORTANT.</p> You are
                  about to make the payment.
                </p>
                <p>
                  Please do not press{" "}
                  <p className="inline text-red-600">Back Button</p> or{" "}
                  <p className="inline text-red-600">Refresh</p>.
                </p>
                <p>
                  Please do not close the{" "}
                  <p className="inline text-red-600">Browser</p> or{" "}
                  <p className="inline text-red-600">Tab</p>.
                </p>
                <p>
                  Wait for the transactions to fully complete after you perform
                  the payment.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-b-md flex justify-end gap-4 p-4">
              <button
                className="bg-gray-400 py-3 px-5 font-bold rounded-xl mx-3"
                onClick={() => setIsPopUp(false)}
              >
                Cancel
              </button>
              <BlueButton onClick={initiatePayment}>
                Proceed to Pyament
              </BlueButton>
            </div>
          </div>
        </div>
      </div>
    </LoadingOverlay>
  );
};

export default CourseTerms;
