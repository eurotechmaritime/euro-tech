import React, { useEffect, useState } from "react";
import { EN } from "../locale/EN";
import PageBanner from "../Components/PageBanner";
import FormInput from "../Components/FormInput";
import axios from "axios";
import { Endpoints } from "../constants/Endpoints";
import { Helmet } from "react-helmet-async";

const ContactUs = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await axios.get(`${Endpoints.CMS_URL}/footer`);
        setData(res.data.data[0]);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Maritime Career with Euro Tech Maritime Academy | Contact Us
        </title>
        <meta
          name="description"
          content="Discover boundless opportunities at Euro Tech Maritime Academy. Contact us now to chart your course to a successful maritime career. Join the leading academy today"
        />
        <link rel="canonical" href="https://eurotechmaritime.org/contact-us" />
      </Helmet>
      <div>
        <PageBanner
          imgUrl="/assets/About-bg-image.png"
          title={EN.contact_us_page.PAGE_TITLE}
        />

        <section>
          <div className="container mx-auto text-center my-14">
            <h1 className="text-[45px] font-bold ">
              {EN.contact_us_page.PAGE_TITLE}
            </h1>
            <div className="w-[70px] bg-[#1550a2] h-[5px] my-8 mx-auto"></div>
            <p className="max-w-[500px] mx-auto ">{data?.address}</p>
          </div>
        </section>
        <section className="grid grid-cols-1 relative md:h-[700px] w-[100%]">
          {/*<div className="max-w-[100vw] min-h-[400px] order-2 md:order-1" >*/}
          {/*  <GoogleMapReact*/}
          {/*      bootstrapURLKeys={{ key: "" }}*/}
          {/*      defaultCenter={defaultProps.center}*/}
          {/*      defaultZoom={defaultProps.zoom}*/}
          {/*  />*/}
          {/*</div>*/}
          <div className=" bg-opacity-80 p-14 flex justify-center items-center  bg-[#0b4493] order-1 md:order-2">
            <form className="w-[400px] text-white">
              <h1 className="text-[25px] font-semibold mb-10">
                {EN.contact_us_page.CONTACT_FORM_HEADER}
              </h1>
              <FormInput
                label={EN.contact_us_page.CONTACT_FORM_LABELS.name}
                name={EN.contact_us_page.CONTACT_FORM_LABELS.name}
              />
              <FormInput
                label={EN.contact_us_page.CONTACT_FORM_LABELS.email}
                name={EN.contact_us_page.CONTACT_FORM_LABELS.name}
              />
              <FormInput
                label={EN.contact_us_page.CONTACT_FORM_LABELS.mobile}
                name={EN.contact_us_page.CONTACT_FORM_LABELS.name}
              />
              <FormInput
                label={EN.contact_us_page.CONTACT_FORM_LABELS.message}
                name={EN.contact_us_page.CONTACT_FORM_LABELS.name}
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="border-white border-2 p-3 rounded-3xl mt-4"
                >
                  {EN.contact_us_page.CONTACT_US_BUTTON}
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContactUs;
