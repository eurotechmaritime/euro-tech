import React, { useState } from "react";
import PageBanner from "../Components/PageBanner";
import { FiArrowLeft } from "react-icons/fi";
import CourseDetailItem from "../Components/CourseDetailItem";
import PriceDetailsBox from "../Components/PriceDetailsBox";
import "react-responsive-modal/styles.css";
import Modal from "react-responsive-modal";
import BlueButton from "../Components/BlueButton";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const CoursePayment = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [open, setOpen] = useState(false);
  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>Course Payment</title>
        <link rel="canonical" href="https://eurotechmaritime.org/payments" />
      </Helmet>
      <Modal open={open} onClose={onCloseModal}>
        <div className="bg-white rounded-2xl border">
          <div className=" flex h-full w-full grid grid-cols-2 gap-10">
            <div className="flex justify-center align-middle">
              <img src="/assets/Login-image.svg" alt="" />
            </div>
            <div className="p-14">
              <h1 className="text-black text-[30px] font-bold">Success</h1>
              <p className="text-[#BCBCBC] text-[14px]">
                All The Best Wishes For Your Carrier In Euro Tech Maritime
                Academy
              </p>
              <BlueButton onClick={onCloseModal}>Let's Start</BlueButton>
            </div>
          </div>
        </div>
      </Modal>
      <div>
        <PageBanner
          imgUrl="/assets/Governing-board-banner.png"
          title="Payments"
        />
        <div className="container mx-auto">
          <div>
            <h1 className="flex items-center text-[36px] text-black font-bold gap-4 my-10">
              <FiArrowLeft onClick={() => navigate(-1)} /> Payment Details
            </h1>
          </div>
          <div className="bg-[#E8F0FC] p-10 mb-10">
            {showOptions ? (
              <>
                <h1 className="text-[#1550A2] text-[20px] font-semibold mb-5">
                  All Other Payment Options
                </h1>
                <div className="bg-white p-8 mb-8">
                  <div className="text-black flex items-center font-semibold gap-5 my-5 ">
                    <input type="radio" id="UPI" /> UPI
                  </div>
                  <div className="text-black flex items-center font-semibold gap-5 my-5">
                    <input type="radio" id="UPI" /> Wallets
                  </div>
                  <div className="text-black flex items-center font-semibold gap-5 my-5">
                    <input type="radio" id="UPI" /> Credit / Debit / ATM Card
                  </div>
                  <div className="text-black flex items-center font-semibold gap-5 my-5">
                    <input type="radio" id="UPI" /> Net Banking
                  </div>
                </div>
              </>
            ) : (
              <>
                <h1 className="text-[#1550A2] text-[20px] font-semibold mb-5">
                  Course Details
                </h1>
                <div className="flex flex-col gap-5">
                  <CourseDetailItem />
                </div>
              </>
            )}
            <h3 className="text-[#1550A2] text-[20px] font-semibold p-4">
              Price Details
            </h3>
            <PriceDetailsBox />
            <p className="text-[#D8272F] my-5">
              Note: Please Ensure That Your Recent Photograph & Signature Are
              Uploaded And Visible In The Seafarer`S Profile. If Not, Please Re
              Uploads Them At The Earliest.
            </p>
            <div className="flex justify-end">
              {!showOptions ? (
                <BlueButton onClick={() => setShowOptions(true)}>
                  a Continue
                </BlueButton>
              ) : (
                <div>
                  <BlueButton onClick={onOpenModal}>Continue </BlueButton>
                  {/*<BlueButton />*/}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CoursePayment;
