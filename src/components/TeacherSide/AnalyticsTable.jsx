import React from "react";

const AnalyticsTable = () => {
  return (
    <div className="overflow-x-auto no-scrollbar">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr className="text-black">
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider "
            >
              <div className="flex items-center gap-1 ">
              <span>Student</span>
              <svg
                width="11"
                height="5"
                viewBox="0 0 11 5"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.211914 5L5.21191 0L10.2119 5H0.211914Z"
                  fill="black"
                />
              </svg>
              </div>
              
            </th>
            <th
              scope="col"
              className=" px-6 py-3 text-left text-xs font-medium uppercase tracking-wider"
            >
              <div className="flex items-center gap-2">
                <span className="whitespace-nowrap">Page Views</span>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 320 512"
                  >
                    <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" fill="gray" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 320 512"
                  >
                    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" fill="gray"  />
                  </svg>
                </div>
              </div>
            </th>

            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
            >
              <div className="flex items-center gap-2">
                <span>
                Participations

                </span>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 320 512"
                  >
                    <path d="M182.6 137.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-9.2 9.2-11.9 22.9-6.9 34.9s16.6 19.8 29.6 19.8H288c12.9 0 24.6-7.8 29.6-19.8s2.2-25.7-6.9-34.9l-128-128z" fill="gray" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="1em"
                    viewBox="0 0 320 512"
                  >
                    <path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z"fill="gray"  />
                  </svg>
                </div>
              </div>
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
            >
              Submissions
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider whitespace-nowrap"
            >
              On Time
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
            >
              Late
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider"
            >
              Missing
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider whitespace-nowrap"
            >
              Current Score
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {/* Replace this with your actual data */}
          <tr>
            <td className="px-6 py-4 whitespace-nowrap flex items-center space-x-2 ">
              <div className="rounded-full w-7 h-7 bg-gray-300"></div>{" "}
              <span>John Doe</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">100</td>
            <td className="px-6 py-4 whitespace-nowrap">20</td>
            <td className="px-6 py-4 whitespace-nowrap">15</td>
            <td className="px-6 py-4 whitespace-nowrap">10</td>
            <td className="px-6 py-4 whitespace-nowrap">5</td>
            <td className="px-6 py-4 whitespace-nowrap">0</td>
            <td className="px-6 py-4 whitespace-nowrap">90</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap flex items-center space-x-2 ">
              <div className="rounded-full w-7 h-7 bg-gray-300"></div>{" "}
              <span>John Doe</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">100</td>
            <td className="px-6 py-4 whitespace-nowrap">20</td>
            <td className="px-6 py-4 whitespace-nowrap">15</td>
            <td className="px-6 py-4 whitespace-nowrap">10</td>
            <td className="px-6 py-4 whitespace-nowrap">5</td>
            <td className="px-6 py-4 whitespace-nowrap">0</td>
            <td className="px-6 py-4 whitespace-nowrap">90</td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap flex items-center space-x-2 ">
              <div className="rounded-full w-7 h-7 bg-gray-300"></div>{" "}
              <span>John Doe</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">100</td>
            <td className="px-6 py-4 whitespace-nowrap">20</td>
            <td className="px-6 py-4 whitespace-nowrap">15</td>
            <td className="px-6 py-4 whitespace-nowrap">10</td>
            <td className="px-6 py-4 whitespace-nowrap">5</td>
            <td className="px-6 py-4 whitespace-nowrap">0</td>
            <td className="px-6 py-4 whitespace-nowrap">90</td>
          </tr>
          {/* Add more rows for other students */}
        </tbody>
      </table>
    </div>
  );
};

export default AnalyticsTable;
