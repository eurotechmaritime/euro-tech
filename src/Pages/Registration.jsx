import React, { useState, useRef } from "react";
import PageBanner from "../Components/PageBanner";
import { EN } from "../locale/EN";
import Input from "../Components/Input";
import axios from "axios";
import { Endpoints } from "../constants/Endpoints";
import { routes } from "../constants/routes";
import { useNavigate } from "react-router-dom";
import { setUserProfileData, setTimestamp } from "../redux/ActionCreator";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import LoadingOverlay from "react-loading-overlay";

const Registration = () => {
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    phone: "",
    indos_number: "",
    passport_number: "",
    otp: "",
  });
  const loading = useRef(null);
  // const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [isVerifying, setIsVerifying] = useState(false);

  // const [confirmIndos, setConfirmIndos] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    loading.current?.scrollIntoView({ behaviour: "smooth" });

    // if (formData?.indos_number === confirmIndos) {
    await axios
      .post(`${Endpoints.API_URL}candidate/create`, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        setIsLoading(false);

        if (res.data.statusCode !== 201) {
          toast.error(res.data.message);
        } else {
          // setIsSent(true);
          let t = new Date();

          toast.success("Candidate Registered Successfully");
          dispatch(setUserProfileData(res?.data?.data));
          dispatch(setTimestamp(t.getTime()));
          navigate(routes.HOME);
        }
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        toast.error(err.response.data.message);
      });
    // } else {
    //   toast.error("INDoS number not matching");
    // }
  };

  // const handleVerify = async (e) => {
  //   e.preventDefault();
  //   setIsVerifying(true);

  //   await axios
  //     .post(`${Endpoints.API_URL}candidate/verifyRegister`, formData, {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then((res) => {
  //       if (res.data.statusCode !== 201) {
  //         setIsVerifying(false);
  //         toast.error("Invalid OTP");
  //       } else {
  //         setIsVerifying(false);
  //         toast.success("Candidate Registered Successfully");
  //         dispatch(setUserProfileData(res?.data?.data));
  //         navigate(routes.HOME);
  //       }
  //     })
  //     .catch((err) => {
  //       isVerifying(false);
  //       console.log(err);
  //       toast.error(err.response.data.message);
  //     });
  // };

  return (
    <>
      <Helmet>
        <title>Register</title>
        <link rel="canonical" href="https://eurotechmaritime.org/register" />
      </Helmet>
      <LoadingOverlay
        active={isLoading}
        spinner
        text="Please wait... Processing"
      >
        <div>
          <PageBanner
            imgUrl="/assets/About-bg-image.png"
            title={EN.candidate_register.PAGE_TITLE}
          />
          <form onSubmit={handleSubmit} ref={loading}>
            <div className="container mx-auto my-10 p-3">
              <div className="px-8 bg-[#EFF5FF] rounded drop-shadow mb-8">
                <h1 className="text-[#03014C] text-[18px] md:text-[24px] font-bold py-3">
                  {EN.candidate_register.HEADING}
                </h1>
              </div>
              {/* <h1 className="text-[#03014C] text-[18px] md:text-[24px] font-bold">
              {EN.candidate_register.SUB_HEADING_1}
              </h1> */}
              <div className="flex flex-col gap-5 justify-center items-center my-5">
                <Input
                  label="Full Name"
                  name="full_name"
                  value={formData?.full_name}
                  className="w-[100%] md:w-[70%] lg:w-[40%]"
                  required
                  onChange={handleChange}
                />
                <Input
                  onChange={handleChange}
                  name="email"
                  value={formData?.email}
                  label="Email Address (Username)"
                  type="email"
                  className="w-[100%] md:w-[70%] lg:w-[40%]"
                  required
                />
                <Input
                  onChange={handleChange}
                  name="phone"
                  value={formData?.phone}
                  label="Phone"
                  type="number"
                  className="w-[100%] md:w-[70%] lg:w-[40%]"
                  required
                />
                <Input
                  onChange={handleChange}
                  name="indos_number"
                  value={formData.indos_number}
                  label="INDoS No"
                  className="w-[100%] md:w-[70%] lg:w-[40%]"
                />
                <Input
                  onChange={handleChange}
                  name="passport_number"
                  value={formData.passport_number}
                  label="Passport No"
                  className="w-[100%] md:w-[70%] lg:w-[40%]"
                />
                {/* <Input
                onChange={(e) => setConfirmIndos(e.target.value)}
                name="indos_number"
                value={confirmIndos}
                label="Re-enter INDoS No"
                className="w-[100%] md:w-[70%] lg:w-[40%]"
              /> */}
                {/* {isSent && (
                <>
                  <h1 className="text-[#03014C] text-[18px] md:text-[24px] font-bold py-3 ">
                    Verify Registration
                  </h1>
                  <Input
                    onChange={handleChange}
                    name="otp"
                    value={formData?.otp}
                    label="OTP"
                    type="password"
                    className="w-[100%] md:w-[70%] lg:w-[40%]"
                    required
                  />
                  <p className="text-[14px] text-[#1550A2] font-bold">
                    Enter the OTP sent to {formData.email}
                  </p>
                </>
              )}
              {isLoading && (
                <p className="text-[14px] text-[#1550A2] font-bold">
                  Please Wait... Sending OTP
                </p>
              )}
              {isVerifying && (
                <p className="text-[14px] text-[#1550A2] font-bold">
                  Please Wait... Verifying
                </p>
              )} */}
                <p className="text-[16px] text-[red] leading-normal md:leading-relaxed font-semibold">
                  ** IMPORTANT: Either one of INDoS No or Passport No is
                  mandatory **
                </p>
                {/* <Input
                onChange={handleChange}
                name="password"
                value={formData?.password}
                label="Password"
                type="password"
                className="col-span-6"
                required
              /> */}
                {/* <Input
                onChange={handleChange}
                name="confirm_password"
                value={formData?.password}
                label="Confirm Password"
                type="password"
                className="col-span-6"
                required
              /> */}
                {/* <Input
                name="date_of_birth"
                type="date"
                value={formData?.date_of_birth}
                label="Date of Birth"
                className="col-span-5"
                required
                onChange={handleChange}
              /> */}
              </div>
              {/* <h1 className="text-[#03014C] text-[18px] md:text-[24px] font-bold">
              {EN.candidate_register.SUB_HEADING_2}
            </h1>
            <div className="grid md:grid-cols-12 grid-cols-1 gap-10 my-5">
              <Input
                onChange={handleChange}
                name="email"
                value={formData?.email}
                label="Email Address (Username)"
                type="email"
                className="col-span-6"
                required
              />
              <Input
                onChange={handleChange}
                name="password"
                value={formData?.password}
                label="Password"
                type="password"
                className="col-span-6"
                required
              />
              <Input
                onChange={handleChange}
                name="phone"
                value={formData?.phone}
                label="Phone"
                type="number"
                className="col-span-6"
                required
              />
              <Input
                onChange={handleChange}
                name="name_of_next_of_kin"
                value={formData?.name_of_next_of_kin}
                label="Name of the Next of Kin"
                className="col-span-6"
              />
              <Input
                onChange={handleChange}
                name="contact_of_next_of_kin"
                value={formData?.contact_of_next_of_kin}
                label="Contact Number of the Next of Kin"
                type="number"
                className="col-span-6"
              />
            </div>
            <h1 className="text-[#03014C] text-[18px] md:text-[24px] font-bold">
              {EN.candidate_register.SUB_HEADING_3}
            </h1>
            <div className="grid md:grid-cols-12 grid-cols-1 gap-10 my-5">
              <Input
                onChange={handleChange}
                name="indos_number"
                value={formData.indos_number}
                label="INDoS No"
                className="col-span-4"
              />
              <Input
                onChange={(e) => setConfirmIndos(e.target.value)}
                name="indos_number"
                value={confirmIndos}
                label="Re-enter INDoS No"
                className="col-span-4"
              />
              <Input
                onChange={handleChange}
                name="passport_number"
                value={formData.passport_number}
                label="Passport No"
                className="col-span-4"
              />
            </div> */}
            </div>
            <div className="flex container mx-auto my-10">
              <span className="m-3">
                <input type="checkbox" className="h-[25px] w-[25px]" required />
              </span>
              <p className="text-[12px] leading-normal md:leading-relaxed font-semibold">
                {EN.candidate_register.AGREEMENT_TEXT}
              </p>
            </div>
            <div className="container mx-auto flex justify-end mb-10 ">
              <button
                className={`bg-[#1550A2] text-white text-[20px] font-bold px-14 p-4 rounded-2xl`}
                type="submit"
              >
                Register
              </button>
              {/* <button
              className={`bg-[#1550A2] text-white text-[20px] font-bold px-14 p-4 rounded-2xl ${!isSent &&
                "hidden"}`}
              type="button"
              onClick={handleVerify}
            >
              Verify
            </button> */}
            </div>
          </form>
        </div>
      </LoadingOverlay>
    </>
  );
};

export default Registration;
