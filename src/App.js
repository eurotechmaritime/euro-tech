import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Homepage from "./Pages/Homepage";
import Layout from "./Components/Layout";
import { routes } from "./constants/routes";
import About from "./Pages/About";
import GoverningBoard from "./Pages/GoverningBoard";
import WhyEurotech from "./Pages/WhyEurotech";
import Awards from "./Pages/Awards";
import Placements from "./Pages/Placements";
import ContactUs from "./Pages/ContactUs";
import FromTheDesk from "./Pages/FromTheDesk";
import Faculty from "./Pages/Faculty";
import LoginPage from "./Pages/LoginPage";
import ForgotPassword from "./Pages/ForgotPassword";
import ResetPassword from "./Pages/ResetPassword";
import Gallery from "./Pages/Gallery";
import Courses from "./Pages/Courses";
import Mission from "./Pages/Mission";
import Alumni from "./Pages/Alumni";
import Registration from "./Pages/Registration";
import CourseBooking from "./Components/CourseBooking";
import CourseDetails from "./Pages/CourseDetails";
import React, { useEffect } from "react";
import CourseTerms from "./Pages/CourseTerms";
import AboutCourse from "./Pages/AboutCourse";
import ProfilePage from "./Pages/ProfilePage";
import MyCourses from "./Pages/MyCourses";
import MyDocuments from "./Pages/MyDocuments";
import Batches from "./Pages/Batches";
import CoursePayment from "./Pages/CoursePayment";
import ScrollToTop from "./Components/ScrollToTop";
import MyBatches from "./Components/MyBatches";
import MyPurchases from "./Pages/MyPurchases";
import MyProfilePage from "./Pages/MyProfilePage";
import TNC from "./Pages/TNC";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import Disclaimer from "./Pages/Disclaimer";
import ChatBotEuro from "./Components/ChatBotEuro";
import { useDispatch, useSelector } from "react-redux";
import { clearReduxInitial, updateCartCount } from "./redux/ActionCreator";
import Blog from "./Pages/Blog";

function App() {
  const dispatch = useDispatch();

  const profileDetails = useSelector(({ app }) => app.profileDetails);
  const timestamp = useSelector(({ app }) => app.timestamp);

  // function onIdle() {
  //   dispatch(clearReduxInitial());
  //   dispatch(updateCartCount(0));
  // }

  // useIdleTimer({ onIdle, timeout: 86400 * 1000 }); // 86400; 24hrs in seconds times 1000 milliseconds

  useEffect(() => {
    console.log(timestamp);
    let currentTime = new Date();
    currentTime = currentTime.getTime();

    const expiry = 86400 * 1000; // 86400; 24hrs in seconds times 1000 milliseconds

    if (currentTime - timestamp > expiry) {
      dispatch(clearReduxInitial());
      dispatch(updateCartCount(0));
    }
  });

  return (
    <ScrollToTop>
      <Routes>
        <Route element={<Layout />}>
          <Route path={routes.HOME} element={<Homepage />} />
          <Route path={routes.TNC} element={<TNC />} />
          <Route path={routes.PRIVACY_POLICY} element={<PrivacyPolicy />} />
          <Route path={routes.DISCLAIMER} element={<Disclaimer />} />
          <Route path={routes.ABOUT} element={<About />} />
          <Route path={routes.GOVERNING_BOARD} element={<GoverningBoard />} />
          <Route path={routes.WHY_EUROTECH} element={<WhyEurotech />} />
          <Route path={routes.AWARDS} element={<Awards />} />
          <Route path={routes.PLACEMENTS} element={<Placements />} />
          <Route path={routes.CONTACT_US} element={<ContactUs />} />
          <Route path={routes.FROM_DESK} element={<FromTheDesk />} />
          <Route path={routes.FACULTY} element={<Faculty />} />
          <Route path={routes.GALLERY} element={<Gallery />} />
          <Route path={routes.COURSES} element={<Courses />} />
          <Route path={routes.MISSION_VISION} element={<Mission />} />
          <Route path={routes.ALUMNI} element={<Alumni />} />
          <Route path={routes.REGISTER} element={<Registration />} />
          <Route path={routes.PROFILE} element={<ProfilePage />} />
          <Route
            path={`${routes.MY_COURSES}/:orderId?`}
            element={<MyCourses />}
          />
          <Route path={routes.MY_DOCUMENTS} element={<MyDocuments />} />
          <Route path={routes.BATCHES} element={<Batches />} />
          <Route path={routes.PAYMENTS} element={<CoursePayment />} />
          <Route path={routes.MY_PURCHASES} element={<MyPurchases />} />
          <Route path={routes.MY_BATCHES} element={<MyBatches />} />
          <Route path={routes.COURSE_BOOKING} element={<CourseBooking />} />
          <Route
            path={`${routes.COURSE_BOOKING}${routes.COURSE_DETAILS}`}
            element={<CourseDetails />}
          />
          <Route
            path={`${routes.COURSE_BOOKING}${routes.COURSE_TERMS}`}
            element={<CourseTerms />}
          />
          <Route path={`${routes.MY_PROFILE}`} element={<MyProfilePage />} />
          <Route
            path={`${routes.COURSE_BOOKING}/:slug`}
            element={<AboutCourse />}
          />
          <Route path={`${routes.BLOG}`} element={<Blog />} />
        </Route>
        <Route
          path={routes.LOGIN}
          element={
            profileDetails?.token ? (
              <Navigate to={routes.PROFILE} />
            ) : (
              <LoginPage />
            )
          }
        />
        <Route path={routes.FORGOT_PASSWORD} element={<ForgotPassword />} />
        <Route
          path={`${routes.RESET_PASSWORD}/:email/:password`}
          element={<ResetPassword />}
        />
        {/* Redirects */}
        <Route
          exact
          path="/courses/pre-sea-training-for-electro-technical-officer-eto/"
          element={
            <Navigate to="/course-booking/pre-sea-training-for-electro-technical-officer-(eto)-a1" />
          }
        />
        <Route
          path="/courses/orientation-courses-for-catering-personnel-occp/"
          element={
            <Navigate to="/course-booking/orientation-courses-for-catering-personnel-(occp)" />
          }
        />
        <Route
          path="/courses/general-purpose-rating-g-p-rating/"
          element={
            <Navigate to="/course-booking/about/53/general-purpose-rating-course" />
          }
        />
        <Route
          path="/courses/certificate-course-in-maritime-catering/"
          element={
            <Navigate to="/course-booking/about/54/certificate-course-for-maritime-catering" />
          }
        />
        <Route
          path="/btech/"
          element={
            <Navigate to="/course-booking/about/55/b-tech-in-marine-engineering" />
          }
        />
        {/* Redirects v2 */}
        <Route
          path="/courses/2nd-mate-function/"
          element={<Navigate to="/course-booking/about/12/2nd-mate-function" />}
        />
        <Route
          path="/courses/chief-mate-phase-i/"
          element={
            <Navigate to="/course-booking/about/13/chief-mate-phase-i" />
          }
        />
        <Route
          path="/courses/chief-mate-phase-ii/"
          element={
            <Navigate to="/course-booking/about/14/chief-mate-phase-ii" />
          }
        />
        <Route
          path="/courses/advanced-shipboard-management-asm/"
          element={
            <Navigate to="/course-booking/about/15/advanced-shipboard-management-(asm)" />
          }
        />
        <Route
          path="/courses/eto-bridging-course/"
          element={
            <Navigate to="/course-booking/about/16/eto-bridging-course" />
          }
        />
        <Route
          path="/courses/meo-class-ii-preparatory-course/"
          element={
            <Navigate to="/course-booking/about/17/meo-class-ii-preparatory-course" />
          }
        />
        <Route
          path="/courses/refresher-advanced-fire-fighting-aff-fpff-combined-course-part-b-practicals/"
          element={
            <Navigate to="/course-booking/about/18/refresher-–-advanced-fire-fighting-(aff-+fpff-combined-course)-part-b-(practicals)" />
          }
        />
        <Route
          path="/courses/refresher-proficiency-in-survival-craft-rescue-boats-rpscrb-rpst-combined-course-part-b-practicals/"
          element={
            <Navigate to="/course-booking/about/19/refresher-–-proficiency-in-survival-craft-&-rescue-boats-(rpscrb-+-rpst-combined-course)---part-b-(practicals)" />
          }
        />
        <Route
          path="/courses/refresher-medical-care-course-mcc/"
          element={
            <Navigate to="/course-booking/about/49/refresher-–-medical-care-course-(r-mcc)" />
          }
        />
        <Route
          path="/courses/medical-first-aid-mfa/"
          element={
            <Navigate to="/course-booking/about/52/refresher-medical-first-aid" />
          }
        />
        <Route
          path="/courses/refresher-advanced-fire-fighting-aff-fpff-combined-course-part-b-practicals/"
          element={
            <Navigate to="/course-booking/about/60/refresher-–-advanced-fire-fighting-(aff-+fpff-combined-course)-part-b-(practicals))" />
          }
        />
        <Route
          path="/courses/refresher-medical-first-aid-part-b-practicals"
          element={
            <Navigate to="/course-booking/about/61/refresher-medical-first-aid---part-b-(practicals)" />
          }
        />
        <Route
          path="/courses/refresher-medical-care-course-rmcc-part-b-practicals/"
          element={
            <Navigate to="/course-booking/about/62/refresher-–-medical-care-course-(rmcc)---part-b-(practicals)" />
          }
        />
        <Route
          path="/courses/refresher-proficiency-in-survival-craft-rescue-boats-rpscrb-rpst-combined-course-part-b-practicals/"
          element={
            <Navigate to="/course-booking/about/65/refresher-–-proficiency-in-survival-craft-&-rescue-boats-(rpscrb-+-rpst-combined-course)---part-b-(practicals)" />
          }
        />
        <Route
          path="/courses/stcw-safety-training-course/"
          element={
            <Navigate to="/course-booking/about/21/basic-stcw-safety-training-course-(bst-pst,pssr,-efa-&-fpff)" />
          }
        />
        <Route
          path="/courses/security-training-for-seafarers-with-designated-security-duties-stsdsd/"
          element={
            <Navigate to="/course-booking/about/22/security-training-for-seafarers-with-designated-security-duties-(stsdsd)" />
          }
        />
        <Route
          path="/courses/passenger-ship-familiarization-psf/"
          element={
            <Navigate to="/course-booking/about/25/passenger-ship-familiarization-(psf)-(crowd-management)" />
          }
        />
        <Route
          path="/courses/basic-training-for-oil-chemical-tanker-cargo-operations-otf-ctf/"
          element={
            <Navigate to="/course-booking/about/27/basic-training-for-oil-&-chemical-tanker-cargo-operations-(otf-+-ctf)" />
          }
        />
        <Route
          path="/courses/basic-stcw-safety-training-course-part-b-practicals/"
          element={
            <Navigate to="/course-booking/about/70/basic-stcw-safety-training-course--part-b-(practicals)" />
          }
        />
        <Route
          path="/courses/specialised-chemical-tanker-safety-course-chemco/"
          element={
            <Navigate to="/course-booking/about/28/advanced-training-for-chemical-tanker-cargo-operations-(chemco)" />
          }
        />
        <Route
          path="/courses/specialised-oil-tanker-safety-course-tasco-dvanced-training-for-oil-tankersafety-course-tasco/"
          element={
            <Navigate to="/course-booking/about/29/advanced-training-for-oil-tanker-cargo-operations-(tasco)" />
          }
        />
        <Route
          path="/courses/ship-security-officer-sso-2/"
          element={
            <Navigate to="/course-booking/about/31/ship-security-officer-(sso)" />
          }
        />
        <Route
          path="/courses/medical-care-course-mcc/"
          element={
            <Navigate to="/course-booking/about/38/medical-care-course-(mcc)" />
          }
        />
        <Route
          path="/courses/advanced-fire-fighting-aff-2-2/"
          element={
            <Navigate to="/course-booking/about/40/advanced-fire-fighting-(aff)" />
          }
        />
        <Route
          path="/courses/medical-first-aid-mfa-2/"
          element={
            <Navigate to="/course-booking/about/41/medical-first-aid-(mfa)" />
          }
        />
        <Route
          path="/courses/proficiency-in-survival-craft-rescue-boats-pscrb/"
          element={
            <Navigate to="/course-booking/about/42/proficiency-in-survival-craft-&-rescue-boats-(pscrb)" />
          }
        />
        <Route
          path="/courses/high-voltage-safety-switch-gear-course-management-level/"
          element={
            <Navigate to="/course-booking/about/45/high-voltage-management-level" />
          }
        />
        <Route
          path="/courses/high-voltage-safety-switch-gear-course-operational-level/"
          element={
            <Navigate to="/course-booking/about/51/high-voltage-operational-level" />
          }
        />
        <Route
          path="/courses/advanced-packages/"
          element={
            <Navigate to="/course-booking/about/56/advanced-packages(aff,mfa,pscrb)" />
          }
        />
        <Route
          path="courses/advanced-fire-fighting-aff-part-b-practicals/"
          element={
            <Navigate to="/course-booking/about/66/advanced-fire-fighting-(aff)--part-b-(practicals)" />
          }
        />
        <Route
          path="/courses/medical-first-aid-mfa-part-b-practicals/"
          element={
            <Navigate to="/course-booking/about/67/medical-first-aid-(mfa)---part-b-(practicals)" />
          }
        />
        <Route
          path="/courses/proficiency-in-survival-craft-rescue-boats-pscrb-part-b-practicals/"
          element={
            <Navigate to="/course-booking/about/68/proficiency-in-survival-craft-&-rescue-boats-(pscrb)-part-b-(-practicals)" />
          }
        />
        <Route
          path="/courses/medical-care-course-mcc-part-b-practicals/"
          element={
            <Navigate to="/course-booking/about/69/medical-care-course-(mcc)-part---b-(practicals)" />
          }
        />
        <Route
          path="/courses/global-maritime-distress-safety-system-gmdss/"
          element={
            <Navigate to="/course-booking/about/32/global-maritime-distress-&-safety-system-(gmdss)" />
          }
        />
        <Route
          path="/courses/radar-observer-simulator-course-rosc/"
          element={
            <Navigate to="/course-booking/about/33/radar-observer-simulator-course-(rosc)-and-automatic-radar-plotting-aids-(arpa)" />
          }
        />
        <Route
          path="/courses/electronic-chart-display-and-information-systems-ecdis/"
          element={
            <Navigate to="/course-booking/about/35/electronic-chart-display-and-information-systems-(ecdis)" />
          }
        />
        <Route
          path="/courses/ship-maneuvering-simulator-bridge-team-work-sms/"
          element={
            <Navigate to="/course-booking/about/36/ship-maneuvering-simulator-&-bridge-team-work-(sms)" />
          }
        />
        <Route
          path="/courses/radararpa-navigation-simulator-ransco/"
          element={
            <Navigate to="/course-booking/about/37/radar-arpa-&-navigation-simulator-(ransco)" />
          }
        />
        <Route
          path="/courses/liquid-cargo-handling-simulator-oil-management-level/"
          element={
            <Navigate to="/course-booking/about/39/liquid-cargo-handling-simulator-(lchs)" />
          }
        />
        <Route
          path="/courses/engine-room-simulator-course-operational-level/"
          element={
            <Navigate to="/course-booking/about/43/engine-room-simulator-course-(operational-level)-ers-op" />
          }
        />
        <Route
          path="/courses/engine-room-simulator-course-management-level/"
          element={
            <Navigate to="/course-booking/about/44/engine-room-simulator-course-(management-level)-ers-ml" />
          }
        />
        <Route
          path="/courses/fire-prevention-fire-fighting-fpff-2/"
          element={
            <Navigate to="/course-booking/about/46/refresher-–-fire-prevention-&-fire-fighting-(r-fp&ff)" />
          }
        />
        <Route
          path="/courses/personal-survival-techniques-pst-2/"
          element={
            <Navigate to="/course-booking/about/59/refresher-–-personal-survival-techniques-(pst)" />
          }
        />
        <Route
          path="/courses/refresher-personal-survival-techniques-rpst-part-b-practicals/"
          element={
            <Navigate to="/course-booking/about/63/refresher-–-personal-survival-techniques-(rpst)---part-b-(-practicals)" />
          }
        />
        <Route
          path="/courses/refresher-fire-prevention-fire-fighting-rfpff-part-b-practicals/"
          element={
            <Navigate to="/course-booking/about/64/refresher-–-fire-prevention-&-fire-fighting-(rfp&ff)---part-b-(-practicals)" />
          }
        />
      </Routes>
      <ChatBotEuro />
    </ScrollToTop>
  );
}

export default App;
