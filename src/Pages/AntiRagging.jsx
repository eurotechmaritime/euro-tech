import React from "react";
import { EN } from "../locale/EN";
import PageBanner from "../Components/PageBanner";
import { routes } from "../constants/routes";
import { Helmet } from "react-helmet-async";

const AntiRagging = () => {
  return (
    <>
      <Helmet>
        <title>Explore Euro Tech Maritime Academy | Anti Ragging Policy</title>
        <meta
          name="description"
          content="Eurotech Maritime Academy's Anti Ragging Policy and Reporting"
        />
        <link
          rel="canonical"
          href={"https://eurotechmaritime.org" + routes.ANTI_RAGGING}
        />
      </Helmet>
      <div>
        <PageBanner
          imgUrl="/assets/about-banner.png"
          title={EN.anti_ragging.PAGE_TITLE}
        />
      </div>
      <div className="p-4 sm:p-6">
        <h1 className="text-2xl font-bold text-blue-900 my-4">
          Anti Ragging Committee of Euro Tech Maritime Academy
        </h1>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 mb-6 sm:table-auto">
            <thead className="bg-gray-50">
              <tr className="text-left">
                <th className="px-3 sm:px-6 py-2 text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-3 sm:px-6 py-2 text-xs sm:text-sm font-medium text-gray-500 uppercase tracking-wider">
                  Position
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              <tr>
                <td className="px-3 sm:px-6 py-3 whitespace-nowrap">
                  Capt. Biju T. Varghese
                </td>
                <td className="px-3 sm:px-6 py-3 whitespace-nowrap">
                  Principal
                </td>
              </tr>
              <tr>
                <td className="px-3 sm:px-6 py-3 whitespace-nowrap">
                  Mr. Joji Babu
                </td>
                <td className="px-3 sm:px-6 py-3 whitespace-nowrap">
                  HR & Admin Head
                </td>
              </tr>
              <tr>
                <td className="px-3 sm:px-6 py-3 whitespace-nowrap">
                  Mr. Sabu Joseph
                </td>
                <td className="px-3 sm:px-6 py-3 whitespace-nowrap">
                  Campus Manager
                </td>
              </tr>
              <tr>
                <td className="px-3 sm:px-6 py-3 whitespace-nowrap">
                  Mr. Harikumar S.V
                </td>
                <td className="px-3 sm:px-6 py-3 whitespace-nowrap">
                  Officer In Charge
                </td>
              </tr>
              <tr>
                <td className="px-3 sm:px-6 py-3 whitespace-nowrap">
                  Duty HCO
                </td>
                <td className="px-3 sm:px-6 py-3 whitespace-nowrap">
                  Duty HCO
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h2 className="text-xl font-semibold text-blue-900 mb-2">
          Details of NODAL OFFICER for Anti Ragging Actions:
        </h2>
        <p className="mb-4">
          <strong>Name:</strong> Mr. Joji Babu
        </p>
        <p className="mb-4">
          <strong>Contact No:</strong> 9061241888
        </p>
        <p className="mb-4">
          <strong>Email ID:</strong>{" "}
          <a href="mailto:hr@eurotechmaritime.org" className="text-blue-600">
            hr@eurotechmaritime.org
          </a>
        </p>
        <p className="mb-4">
          <strong>Link of UGC Anti-ragging website portal:</strong>{" "}
          <a
            href="http://www.antiragging.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600"
          >
            www.antiragging.in
          </a>
        </p>

        <h2 className="text-xl font-semibold text-blue-900 mt-6 mb-2">Note:</h2>
        <ol className="list-decimal list-inside mb-6">
          <li className="mb-4">
            All students and parents are requested to log in to the above
            website link and submit an affidavit available in it.
          </li>
          <li className="mb-4">
            After filling the online Anti-Ragging affidavit by the students with
            contact details of students and their parents on www.antiragging.in
            website successfully, students can download the “Student’s Anti
            Ragging undertaking and Parents Anti Ragging undertaking from the
            website.
          </li>
          <li className="mb-4">
            Then the student will receive an email with his/her registration
            number from the above website.
          </li>
          <li className="mb-4">
            The students are required to forward their registration number to
            the above Nodal Officer of Euro Tech Maritime Academy, Kochi,
            immediately on receipt of their Registration Number along with the
            downloaded Affidavit Submitted by the student and his/her parent.
          </li>
        </ol>

        <h2 className="text-xl font-semibold text-red-700">WARNING</h2>
        <p className="text-red-700">
          “ALL SORTS OF RAGGING WITHIN THE CAMPUS OF EURO TECH MARITIME ACADEMY
          IS PROHIBITED AND ANY VIOLATORS WILL BE DEALT WITH AS PER THE UGC/IMU
          GUIDELINES”
        </p>
      </div>
    </>
  );
};

export default AntiRagging;
