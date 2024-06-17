import React from "react";
import PageBanner from "../Components/PageBanner";
import ProfileLinks from "../Components/ProfileLinks";
import { routes } from "../constants/routes";
import { useDispatch, useSelector } from "react-redux";
import { clearReduxInitial } from "../redux/ActionCreator";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const ProfilePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const logout = () => {
    dispatch(clearReduxInitial());
    navigate(routes.HOME);
  };
  const profileDetails = useSelector(({ app }) => app.profileDetails);
  return (
    <>
      <Helmet>
        <title>Profile</title>
        <link rel="canonical" href="https://eurotechmaritime.org/profile" />
      </Helmet>
      <div>
        <PageBanner
          imgUrl="/assets/Governing-board-banner.png"
          title={`${profileDetails?.full_name}`}
          phone={profileDetails?.phone}
        />
        <section className="container mx-auto px-10">
          <ProfileLinks text="My Courses" link={routes.MY_COURSES} />
          <ProfileLinks text="My Documents" link={routes.MY_DOCUMENTS} />
          <ProfileLinks text="My Batches" link={routes.MY_BATCHES} />
          <ProfileLinks text="Payments" link={routes.MY_PURCHASES} />
          <ProfileLinks text="My Profile" link={routes.MY_PROFILE} />
          <ProfileLinks text="Notifications" />
          <ProfileLinks text="Logout" button onClick={logout} />
        </section>
      </div>
    </>
  );
};

export default ProfilePage;
