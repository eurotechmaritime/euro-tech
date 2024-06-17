import React, { useState } from "react";
import { routes } from "../constants/routes";
import { Link, useNavigate } from "react-router-dom";
import { Endpoints } from "../constants/Endpoints";
import axios from "axios";
import { setUserProfileData, setTimestamp } from "../redux/ActionCreator";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";

const LoginPage = () => {
  // const [email, setEmail] = useState("");
  const [verificationNum, setVerificationNum] = useState("");
  // const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const profileDetails = useSelector(({ app }) => app.profileDetails);

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const res = await axios.post(
      `${Endpoints.API_URL}candidate/login`,
      {
        // email,
        verificationNum,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (res.data.statusCode !== 201) {
      setIsLoading(false);
      toast.error(res.data.message);
    } else {
      // setIsSent(true);
      let t = new Date();

      setIsLoading(false);
      toast.success("Candidate Login Success");
      dispatch(setUserProfileData(res?.data?.data));
      dispatch(setTimestamp(t.getTime()));
      navigate(routes.HOME);
    }
  };

  // const handleVerify = async (e) => {
  //   e.preventDefault();

  //   await axios
  //     .post(
  //       `${Endpoints.API_URL}candidate/verifyLogin`,
  //       { email, otp },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     )
  //     .then((res) => {
  //       if (res.data.statusCode !== 201) {
  //         toast.error("Invalid OTP");
  //       } else {
  //         toast.success("Candidate Login Success");
  //         dispatch(setUserProfileData(res?.data?.data));
  //         navigate(routes.HOME);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       toast.error(err.response.data.message);
  //     });
  // };

  return (
    <>
      <Helmet>
        <title>Login</title>
        <link rel="canonical" href="https://eurotechmaritime.org/login" />
      </Helmet>
      <div
        className="w-screen h-screen flex justify-center items-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: "url(/assets/Home-hero-banner.png)",
        }}
      >
        <div className="bg-white h-[90vh] w-[90vw] max-h-[600px] max-w-[1400px] rounded-2xl border">
          <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-10">
            <div className="hidden md:flex justify-center align-middle">
              <img src="/assets/Login-image.svg" alt="" />
            </div>
            <div className="px-14 py-7 lg:py-14">
              <div className="flex justify-end my-2">
                <Link to={routes.HOME} className="text-[16px] ">
                  X
                </Link>
              </div>{" "}
              <form onSubmit={handleLogin}>
                <h1 className="text-[35px] font-bold">Welcome Back</h1>
                <p className="text-[#BCBCBC] text-[14px] my-4">
                  Login into your Account
                </p>
                <div className="flex flex-col gap-5">
                  {/* <input
                    required
                    type="email"
                    value={email}
                    className="border border-indigo-300 rounded-xl h-[50px] w-[100%] p-2"
                    placeholder="Enter Username"
                    onChange={(e) => setEmail(e.target.value)}
                  /> */}
                  <>
                    <input
                      type="text"
                      value={verificationNum}
                      required
                      className={`border border-indigo-300 rounded-xl h-[50px] w-[100%] p-2`}
                      placeholder="Enter Passport No or INDoS No"
                      onChange={(e) => setVerificationNum(e.target.value)}
                    />
                    {/* <p className="text-[14px] text-[#1550A2] font-bold">
                        Enter the OTP sent to {email}
                      </p> */}
                  </>
                  {isLoading && (
                    <p className="text-[14px] text-[#1550A2] font-bold">
                      Please Wait...
                    </p>
                  )}
                </div>
                {/* <div className="flex justify-end my-8">
                  <Link
                    to={routes.FORGOT_PASSWORD}
                    className="text-[14px] font-bold underline "
                  >
                    Forgot password ?
                  </Link>
                </div> */}
                <button
                  className={`bg-[#1550A2] block w-full text-white p-4 rounded-xl text-[18px] font-bold mt-5 lg:mt-10 mb-5 lg:mb-10}`}
                  type="submit"
                >
                  Login
                </button>
                {/* <button
                  className={`bg-[#1550A2] block w-full text-white p-4 rounded-xl text-[18px] font-bold mt-5 lg:mt-10 mb-5 lg:mb-10 ${!isSent &&
                    "hidden"}`}
                  type="button"
                  onClick={handleVerify}
                >
                  Login
                </button> */}
              </form>
              <p className="text-[#BCBCBC] text-[14px]">
                Don't you have an account?{" "}
                <span>
                  <Link
                    to={routes.REGISTER}
                    className="text-[14px] text-[#1550A2] font-bold underline"
                  >
                    Register Here
                  </Link>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
