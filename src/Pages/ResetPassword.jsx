import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { routes } from "../constants/routes";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Endpoints } from "../constants/Endpoints";
import LoadingOverlay from "react-loading-overlay";
import { Helmet } from "react-helmet-async";

const ResetPassword = () => {
  const [isReset, setIsReset] = useState(false);
  const [formData, setFormData] = useState({
    password: "",
    confirm_password: "",
  });
  const [isValid, setIsValid] = useState(false);
  const [validateMessage, setValidateMessage] = useState("");
  const [resetMessage, setResetMessage] = useState("");
  const [isActive, setIsActive] = useState(false);
  const { email, password } = useParams();

  // validates reset link
  useEffect(() => {
    axios
      .post(`${Endpoints.API_URL}/candidate/validateCandidate`, {
        email: email,
        password: password,
      })
      .then((res) => {
        if (res.data.status) {
          setIsValid(true);
        } else {
          setIsValid(false);
          setValidateMessage(res.data.message);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [email, password]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  // sends reset req to backend
  async function handleSubmit(e) {
    e.preventDefault();
    setIsActive(true);

    if (formData.password === formData.confirm_password) {
      axios
        .post(`${Endpoints.API_URL}/candidate/resetPassword`, {
          email: email,
          code: password,
          password: formData.confirm_password,
        })
        .then((res) => {
          if (res.data.status) {
            setIsActive(false);
            setIsReset(true);
          } else {
            setIsActive(false);
            setResetMessage(res.data.message);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      toast.error("Password doesn't match");
    }
  }

  return (
    <>
      <Helmet>
        <title>Reset Password</title>
        <link
          rel="canonical"
          href="https://eurotechmaritime.org/reset-password"
        />
      </Helmet>
      <LoadingOverlay active={isActive} spinner text="Validating">
        <div
          className="w-screen h-screen flex justify-center items-center bg-no-repeat bg-cover p-8 md:p-14 lg:px-40"
          style={{
            backgroundImage: "url(/assets/Home-hero-banner.png)",
          }}
        >
          {isValid ? (
            <div className="bg-white rounded-2xl">
              <div className="h-full w-full grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="hidden md:flex justify-center align-middle p-10 ">
                  <img src="/assets/Forgot-password-banner.svg" alt="" />
                </div>
                <div className="flex justify-center items-center text-center p-8">
                  {!isReset && (
                    <form onSubmit={handleSubmit} className="flex-grow">
                      <h1 className="text-[35px] font-bold">Reset Password</h1>
                      <p className="text-[#BCBCBC] text-[14px] my-4">
                        Enter your new password
                      </p>
                      <input
                        type="password"
                        name="password"
                        onChange={handleChange}
                        className="block border border-indigo-300 rounded-xl h-[50px] min-w-[100%] p-2 mx-auto my-3 md:my-5"
                        placeholder="New password"
                        required
                      />
                      <input
                        type="password"
                        name="confirm_password"
                        onChange={handleChange}
                        className="block border border-indigo-300 rounded-xl h-[50px] min-w-[100%] p-2 mx-auto my-3 md:my-5"
                        placeholder="Confirm password"
                        required
                      />
                      <button
                        className="bg-[#1550A2] mx-auto block text-white px-8 py-3 rounded-xl text-[18px] font-bold md:mb-10 mt-7"
                        type="submit"
                      >
                        Reset
                      </button>
                    </form>
                  )}
                  {isReset ? (
                    <p className="text-xl">
                      Password reset successful,{" "}
                      <Link to={routes.LOGIN} className="text-blue-600">
                        go to login
                      </Link>
                    </p>
                  ) : (
                    <Link to={routes.FORGOT_PASSWORD} className="text-blue-600">
                      {resetMessage}
                    </Link>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-2xl">
              <div className="min-h-[40vh] flex justify-center items-center overflow-hidden mx-4 p-4 md:p-14">
                <h1 className="font-bold text-3xl text-center">
                  {validateMessage}
                </h1>
              </div>
            </div>
          )}
        </div>
      </LoadingOverlay>
    </>
  );
};

export default ResetPassword;
