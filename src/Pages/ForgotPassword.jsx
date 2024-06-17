import React, { useState } from "react";
import { Link } from "react-router-dom";
import { routes } from "../constants/routes";
import { Endpoints } from "../constants/Endpoints";
import axios from "axios";
import { Helmet } from "react-helmet-async";

const ForgotPassword = () => {
  const [message, setMessage] = useState("");
  const [isSent, setIsSent] = useState(false);
  const [isLoad, setIsLoad] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoad(true);
    setIsSent(false);

    axios
      .post(`${Endpoints.API_URL}/candidate/checkEmail`, {
        email: e.target.email.value,
      })
      .then((res) => {
        setIsLoad(false);
        setIsSent(true);
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
      <Helmet>
        <title>Forgot Password</title>
        <link
          rel="canonical"
          href="https://eurotechmaritime.org/forget-password"
        />
      </Helmet>
      <div
        className="w-screen h-screen flex justify-center items-center bg-no-repeat bg-cover p-8 md:p-14 lg:px-40"
        style={{
          backgroundImage: "url(/assets/Home-hero-banner.png)",
        }}
      >
        <div className="bg-white rounded-2xl">
          <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="hidden md:flex justify-center align-middle p-10 ">
              <img src="/assets/Forgot-password-banner.svg" alt="" />
            </div>
            <div className="md:p-14 p-6 my-auto">
              <form action="" onSubmit={handleSubmit}>
                <h1 className="text-[35px] font-bold">Trouble Logging In?</h1>
                <p className="text-[#BCBCBC] text-[14px] my-4">
                  Enter your email, phone, or username and we'll send you a link
                  to get back into your account.
                </p>
                <input
                  className="border border-indigo-300 rounded-xl h-[50px] w-[100%] p-2 my-3 md:my-5"
                  placeholder="Email Id , Phone Number"
                  name="email"
                />
                {isLoad && (
                  <p className="font-bold">Please wait... Validating</p>
                )}
                {isSent && (
                  <p className="text-[#1550A2] font-bold">{message}</p>
                )}
                <button
                  className="bg-[#1550A2] block w-full text-white p-4 rounded-xl text-[18px] font-bold md:mb-10 mt-7"
                  type="submit"
                >
                  Send Login Link
                </button>
              </form>
              <p className="text-[#BCBCBC] text-[14px] my-3 md:my-7 font-bold text-center ">
                OR
              </p>

              <div className="text-center">
                <Link
                  to={routes.REGISTER}
                  className="text-[14px] text-[#1550A2] font-bold underline "
                >
                  Register Here
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ForgotPassword;
