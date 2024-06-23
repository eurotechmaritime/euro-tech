import React, { useState } from "react";
import PageBanner from "../Components/PageBanner";

const GrievanceForm = () => {
  const [isMessageEnabled, setMessageEnabled] = useState(false);

  return (
    <div>
      <PageBanner
        imgUrl="/assets/about-banner.png"
        title="GRIEVANCE REDRESSAL MECHANISM OF EURO TECH MARITIME ACADEMY"
      />
      <div className="container mx-4 lg:mx-8 my-8 flex flex-col lg:flex-row gap-6 lg:gap-10">
        <div className="form-container w-full lg:w-1/2 bg-gray-100 p-6 rounded-lg shadow-lg">
          <h1 className="pb-4 text-center text-xl font-bold">Contact Us</h1>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="styled-form flex flex-col"
          >
            {!isMessageEnabled && (
              <>
                <div className="form-group mb-4">
                  <label
                    htmlFor="name"
                    className="block font-bold text-gray-600 mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                  />
                </div>
                <div className="form-group mb-4">
                  <label
                    htmlFor="contactNo"
                    className="block font-bold text-gray-600 mb-2"
                  >
                    Contact No
                  </label>
                  <input
                    type="number"
                    id="contactNo"
                    name="contactNo"
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                  />
                </div>
                <div className="form-group mb-4">
                  <label
                    htmlFor="email"
                    className="block font-bold text-gray-600 mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
                  />
                </div>
              </>
            )}
            <div className="form-group mb-4">
              <label
                htmlFor="grievance"
                className="block font-bold text-gray-600 mb-2"
              >
                Register Your Grievance
              </label>
              <input
                type="text"
                id="grievance"
                name="grievance"
                required
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:border-green-500"
              />
            </div>
            <div className="form-group toggle-group flex items-center justify-between mb-4">
              <label htmlFor="toggle" className="font-bold text-gray-600">
                Click to {isMessageEnabled ? "Disable" : "Enable"} Grievance
              </label>
              <div className="relative inline-block w-14 h-8">
                <input
                  type="checkbox"
                  id="toggle"
                  checked={isMessageEnabled}
                  onChange={() => setMessageEnabled(!isMessageEnabled)}
                  className="opacity-0 w-0 h-0"
                />
                <span
                  className={`absolute cursor-pointer top-0 left-0 right-0 bottom-0 bg-gray-300 rounded-full transition duration-300 ${
                    isMessageEnabled ? "bg-green-500" : ""
                  }`}
                ></span>
                <span
                  className={`absolute content-[''] h-6 w-6 left-1 bottom-1 bg-white rounded-full transition duration-300 transform ${
                    isMessageEnabled ? "translate-x-6" : ""
                  }`}
                ></span>
              </div>
            </div>
            <button className="btn bg-blue-500 text-white py-2 px-4 rounded-md font-bold italic hover:bg-blue-600 transition duration-300">
              Submit
            </button>
          </form>
        </div>
        <div className="flex-1 p-4 lg:p-6">
          <h1 className="text-2xl pb-4 font-bold italic">Note</h1>
          <ul className="flex flex-col gap-4">
            <li>
              <b>IVRS number :</b> 8929305273
            </li>
            <li>
              <b>Select :</b> Option 5
            </li>
            <li>
              <b>Email :</b> grievance@eurotechmaritime.org
            </li>
            <li>Suggestion Box placed at Main Block and K-Block and Hostel</li>
            <li>
              Students Grievance Redressal Committee (SGRC) to address the
              grievances of students through the Website :{" "}
              <u>
                <b>www.eurotechmaritime.org</b>
              </u>
            </li>
          </ul>
        </div>
      </div>
      <div className="c2 my-8 mx-4 lg:mx-8">
        <h1 className="text-center text-xl font-bold mb-4">
          STUDENTS GRIEVANCE REDRESSAL COMMITTEE
        </h1>
        <p className="px-4 mb-4">
          A Students Grievance Redressal Committee has been formed in this
          Academy comprises of following members to attend grievance sent
          through this web site :
        </p>
        <div className="table-container w-full lg:w-4/5 mx-auto bg-gray-100 p-6 rounded-lg shadow-lg">
          <table className="styled-table w-full border-collapse">
            <thead className="bg-green-500 text-white">
              <tr>
                <th className="p-3">S.No</th>
                <th className="p-3">Name</th>
                <th className="p-3">Designation</th>
                <th className="p-3">Email-id</th>
              </tr>
            </thead>
            <tbody>
              <tr className="bg-white hover:bg-gray-100">
                <td className="p-3 border-b">1</td>
                <td className="p-3 border-b">CE Johns Kurain</td>
                <td className="p-3 border-b">Chairman</td>
                <td className="p-3 border-b"></td>
              </tr>
              <tr className="bg-gray-100 hover:bg-gray-200">
                <td className="p-3 border-b">2</td>
                <td className="p-3 border-b">Mr. Sathees G</td>
                <td className="p-3 border-b">Member</td>
                <td className="p-3 border-b"></td>
              </tr>
              <tr className="bg-white hover:bg-gray-100">
                <td className="p-3 border-b">3</td>
                <td className="p-3 border-b">Ms. Priyanka Reghunathaman</td>
                <td className="p-3 border-b">Member</td>
                <td className="p-3 border-b">To:</td>
              </tr>
              <tr className="bg-gray-100 hover:bg-gray-200">
                <td className="p-3 border-b">4</td>
                <td className="p-3 border-b">Ms. Selin Thomas</td>
                <td className="p-3 border-b">Member</td>
                <td className="p-3 border-b">
                  <a href="mailto:grievance@eurotechmaritime.org">
                    grievance@eurotechmaritime.org
                  </a>
                </td>
              </tr>
              <tr className="bg-white hover:bg-gray-100">
                <td className="p-3 border-b">5</td>
                <td className="p-3 border-b">
                  Mr. Girish Chandra Ramachandran
                </td>
                <td className="p-3 border-b">Member</td>
                <td className="p-3 border-b"></td>
              </tr>
              <tr className="bg-gray-100 hover:bg-gray-200">
                <td className="p-3">6</td>
                <td className="p-3">Mr. Edwin Evanistus</td>
                <td className="p-3"></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="mt-8">
          <h1 className="pb-4 text-lg font-bold">Objectives:</h1>
          <ul className="flex flex-col gap-4 px-4">
            <li>
              (a) Upholding the dignity of the Academy by ensuring a
              trouble-free atmosphere in the Academy through promoting cordial
              student-student, student-faculty/instructor, and student-staff
              relationships.
            </li>
            <li>
              (b) A suggestion/complaint boxes are placed at various locations,
              in which the students, who wish to remain anonymous, may drop in
              their grievances and their suggestions for improving the
              academics/administration in the Academy.
            </li>
            <li>
              (c) Ragging, in any form, is strictly prohibited both inside and
              outside the Academy. Any violation of ragging or disciplinary
              rules should be urgently brought to the notice of the Principal.
            </li>
            <li>
              (d) Complaints regarding harassment of women will be handled as
              per government guidelines by the Students Grievance Complaint
              Committee.
            </li>
          </ul>
        </div>
      </div>
      <div className="c3 my-8 mx-4 lg:mx-8">
        <h1 className="underline font-bold text-xl">PROCESSING OF GRIEVANCE</h1>
        <ul className="flex flex-col gap-4 px-4 mt-4">
          <li>
            (a) The registered grievance will be submitted to the SGRC within 15
            working days.
          </li>
          <li>
            (b) The Chairman of the SGRC will convene a meeting of SGRC on
            receipt of the grievance. The quorum for the meeting including the
            Chairperson, but excluding the special invitee, shall be THREE.
          </li>
          <li>(c) The SGRC shall follow principles of natural justice.</li>
          <li>
            (d) The SGRC shall send its report with recommendations, if any, to
            the Top Management with a copy to the aggrieved student.
          </li>
          <li>
            (e) Final decision will be taken by the Top Management of Euro Tech
            Maritime Academy and the decision will be communicated to the
            aggrieved student by email.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GrievanceForm;
