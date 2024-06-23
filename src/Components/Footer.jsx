import { EN } from "../locale/EN";
import {
  FaEnvelope,
  FaFacebookSquare,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { routes } from "../constants/routes";
import { useEffect, useState } from "react";
import axios from "axios";
import { Endpoints } from "../constants/Endpoints";

const Footer = () => {
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
    <footer className="text-white">
      <div>
        <div className="bg-[#022236] p-10 text-[12px] md:text-[16px]">
          <div className="grid grid-cols-12 gap-4 md:gap-8 container mx-auto max-w-[80vw] ">
            <div className=" max-w-[85vw] col-span-12 md:col-span-6 flex flex-col gap-5">
              <div>
                <img src="/assets/brand-logo.png" alt="brand-logo" />
              </div>
              <p className="text-[12px] md:text-[16px]">
                {data?.footer_description}
              </p>
              <div>
                <div className="flex items-center mb-3">
                  <span className="pr-2">
                    <FaEnvelope color="#D8272F" />
                  </span>
                  <a href={`mailto:${data?.email}`}>{data?.email}</a>
                </div>
                <div className="flex items-center ">
                  <span className="pr-2">
                    <FaPhoneAlt color="#D8272F" />
                  </span>
                  <a href={`tel:${data?.contact}`}>{data?.contact}</a>
                </div>
              </div>
            </div>
            <div className="col-span-6 md:col-span-3 flex flex-col gap-5">
              <h5 className="font-bold">{EN.footer.QUICK_LINKS}</h5>
              <ul className="flex flex-col gap-1">
                <li>
                  <Link to={routes.GALLERY}>{EN.links.NEWS}</Link>
                </li>
                <li>
                  <Link to={routes.ABOUT}>{EN.links.ABOUT}</Link>
                </li>
                <li>
                  <Link to={routes.GOVERNING_BOARD}>
                    {EN.links.GOVERNING_BODY}
                  </Link>
                </li>
                <li>
                  <Link to={routes.ANTI_RAGGING}>{EN.links.ANTI_RAGGING_POLICY}</Link>
                </li>
                <li>
                  <Link to={routes.GRIVERANCE_FORM}>{EN.links.GRIVERANCE_FORM}</Link>
                </li>
                <li>
                  <Link to={routes.COURSES}>{EN.links.COURSES}</Link>
                </li>
                <li>
                  <Link to={routes.WHY_EUROTECH}>{EN.links.FACILITIES}</Link>
                </li>
                <li>
                  <Link to={routes.REGISTER}>{EN.links.WORK_WITH_US}</Link>
                </li>
                <li>
                  <Link to={routes.CONTACT_US}>{EN.links.CONTACT_US}</Link>
                </li>
              </ul>
            </div>
            <div className="col-span-5 md:col-span-3 flex flex-col gap-5 ">
              <h5 className="font-bold">{EN.CONTACT_US}</h5>
              <p className="text-[12px] md:text-[16px] leading-normal">
                {data?.address}
              </p>
              <p className="text-[12px] md:text-[16px] leading-normal">
                {data?.phone_numbers}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-[#09344D]  p-8">
          <div className="flex md:flex-row flex-col md:justify-between justify-center container mx-auto">
            <div className="flex md:flex-row flex-col gap-3 text-center md:text-start text-[12px] md:text-[16px]">
              <span className="pr-3  md:border-r-2 border-solid border-white">
                <Link to="/">{EN.footer.COPYRIGHT}</Link>
              </span>
              <span className="pr-3 md:border-r-2 border-solid border-white">
                <Link to={routes.TNC}>{EN.footer.TERMS_CONDITIONS}</Link>
              </span>
              <span className="pr-3 md:border-r-2 border-solid border-white">
                <Link to={routes.PRIVACY_POLICY}>
                  {EN.footer.PRIVACY_POLICY}
                </Link>
              </span>
              <span className="pr-3 md:border-r-2 border-solid border-white">
                <Link to={routes.DISCLAIMER}>{EN.footer.DISCLAIMER}</Link>
              </span>
              <span className="">
                <Link to={routes.BLOG}>Blog</Link>
              </span>
            </div>
            <div className="flex gap-6 md:justify-end justify-center mt-6 md:mt-0">
              <a href={data?.linkedin_url}>
                <FaLinkedinIn size={22} />
              </a>
              <a href={data?.facebook_url}>
                <FaFacebookSquare size={22} />
              </a>
              <a href={data?.twitter_url}>
                <FaTwitter size={22} />
              </a>
              <a href={data?.instagram_url}>
                <FaInstagram size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
