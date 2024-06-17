import React, { useEffect, useState } from "react";
import PageBanner from "../Components/PageBanner";
import ProfilePageHeading from "../Components/ProfilePageHeading";
import DocumentFileCard from "../Components/DocumentFileCard";
import axios from "axios";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet-async";

const MyDocuments = () => {
  const profileDetails = useSelector(({ app }) => app.profileDetails);
  const [documents, setDocuments] = useState([]);
  useEffect(() => {
    (async () => {
      const res = await axios.get(
        "https://api.eurotechmaritime.org/documents/fetch/uploaded",
        {
          headers: {
            Authorization: `Bearer ${profileDetails.token}`,
          },
        }
      );
      setDocuments(res.data.data);
    })();
  }, []);
  return (
    <>
      <Helmet>
        <title>My Documents</title>
        <link
          rel="canonical"
          href="https://eurotechmaritime.org/my-documents"
        />
      </Helmet>
      <div>
        <PageBanner
          imgUrl="/assets/Governing-board-banner.png"
          title="My Documents"
        />
        <div className="container mx-auto">
          <ProfilePageHeading text="My Documents" />
          <div className="p-3">
            <h3 className="text-[#03014C] text-[24px] font-bold">
              Document Upload (Optional)
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 mb-20">
              {documents.map((item) => (
                <DocumentFileCard
                  key={item.id}
                  documentName={item.document_name}
                  link={item.document_link}
                />
              ))}
            </div>
          </div>
          {/*<div className="flex container mx-auto my-10">*/}
          {/*  <span className="m-3">*/}
          {/*    <input type="checkbox" className="h-[25px] w-[25px]" required />*/}
          {/*  </span>*/}
          {/*  <p className="text-[12px] font-semibold">*/}
          {/*    {EN.candidate_register.AGREEMENT_TEXT}*/}
          {/*  </p>*/}
          {/*</div>*/}
        </div>
      </div>
    </>
  );
};

export default MyDocuments;
