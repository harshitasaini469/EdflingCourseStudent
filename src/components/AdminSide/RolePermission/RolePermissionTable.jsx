import React from "react";

const RolePermissionTable = ({ data, currentPage, itemsPerPage }) => {
  const paginatedData = paginate(data, currentPage, itemsPerPage);

  function paginate(data, currentPage, itemsPerPage) {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    return data.slice(startIndex, endIndex);
  }
  return (
    <div className="mt-5 shadow-md rounded-xl text-xs sm:text-sm border-2 border-indigo-300 overflow-x-auto no-scrollbar font-poppins">
      <table className="min-w-full border-collapse divide-y divide-gray-200">
        <thead className="bg-cyan-200">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider"
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
              className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider"
            >
              Role
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider"
            >
              Email Status
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider"
            >
              Password
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left  font-medium text-gray-500 uppercase tracking-wider"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody className=" bg-white divide-y divide-gray-200">
          {paginatedData.map((item) => (
            <tr key={item.staffNo}>
              <td className="px-6 py-4 whitespace-nowrap">{item.staffNo}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.role}</td>
              <td className="px-6 py-4 whitespace-nowrap">{item.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  className={`px-4 py-2 rounded-full font-medium flex items-center gap-2 ${
                    item.emailStatus
                      ? "bg-green-200 text-green-600"
                      : "bg-red-200 text-red-600"
                  }`}
                >
                  <div
                    className={`rounded-full w-2 h-2 ${
                      item.emailStatus ? "bg-green-600 " : "bg-red-500"
                    }`}
                  ></div>
                  <p>{item.emailStatus ? "Enable" : "Disable"}</p>
                </button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button className="px-4 py-2 border-1 border-black rounded-xl">
                  Password
                </button>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center gap-4">
                  <button>
                    <svg
                      width="21"
                      height="19"
                      viewBox="0 0 21 19"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12.0473 0.533203C9.71428 0.533203 7.4768 1.46 5.8271 3.1097C4.17739 4.75941 3.2506 6.99689 3.2506 9.32992H0.318359L4.22801 13.2396L8.13767 9.32992H5.20543C5.20543 5.55711 8.2745 2.48803 12.0473 2.48803C15.8201 2.48803 18.8892 5.55711 18.8892 9.32992C18.8892 13.1027 15.8201 16.1718 12.0473 16.1718C10.1902 16.1718 8.50908 15.429 7.27754 14.2268L5.88962 15.6049C7.53177 17.2209 9.74337 18.1266 12.0473 18.1266C14.3804 18.1266 16.6178 17.1998 18.2675 15.5501C19.9172 13.9004 20.844 11.663 20.844 9.32992C20.844 6.99689 19.9172 4.75941 18.2675 3.1097C16.6178 1.46 14.3804 0.533203 12.0473 0.533203ZM14.0021 8.35251V7.3751C14.0021 6.29994 13.1225 5.42027 12.0473 5.42027C10.9722 5.42027 10.0925 6.29994 10.0925 7.3751V8.35251C9.55492 8.35251 9.11508 8.79235 9.11508 9.32992V12.2622C9.11508 12.7997 9.55492 13.2396 10.0925 13.2396H14.0021C14.5397 13.2396 14.9796 12.7997 14.9796 12.2622V9.32992C14.9796 8.79235 14.5397 8.35251 14.0021 8.35251ZM13.0247 8.35251H11.0699V7.3751C11.0699 6.83752 11.5097 6.39768 12.0473 6.39768C12.5849 6.39768 13.0247 6.83752 13.0247 7.3751V8.35251Z"
                        fill="black"
                        fill-opacity="0.5"
                      />
                    </svg>
                  </button>
                  <button>
                    <svg
                      width="21"
                      height="21"
                      viewBox="0 0 21 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.5069 15.2178C15.9142 15.2178 16.2605 15.0751 16.5459 14.7897C16.8313 14.5043 16.9737 14.1583 16.973 13.7517C16.973 13.3445 16.8303 12.9981 16.5449 12.7127C16.2595 12.4273 15.9135 12.285 15.5069 12.2856C15.0996 12.2856 14.7533 12.4283 14.4679 12.7137C14.1825 12.9991 14.0401 13.3451 14.0408 13.7517C14.0408 14.159 14.1835 14.5053 14.4689 14.7907C14.7543 15.0761 15.1003 15.2185 15.5069 15.2178ZM15.5069 18.1501C15.9956 18.1501 16.4517 18.0361 16.8753 17.808C17.2988 17.5799 17.6491 17.2623 17.926 16.855C17.5513 16.6269 17.1604 16.4598 16.7531 16.3536C16.3459 16.2474 15.9305 16.1946 15.5069 16.1953C15.0834 16.1953 14.668 16.248 14.2607 16.3536C13.8534 16.4592 13.4625 16.6263 13.0878 16.855C13.3647 17.2623 13.715 17.5799 14.1385 17.808C14.5621 18.0361 15.0182 18.1501 15.5069 18.1501ZM2.80053 18.1501C2.26295 18.1501 1.80259 17.9585 1.41945 17.5754C1.0363 17.1922 0.845053 16.7322 0.845705 16.1953V2.51147C0.845705 1.97389 1.03728 1.51353 1.42042 1.13038C1.80357 0.747238 2.26361 0.555991 2.80053 0.556642H16.4843C17.0219 0.556642 17.4823 0.748215 17.8654 1.13136C18.2485 1.51451 18.4398 1.97454 18.4391 2.51147V9.06014C18.1296 8.91353 17.812 8.78711 17.4862 8.6809C17.1604 8.57469 16.8264 8.49747 16.4843 8.44925V2.51147H2.80053V16.1953H8.71388C8.76275 16.5536 8.84029 16.8957 8.94651 17.2215C9.05272 17.5473 9.17881 17.8569 9.32477 18.1501H2.80053ZM2.80053 15.2178V16.1953V2.51147V8.44925V8.37595V15.2178ZM4.75536 14.2404H8.73832C8.78719 13.8983 8.86473 13.5644 8.97094 13.2386C9.07715 12.9128 9.1951 12.5951 9.32477 12.2856H4.75536V14.2404ZM4.75536 10.3308H10.7176C11.2389 9.84207 11.8214 9.43481 12.4652 9.10901C13.109 8.7832 13.7971 8.56329 14.5295 8.44925V8.37595H4.75536V10.3308ZM4.75536 6.42112H14.5295V4.4663H4.75536V6.42112ZM15.5069 20.1049C14.1548 20.1049 13.0021 19.6283 12.0488 18.675C11.0955 17.7216 10.6192 16.5693 10.6198 15.2178C10.6198 13.8658 11.0965 12.7131 12.0498 11.7598C13.0031 10.8064 14.1555 10.3301 15.5069 10.3308C16.859 10.3308 18.0117 10.8074 18.965 11.7607C19.9183 12.714 20.3946 13.8664 20.394 15.2178C20.394 16.5699 19.9173 17.7226 18.964 18.6759C18.0107 19.6292 16.8583 20.1056 15.5069 20.1049Z"
                        fill="black"
                        fill-opacity="0.5"
                      />
                    </svg>
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RolePermissionTable;
