import React from "react";
import PageBanner from "../Components/PageBanner";
import { EN } from "../locale/EN";
import {
  fullTimePermenantFaculty,
  permenantInstructor,
} from "../locale/facultyList";
import { Helmet } from "react-helmet-async";

const Faculty = () => {
  return (
    <>
      <Helmet>
        <title>
          Unveil the Experts: Meet Our Exceptional Faculty | EuroTech Maritime
        </title>
        <meta
          name="description"
          content="Discover our world-class faculty at EuroTech Maritime, the guiding stars behind our maritime excellence. Explore their expertise, dedication, and passion for shaping the future of the industry. Join us today!"
        />
        <link rel="canonical" href="https://eurotechmaritime.org/faculty" />
      </Helmet>
      <div>
        <PageBanner
          imgUrl="/assets/about-banner.png"
          title={EN.faculty.PAGE_TITLE}
        />
        <section className="container mx-auto font-bold">
          <div className="max-w-[100vw] overflow-x-scroll md:overflow-hidden pb-8">
            <h1 className="text-[#03014C] text-[36px] font-bold my-6">
              Principal (as a Faculty)
            </h1>
            <table className="table-auto w-[100%] text-left">
              <thead className="bg-[#eff5ff] p-5 shadow">
                <tr className="h-[5rem]">
                  <th>SL NO</th>
                  <th>NAME</th>
                  <th>DESIGNATION</th>
                </tr>
              </thead>
              <tbody>
                <tr className="h-[3rem]">
                  <td className="text-center">1</td>
                  <td>BIJU VARGHESE THEETHAYI</td>
                  <td>Principal ( Captain )</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="max-w-[100vw] overflow-x-scroll md:overflow-hidden pb-8">
            <h1 className="text-[#03014C] text-[36px] font-bold my-6">
              Full time Permanent Faculty
            </h1>
            <table className="table-auto w-[100%] text-left">
              <thead className="bg-[#eff5ff] p-5 shadow">
                <tr className="h-[5rem]">
                  <th>SL NO</th>
                  <th>NAME</th>
                  <th>DESIGNATION</th>
                </tr>
              </thead>
              <tbody>
                {fullTimePermenantFaculty.map((item, index) => (
                  <tr className="h-[3rem]">
                    <td className="text-center">{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.designation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="max-w-[100vw] overflow-x-scroll md:overflow-hidden pb-8">
            <h1 className="text-[#03014C] text-[36px] font-bold my-6">
              Permenant Instructors
            </h1>
            <table className="table-auto w-[100%] text-left">
              <thead className="bg-[#eff5ff] p-5 shadow">
                <tr className="h-[5rem]">
                  <th>SL NO</th>
                  <th>NAME</th>
                  <th>DESIGNATION</th>
                </tr>
              </thead>
              <tbody>
                {permenantInstructor.map((item, index) => (
                  <tr className="h-[3rem]">
                    <td className="text-center">{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.designation}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </div>
    </>
  );
};

export default Faculty;
