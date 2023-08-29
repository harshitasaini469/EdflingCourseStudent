import React from 'react';

const StaffDirectoryList = ({ staffData }) => {
  return (
    <div className="bg-white shadow-md rounded-xl text-sm border-2 border-indigo-300 overflow-x-auto no-scrollbar font-poppins">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-sky-200">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Staff No.
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Role
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Department
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Designation
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Email
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {staffData.map((staff) => (
            <tr key={staff.id}>
              <td className="px-6 py-4 whitespace-nowrap">{staff.id}</td>
              <td className="px-6 py-4 whitespace-nowrap">{staff.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{staff.role}</td>
              <td className="px-6 py-4 whitespace-nowrap">{staff.department}</td>
              <td className="px-6 py-4 whitespace-nowrap">{staff.designation}</td>
              <td className="px-6 py-4 whitespace-nowrap">{staff.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{staff.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StaffDirectoryList;
