import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { routes } from "../constants/routes";
import { useSelector } from "react-redux";
import { SlUser } from "react-icons/sl";
import { AiOutlineMenu } from "react-icons/ai";
import { BsCart3 } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Header = () => {
  const [stickyClass, setStickyClass] = useState("bg-transparent");
  const [aboutDropdown, setAboutDropdown] = useState(false);
  const profileDetails = useSelector(({ app }) => app.profileDetails);
  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);

    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, []);

  const navigate = useNavigate();
  const [showDrawer, setShowDrawer] = useState(false);
  const [mobileExpandMenu, setMobileExpandMenu] = useState(false);
  const cartCount = useSelector(({ app }) => app.cartCount);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 150
        ? setStickyClass("bg-blue-600  py-3 ")
        : setStickyClass("bg-transparent ");
    }
  };
  return (
    <header
      className={`p-2 px-3 lg:p-5 lg:px-6 fixed w-screen text-white ${stickyClass} z-10`}
    >
      <div className="container mx-auto flex w-100 justify-between items-center">
        <Link to="/" className="grow md:grow-0 mr-4">
          <img
            src="/assets/brand-logo.png"
            className="max-h-[50px] md:max-h-full"
            alt="brand-logo"
          />
        </Link>
        <div className="flex md:hidden h-[1.5rem] w-[1.5rem]">
          <Link
            to={routes.COURSE_BOOKING + routes.COURSE_DETAILS}
            className="relative"
          >
            {/* <img src="/assets/selected-courses-icon.png" alt="selected-courses" className="invert max-h-[35px] md:max-h-full" /> */}
            <BsCart3 size={23} />
            {cartCount > 0 && (
              <div className="bg-[#D8272F] h-5 w-5 absolute -top-3 -left-3 rounded-full text-[85%] text-center">
                {cartCount}
              </div>
            )}
          </Link>
        </div>
        <div className="flex md:hidden ml-7 ">
          <AiOutlineMenu size={26} onClick={() => setShowDrawer(!showDrawer)} />
        </div>
        <div className="gap-2 lg:gap-5 md:flex hidden ">
          <ul className="flex items-center gap-5 ">
            <li>
              <Link to={routes.HOME}>Home</Link>
            </li>
            <li
              className="relative"
              onMouseEnter={() => setAboutDropdown(true)}
              onMouseLeave={() => setAboutDropdown(false)}
            >
              <Link to={routes.ABOUT}>About</Link>
              {aboutDropdown && (
                <div className="absolute top-6 bg-white text-black w-[180px]">
                  <ul className="[&>li]:px-3 [&>li]:py-2 [&>li]:font-semibold [&>li]:text-[14px] ">
                    <li className="hover:bg-blue-200">
                      <Link to={routes.ABOUT}>About Us</Link>
                    </li>
                    <li className="hover:bg-blue-200">
                      <Link to={routes.GOVERNING_BOARD}>Governing Body</Link>
                    </li>
                    <li className="hover:bg-blue-200">
                      <Link to={routes.MISSION_VISION}>Mission & vision</Link>
                    </li>
                    <li className="hover:bg-blue-200">
                      <Link to={routes.WHY_EUROTECH}>Why Euro Tech?</Link>
                    </li>
                    <li className="hover:bg-blue-200">
                      <Link to={routes.AWARDS}>Awards</Link>
                    </li>
                    <li className="hover:bg-blue-200">
                      <Link to={routes.ABOUT}>Campus</Link>
                    </li>
                    <li className="hover:bg-blue-200">
                      <Link to={routes.FACULTY}>Faculty</Link>
                    </li>
                    <li className="hover:bg-blue-200">
                      <Link to={routes.FROM_DESK}>Principal message</Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link to={routes.COURSES}>Courses</Link>
            </li>
            <li>
              <Link to={routes.CONTACT_US}>Contact Us</Link>
            </li>
          </ul>
          <ul className="flex items-center gap-5 pl-4 border border-y-0 border-r-0 border-l-zinc-500 ">
            <li>
              {profileDetails?.full_name ? (
                <Link
                  className="flex gap-2 items-center font-semibold"
                  to={routes.PROFILE}
                >
                  <SlUser />
                  {profileDetails?.full_name}
                </Link>
              ) : (
                <Link to={routes.LOGIN} className="flex gap-2 items-center">
                  <SlUser />
                  Student Login
                </Link>
              )}
            </li>
            <li>Examination</li>
          </ul>
          <div className="flex items-center">
            <div className="flex-grow relative w-[1.5rem] h-[1.5rem]">
              <Link to={routes.COURSE_BOOKING + routes.COURSE_DETAILS}>
                {/* <img src="/assets/selected-courses-icon.png" alt="selected-courses" className="invert max-h-[50%] md:max-h-full" /> */}
                <BsCart3 size={24} />
                {cartCount > 0 && (
                  <div className="bg-[#D8272F] absolute -top-2 -left-2 rounded-full lg:h-5 w-5 text-[85%] text-center">
                    {cartCount}
                  </div>
                )}
              </Link>
            </div>
            <button
              onClick={() => navigate(routes.COURSE_BOOKING)}
              className="bg-[#D8272F] p-3 text-white ml-3"
            >
              Course Booking
            </button>
          </div>
        </div>
      </div>
      <div
        className={`${
          showDrawer ? "fixed" : "hidden"
        } h-screen overflow-y-scroll top-0 right-0 w-[60vw] bg-white text-black pb-10`}
      >
        <div className="relative" style={{ zIndex: 999 }}>
          <div
            className="flex justify-end p-3 "
            onClick={() => setShowDrawer(!showDrawer)}
          >
            <IoMdClose size={26} />
          </div>
          <ul className="flex flex-col items-center gap-5 my-10 ">
            <li>
              <Link to={routes.HOME} onClick={() => setShowDrawer(false)}>
                Home
              </Link>
            </li>
            <li
              className="relative text-center "
              onClick={() => setMobileExpandMenu(!mobileExpandMenu)}
            >
              <div className="flex gap-4 items-center justify-between w-[50vw]">
                <span /> <span className="ml-3">About</span>{" "}
                {mobileExpandMenu ? <FaChevronUp /> : <FaChevronDown />}
              </div>
              {mobileExpandMenu && (
                <ul className="[&>li]:px-3 [&>li]:py-2 [&>li]:font-semibold [&>li]:text-[14px] ">
                  <li className="hover:bg-blue-200">
                    <Link
                      to={routes.ABOUT}
                      onClick={() => setShowDrawer(false)}
                    >
                      About Us
                    </Link>
                  </li>
                  <li className="hover:bg-blue-200">
                    <Link
                      to={routes.GOVERNING_BOARD}
                      onClick={() => setShowDrawer(false)}
                    >
                      Governing Board
                    </Link>
                  </li>
                  <li className="hover:bg-blue-200">
                    <Link
                      to={routes.MISSION_VISION}
                      onClick={() => setShowDrawer(false)}
                    >
                      Mission & vision
                    </Link>
                  </li>
                  <li className="hover:bg-blue-200">
                    <Link
                      to={routes.WHY_EUROTECH}
                      onClick={() => setShowDrawer(false)}
                    >
                      Why Euro Tech?
                    </Link>
                  </li>
                  <li className="hover:bg-blue-200">
                    <Link
                      to={routes.AWARDS}
                      onClick={() => setShowDrawer(false)}
                    >
                      Awards
                    </Link>
                  </li>
                  <li className="hover:bg-blue-200">
                    <Link
                      to={routes.ABOUT}
                      onClick={() => setShowDrawer(false)}
                    >
                      Campus
                    </Link>
                  </li>
                  <li className="hover:bg-blue-200">
                    <Link
                      to={routes.FACULTY}
                      onClick={() => setShowDrawer(false)}
                    >
                      Faculty
                    </Link>
                  </li>
                  <li className="hover:bg-blue-200">
                    <Link
                      to={routes.FROM_DESK}
                      onClick={() => setShowDrawer(false)}
                    >
                      Principal message
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <Link to={routes.COURSES} onClick={() => setShowDrawer(false)}>
                Courses
              </Link>
            </li>
            <li>
              <Link to={routes.CONTACT_US} onClick={() => setShowDrawer(false)}>
                Contact Us
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col items-center gap-5 pt-4 border border-b-0 border-r-0 border-t-zinc-500 ">
            <li>
              {profileDetails?.full_name ? (
                <Link
                  className="flex gap-2 items-center font-semibold"
                  to={routes.PROFILE}
                  onClick={() => setShowDrawer(false)}
                >
                  <SlUser />
                  {profileDetails?.full_name}
                </Link>
              ) : (
                <Link
                  to={routes.LOGIN}
                  className="flex gap-2 items-center"
                  onClick={() => setShowDrawer(false)}
                >
                  <SlUser />
                  Student Login
                </Link>
              )}
            </li>
            <li>Examination</li>
          </ul>
          <div className="flex flex-col items-center mt-8">
            <button
              onClick={() => {
                navigate(routes.COURSE_BOOKING);
                setShowDrawer(false);
              }}
              className="bg-[#D8272F] p-3 text-white"
            >
              Course Booking
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
