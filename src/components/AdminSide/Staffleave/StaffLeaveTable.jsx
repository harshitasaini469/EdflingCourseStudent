import React, { useState } from "react";
import { Check, X, Edit2 } from "lucide-react"; // Import Lucide-React icons

const StaffLeaveTable = ({ data, currentPage, itemsPerPage }) => {
  const paginatedData = paginate(data, currentPage, itemsPerPage);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedLeave, setSelectedLeave] = useState(null); // State variable to track the selected leave

  function paginate(data, currentPage, itemsPerPage) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  }
  const handleDropdownToggle = (leave) => {
    // Toggle the dropdown visibility and set the selected leave
    setShowDropdown(!showDropdown);
    setSelectedLeave(leave);
  };
  return (
    <div className="mt-3 bg-white shadow-md rounded-xl text-xs sm:text-sm border-2 border-indigo-300 overflow-x-auto no-scrollbar font-poppins">
      <table className="min-w-full divide-y divide-gray-200 ">
        <thead className="bg-cyan-100">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
            >
              Staff No.
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
            >
              Leave Type
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider whitespace-nowrap"
            >
              Apply Date
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider"
            >
              From
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider"
            >
              To
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider"
            >
              Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {paginatedData.map((leave, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap">{leave.staffNo}</td>
              <td className="px-6 py-4 whitespace-nowrap">{leave.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{leave.leaveType}</td>
              <td className="px-6 py-4 whitespace-nowrap">{leave.applyDate}</td>
              <td className="px-6 py-4 whitespace-nowrap">{leave.fromDate}</td>
              <td className="px-6 py-4 whitespace-nowrap">{leave.toDate}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <p
                  className={`flex items-center gap-2 p-2 rounded-2xl font-medium  ${
                    leave.status === "Approved"
                      ? "bg-green-100 text-green-500 "
                      : "bg-red-100 text-red-500"
                  }`}
                >
                  <div
                    className={`bg-green-300 rounded-full w-2 h-2 ${
                      leave.status === "Approved"
                        ? "bg-green-600 "
                        : "bg-red-400"
                    }`}
                  ></div>
                  <span>{leave.status}</span>
                </p>
              </td>
              <td className="relative px-6 py-4 whitespace-nowrap">
                <button
                  onClick={() => handleDropdownToggle(leave)}
                  className="relative inline-block text-left z-10 text-gray-700 focus:outline-none relative z-10"
                >
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.834 4.13446L15.834 7.13446M10.834 18.1345H18.834M2.83398 14.1345L1.83398 18.1345L5.83398 17.1345L17.42 5.54846C17.7949 5.17341 18.0056 4.66479 18.0056 4.13446C18.0056 3.60414 17.7949 3.09552 17.42 2.72046L17.248 2.54846C16.8729 2.17352 16.3643 1.96289 15.834 1.96289C15.3037 1.96289 14.795 2.17352 14.42 2.54846L2.83398 14.1345Z"
                      stroke="black"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  </button>
                  {showDropdown && selectedLeave === leave && (
                    <div className="absolute right-6 mt-2 w-44 bg-white rounded-md shadow-lg z-40 ">
                      <ul className="py-2">
                        <li className="flex items-center bg-green-200 text-gray-700 px-4 py-2 hover:bg-gray-100">
                          <Check size={16} className="mr-2" /> Approve
                        </li>
                        <li className="flex items-center bg-red-200 text-gray-700 px-4 py-2 hover:bg-gray-100">
                          <X size={16} className="mr-2" /> Reject
                        </li>
                        <li className="flex items-center gap-2 bg-green-50 text-gray-700 px-4 py-2 hover:bg-gray-100">
                          <svg
                            className="w-3 h-3"
                            viewBox="0 0 27 27"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M23.7039 13.6025C23.7039 13.3285 23.8127 13.0656 24.0065 12.8719C24.2003 12.6781 24.4631 12.5692 24.7372 12.5692C25.0112 12.5692 25.274 12.6781 25.4678 12.8719C25.6616 13.0656 25.7704 13.3285 25.7704 13.6025V24.9686C25.7704 25.2426 25.6616 25.5055 25.4678 25.6992C25.274 25.893 25.0112 26.0019 24.7372 26.0019H2.00496C1.73092 26.0019 1.4681 25.893 1.27432 25.6992C1.08054 25.5055 0.97168 25.2426 0.97168 24.9686V2.23641C0.97168 1.96236 1.08054 1.69954 1.27432 1.50577C1.4681 1.31199 1.73092 1.20312 2.00496 1.20312H13.3711C13.6451 1.20312 13.9079 1.31199 14.1017 1.50577C14.2955 1.69954 14.4043 1.96236 14.4043 2.23641C14.4043 2.51045 14.2955 2.77327 14.1017 2.96705C13.9079 3.16082 13.6451 3.26969 13.3711 3.26969H3.03824V23.9353H23.7039V13.6025Z"
                              fill="#2956AE"
                            />
                            <path
                              d="M12.0133 14.9662L13.7183 14.7224L24.1916 4.2511C24.2903 4.15578 24.369 4.04177 24.4232 3.9157C24.4773 3.78964 24.5058 3.65405 24.507 3.51685C24.5082 3.37965 24.4821 3.24359 24.4301 3.1166C24.3781 2.98962 24.3014 2.87425 24.2044 2.77723C24.1074 2.68021 23.992 2.60349 23.865 2.55154C23.738 2.49958 23.602 2.47344 23.4648 2.47463C23.3276 2.47582 23.192 2.50433 23.0659 2.55848C22.9399 2.61263 22.8259 2.69135 22.7305 2.79004L12.2551 13.2613L12.0113 14.9662H12.0133ZM25.6527 1.32691C25.9407 1.61479 26.1692 1.9566 26.3251 2.33282C26.481 2.70904 26.5613 3.11229 26.5613 3.51954C26.5613 3.92678 26.481 4.33003 26.3251 4.70625C26.1692 5.08247 25.9407 5.42429 25.6527 5.71216L14.9375 16.4273C14.7795 16.5859 14.5743 16.6889 14.3527 16.7207L10.9429 17.2085C10.784 17.2313 10.6219 17.2168 10.4696 17.166C10.3173 17.1153 10.1789 17.0298 10.0653 16.9163C9.95182 16.8028 9.86631 16.6644 9.8156 16.5121C9.76489 16.3597 9.75037 16.1977 9.77319 16.0388L10.2609 12.6289C10.2922 12.4076 10.3945 12.2024 10.5523 12.0441L21.2695 1.32898C21.8508 0.747848 22.6391 0.421387 23.4611 0.421387C24.283 0.421387 25.0714 0.747848 25.6527 1.32898V1.32691Z"
                              fill="#2956AE"
                            />
                          </svg>{" "}
                          Add Note
                        </li>
                      </ul>
                    </div>
                  )}
               
              
              </td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffLeaveTable;
