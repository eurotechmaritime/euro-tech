import React, { useEffect, useRef, useState } from "react";
import PageBanner from "../Components/PageBanner";
import { useSelector } from "react-redux";
import Input from "../Components/Input";
import axios from "axios";
import { Endpoints } from "../constants/Endpoints";
import { setUserProfileData } from "../redux/ActionCreator";
import { useDispatch } from "react-redux";
import { EN } from "../locale/EN";
import { toast } from "react-toastify";

const MyComponent = () => {
  const dispatch = useDispatch();
  const inputRef = useRef(null);
  const profileDetails = useSelector(({ app }) => app.profileDetails);
  console.log(profileDetails, "profileDetails");

  const [formData, setFormData] = useState({
    full_name: "",
    date_of_birth: "",
    email: "",
    phone: "",
    name_of_next_of_kin: "",
    contact_of_next_of_kin: "",
    indos_number: "",
    passport_number: "",
  });
  const [confirmIndos, setConfirmIndos] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleClick = () => {
    if (!isEdit) {
      inputRef.current.focus();
    }
    setIsEdit(!isEdit);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData?.indos_number === confirmIndos) {
      try {
        const res = await axios.post(
          `${Endpoints.API_URL}/candidate/updateDetails`,
          formData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (res.data.status !== 201) {
          dispatch(setUserProfileData(res?.data?.data));
          toast.success("Details Updated");
          setIsEdit(false);
        } else {
          console.log(res);
        }
      } catch (e) {
        toast.error(e.response.data.message);
      }
    } else {
      toast.error("INDoS number not matching");
    }
  };

  useEffect(() => {
    setFormData({
      full_name: profileDetails.full_name,
      date_of_birth: profileDetails.date_of_birth,
      email: profileDetails.email,
      phone: profileDetails.phone,
      name_of_next_of_kin: profileDetails.name_of_next_of_kin,
      contact_of_next_of_kin: profileDetails.contact_of_next_of_kin,
      indos_number: profileDetails.indos_number,
      passport_number: profileDetails.passport_number,
    });
  }, [profileDetails]);

  return (
    <div>
      <PageBanner
        imgUrl="/assets/Governing-board-banner.png"
        title="My Profile"
        phone={`${profileDetails?.full_name}`}
      />
      <div className="container my-10">
        <form onSubmit={handleSubmit}>
          <div className="container mx-auto my-10 p-3">
            {/* <div className="px-8 bg-[#EFF5FF] rounded drop-shadow mb-8">
              <h1 className="text-[#03014C] text-[18px] md:text-[24px] font-bold py-3 ">
                {EN.candidate_register.HEADING}
              </h1>
            </div> */}
            <h1 className="text-[#03014C] text-[18px] md:text-[24px] font-bold">
              {EN.candidate_register.SUB_HEADING_1}
            </h1>
            <div className="grid md:grid-cols-12 grid-cols-1 gap-10 my-5">
              <Input
                readOnly={!isEdit}
                label="Full Name"
                name="full_name"
                value={formData?.full_name}
                className="col-span-6"
                required
                onChange={handleChange}
                ref={inputRef}
              />
              <Input
                disabled
                onChange={handleChange}
                name="email"
                value={formData?.email}
                label="Email Address (Username)"
                type="email"
                className="col-span-6"
                required
              />
              <Input
                readOnly={!isEdit}
                onChange={handleChange}
                name="phone"
                value={formData?.phone}
                label="Phone"
                type="number"
                className="col-span-6"
                required
              />
              {/* <Input
                readOnly={!isEdit}
                onChange={handleChange}
                name="password"
                value={formData?.password}
                label="Password"
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
            <h1 className="text-[#03014C] text-[18px] md:text-[24px] font-bold">
              {EN.candidate_register.SUB_HEADING_2}
            </h1>
            <div className="grid md:grid-cols-12 grid-cols-1 gap-10 my-5">
              {/* <Input
                readOnly={!isEdit}
                onChange={handleChange}
                name="email"
                value={formData?.email}
                label="Email Address (Username)"
                type="email"
                className="col-span-6"
                required
              /> */}
              {/* <Input
                readOnly={!isEdit}
                onChange={handleChange}
                name="password"
                value={formData?.password}
                label="Password"
                type="password"
                className="col-span-6"
                required
              /> */}
              {/* <Input
                readOnly={!isEdit}
                onChange={handleChange}
                name="phone"
                value={formData?.phone}
                label="Phone"
                type="number"
                className="col-span-6"
                required
              /> */}
              <Input
                readOnly={!isEdit}
                onChange={handleChange}
                name="name_of_next_of_kin"
                value={formData?.name_of_next_of_kin}
                label="Name of the Next of Kin"
                className="col-span-6"
              />
              <Input
                readOnly={!isEdit}
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
                readOnly={!isEdit}
                onChange={handleChange}
                name="indos_number"
                value={formData.indos_number}
                label="INDoS No"
                className="col-span-4"
              />
              <Input
                readOnly={!isEdit}
                onChange={(e) => setConfirmIndos(e.target.value)}
                name="indos_number"
                value={confirmIndos}
                label="Re-enter INDoS No"
                className={`col-span-4 ${!isEdit && "hidden"}`}
              />
              <Input
                readOnly={!isEdit}
                onChange={handleChange}
                name="passport_number"
                value={formData.passport_number}
                label="Passport No"
                className="col-span-4"
              />
            </div>
          </div>
          <div
            className={`flex container mx-auto my-10 ${!isEdit && "hidden"}`}
          >
            <span className="m-3">
              <input type="checkbox" className="h-[25px] w-[25px]" required />
            </span>
            <p className="text-[12px] leading-normal md:leading-relaxed font-semibold">
              {EN.candidate_register.AGREEMENT_TEXT}
            </p>
          </div>
          <div className="container mx-auto flex justify-end mb-10 gap-10">
            <button
              className={`bg-[#1550A2] text-white text-[20px] font-bold px-14 p-4 rounded-2xl ${isEdit &&
                "hidden"}`}
              type="button"
              onClick={handleClick}
            >
              Edit
            </button>
            <button
              className={`bg-[#1550A2] text-white text-[20px] font-bold px-14 p-4 rounded-2xl ${!isEdit &&
                "hidden"}`}
              type="submit"
            >
              Save
            </button>
            <button
              className={`bg-[#1550A2] text-white text-[20px] font-bold px-14 p-4 rounded-2xl ${!isEdit &&
                "hidden"}`}
              type="button"
              onClick={handleClick}
            >
              Cancel
            </button>
          </div>
        </form>
        {/* <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] max-h-[250px] w-[250px] ">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
            Name
          </h5>
          <p className="mb-4 ">{profileDetails?.full_name}</p>
        </div>
        <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] max-h-[250px] w-[250px] ">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
            Email
          </h5>
          <p className="mb-4 ">{profileDetails?.email}</p>
        </div>
        <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] max-h-[250px] w-[250px] ">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
            Phone
          </h5>
          <p className="mb-4 ">{profileDetails?.phone}</p>
        </div>
        <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] max-h-[250px] w-[250px] ">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
            Date of Birth
          </h5>
          <p className="mb-4 ">{profileDetails?.date_of_birth}</p>
        </div>
        <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] max-h-[250px] w-[250px] ">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
            Indos Number
          </h5>
          <p className="mb-4 ">{profileDetails?.indos_number}</p>
        </div>
        <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] max-h-[250px] w-[250px] ">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
            Next Kin Name
          </h5>
          <p className="mb-4 ">{profileDetails?.name_of_next_of_kin}</p>
        </div>
        <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] max-h-[250px] w-[250px] ">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
            Next Kin Number
          </h5>
          <p className="mb-4 ">{profileDetails?.contact_of_next_of_kin}</p>
        </div>
        <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] max-h-[250px] w-[250px] ">
          <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 ">
            Passport Number
          </h5>
          <p className="mb-4 ">{profileDetails?.passport_number}</p>
        </div> */}
      </div>
    </div>
  );
};

export default MyComponent;
