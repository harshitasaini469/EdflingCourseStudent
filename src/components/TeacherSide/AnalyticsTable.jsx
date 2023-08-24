import React from 'react';

const AnalyticsTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr className='text-black'>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider flex items-center space-x-1">
     
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
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
              Page Views
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
              Participations
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
              Submissions
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
              On Time
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
              Late
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium  uppercase tracking-wider">
              Missing
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider">
              Current Score
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {/* Replace this with your actual data */}
          <tr>
            <td className="px-6 py-4 whitespace-nowrap flex items-center space-x-2 ">
             <div className='rounded-full w-7 h-7 bg-gray-300'></div> <span>John Doe</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              100
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              20
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              15
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              10
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              5
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              0
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              90
            </td>
          </tr>
          <tr>
          <td className="px-6 py-4 whitespace-nowrap flex items-center space-x-2 ">
             <div className='rounded-full w-7 h-7 bg-gray-300'></div> <span>John Doe</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              100
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              20
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              15
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              10
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              5
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              0
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              90
            </td>
          </tr>
          <tr>
          <td className="px-6 py-4 whitespace-nowrap flex items-center space-x-2 ">
             <div className='rounded-full w-7 h-7 bg-gray-300'></div> <span>John Doe</span>
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              100
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              20
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              15
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              10
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              5
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              0
            </td>
            <td className="px-6 py-4 whitespace-nowrap">
              90
            </td>
          </tr>
          {/* Add more rows for other students */}
        </tbody>
      </table>
    </div>
  );
};

export default AnalyticsTable;
